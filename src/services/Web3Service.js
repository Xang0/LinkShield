import Web3 from "web3";
import ABI from "@/services/ABI.json"

const CONTRACT_ADDRESS = "0x96514951D434051B2A41232751ed29A954cfd68D";

export async function connectContract() {
    try {
        // Verificando se existe alguma carteira instalada
        if (!window.ethereum) throw new Error("Sem carteira cripto conectada a uma rede Ethereum instalada");

        // Realizando a conexão com a carteira
        const web3 =  new Web3(window.ethereum);
        const accounts = await web3.eth.requestAccounts(); //Requisitando a lista de contas da carteira conectada

        if (!accounts || !accounts.length) throw new Error("Carteira sem conta ou usuário recusou acesso às contas da carteira");

        return new web3.eth.Contract(ABI, CONTRACT_ADDRESS, { from: accounts[0] });
    } catch (err) {
        throw new Error(err.message || "Erro ao conectar carteira");
    }
}