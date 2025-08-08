"use client"; // Indica que será usado códigoa JavaScript que será rodado no browser do usuário

// Carregando funções de bibliotecas
import {useState} from "react"; // função do React que lida com estados de campos
import hash from "object-hash"; // função para criar hashs
import { addLink } from "@/services/Web3Service";

export default function Home() {

  // Inicialização dos estados e suas respectivas funções de alteração de seus valores
  const [url, setUrl] = useState(""); // estado e função relacionadas às URLs
  const [fee, setFee] = useState(0); // estado e função relacionadas aos fees
  const [message, setMessage] = useState(""); // estado e função relacionadas às mensagens

  // Função para setar o valor do estado url
  function onUrlChange(event) {
    setUrl(event.target.value);
  }

  // Função para setar o valor do estado fee
  function onFeeChange(event) {
    setFee(event.target.value);
  }

  function btnCreateClick() {
    // Criação de um slice de hash a partir da URL do usuário que será utilizado como ID da link
    const linkId = hash(url).slice(0, 6);
    setMessage(`Enviando seu link para a blockchain... aguarde...`);

    addLink({ url, linkId, feeInWei: fee}) // Como a transação pode demorar ser processada pela blockchain, eu utilizo then para setar os estados
      .then(() => {
        setUrl("");
        setFee(0);
        setMessage(`Seu link foi criado com sucesso: http://localhost:3000/${linkId}`);
      })
      .catch(err => setMessage(err.message));
  }

  return (
    <>
      <div className="container px-5 py-5">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div className="col-6">
            <img
              src="https://imgs.search.brave.com/H-g_QJIZ-YHS6-SWOmqLqJh69LH1Pl8IgqXlBuufhiw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5na2V5LmNvbS9w/bmcvZGV0YWlsLzQ4/LTQ4NTM3NV9oeWxp/YW4tc2hpZWxkLWNy/ZXN0LnBuZw"
              className="d-block mx-lg-auto img-fluid"
              width="700"
              height="500"
            />
          </div>
          <div className="col-6">
            <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">Link Shield</h1>
            <p className="lead">Proteja seus links e lucre <small>rupies</small> com eles.</p>
            <hr />
            <div className="instruction-text mt-4">
              <p className="mb-3">
                <span className="fw-bold">1.</span> Cole sua URL abaixo
              </p>
              <p className="mb-3">
                <span className="fw-bold">2.</span> Defina a taxa por clique
              </p>
              <p>
                <span className="fw-bold">3.</span> Conecte sua carteira para proteger seu link com a tecnologia blockchain
              </p>
            </div>
            <div className="form-floating mb-3">
              <input type="text" id="url" className="form-control" value={url || ""} onChange={onUrlChange} />
              <label htmlFor="url">Link:</label>
            </div>
            <div className="row mb-3">
              <div className="col-6">
                <div className="form-floating">
                  <input type="number" id="fee" className="form-control" value={fee || "0"} onChange={onFeeChange} />
                  <label htmlFor="fee">Taxa por clique (wei):</label>
                </div>
              </div>
              <div className="col-6">
                <button type="button" className="btn btn-primary w-100 h-100" onClick={btnCreateClick}>
                  <img src="/metamask.svg" width={32} className="me-2" />
                  Conectar e Criar Link
                </button>
              </div>
            </div>

            {
              message
              ? <div className="alert alert-success p-3 col-12 mt-3" role="alert"> {message} </div>
              : <></>
            }
          </div>
        </div>
      </div>
    </>
  );
}
