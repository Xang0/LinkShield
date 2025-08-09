// SPDX-License-Identifier: MIT

// Espicificação de qual versão do solidity este contrato aceita
pragma solidity ^0.8.30;

//Struct que representa um link
struct Link {
    string url;
    address owner;
    uint256 fee;
    uint256 date_created;
    uint256 number_of_payments;
}

// O contrato criado deve ter o mesmo nome do arquivo
contract LinkShield {

    // Variáveis do contrato
    address public autor;
    uint256 public commision = 1;
    // Eu defino um mapping passando por parâmetro o tipo da chave + => + o dado que será mapeado
    mapping(string => Link) private links;
    mapping(string => mapping(address => bool)) public hasAccess;

    // Construtor executado quando o contrato é implementado
    constructor() {
        autor = msg.sender;
    }

    // Função para cadastrar um link
    function addLinks(string calldata url, string calldata linkId, uint256 fee) public {
        Link memory link = links[linkId];
        // require é utilizado para realizar uma comparação e retornar uma resposta em caso da condição estar falsa
        require(link.owner == address(0) || link.owner == msg.sender, "This link id already has an owner");
        require(fee == 0 || fee >= commision, "Fee is too low");

        link.url = url;
        link.fee = fee;
        // msg é uma variável global que consegue me retornar diferentes informações sobre a requisição realizada para a função
        // a utilizada para este caso se trata de quem chamou a função na blockchain
        link.owner = msg.sender;
        link.date_created = block.timestamp;
        link.number_of_payments = 0;

        links[linkId] = link;
        hasAccess[linkId][msg.sender] = true;
    }

    // Função para o usuário realizar pagamento do link para ter acesso a ele
    // Para que o solidity identifique que essa função serve para realizar pagamentos, eu devo indicar isso na sua assinatura com payable
    function payLink(string calldata linkId) public payable {
        Link memory link = links[linkId];
        require(link.owner != address(0), "Link not found");
        require(hasAccess[linkId][msg.sender] == false, "You already has access");
        require(msg.value >= link.fee, "Insufficient payment");

        hasAccess[linkId][msg.sender] = true;
        links[linkId].number_of_payments += 1;

        // forma de transferir o pagamento de uma carteira para outra
        payable(link.owner).transfer(msg.value - commision);
    }

    // Função para alterar o valor da comissão
    function setCommision(uint newComission) public {
        require(autor == msg.sender, "You don't have permission to change the value of the coission");
        commision = newComission;
    }

    // Função para fazer a leitura de informações do link
    // OBS: funções de leitura utilizam view como identificador dessa característica e returns (tipo) para indicar o que a função retorna 
    function getLink(string calldata linkId) public view returns (Link memory){
        Link memory link = links[linkId];
        if (link.fee == 0) return link;
        if (hasAccess[linkId][msg.sender] == false)
            link.url = "";

        return link;
    }

    // Função para excluir um link
    function deleteLink(string calldata linkId) public {
        Link memory link = links[linkId];
        require(link.owner == msg.sender, "You don't have permission the make this action");

        delete links[linkId];


        for (chave in hasAccess[linkId].) {
            delete hasAccess[linkId][chave];
        }
    }
}
