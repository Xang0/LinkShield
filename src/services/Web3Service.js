import Web3 from "web3";
import ABI from "./ABI.json"

const CONTRACT_ADDRESS = "0x322411CF11A6E613677c4F796eD27763dE1c3c4D";

export async function connectContract() {
    try {
        // Verificando se existe alguma carteira instalada
        if (!window.ethereum) throw new Error("Sem carteira cripto conectada a uma rede Ethereum instalada");

        // Realizando a conexão com a carteira
        const web3 =  new Web3(window.ethereum);
        const accounts = await web3.eth.requestAccounts(); //Requisitando a lista de contas da carteira conectada

        if (!accounts || !accounts.length) throw new Error("Carteira sem conta ou usuário recusou acesso às contas da carteira");

        // Retorna um contrato inicializado com a ABI do contrato, seu endereço na blockchain e a conta que está se conectando a ela
        return new web3.eth.Contract(ABI, CONTRACT_ADDRESS, { from: accounts[0] });
    } catch (err) {
        throw new Error(err.message || "Erro ao conectar carteira");
    }
}

export async function addLink({ url, linkId, feeInWei }) {
    // Pega o contrato da função que cria uma conexão com ele na blockchain
    const contract = await connectContract();
    // Chamo o seu método público addLink e envio a requisição para o contrato usando .send()
    return contract.methods.addLink(url, linkId, feeInWei).send();
}

export async function getLink(linkId) {
    const contract = await connectContract();
    // Pela função getLink se tratar de uma chamada e não uma transação, é utilizado .call() ao ínves de .send()
    return contract.methods.getLink(linkId).call();
}

export async function payLink(linkId, valueInWei) {
    const contract = await connectContract();
    return contract.methods.payLink(linkId).send({
        value: valueInWei
    });
}