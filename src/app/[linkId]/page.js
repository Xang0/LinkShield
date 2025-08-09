"use client";

import { getLink, payLink } from "@/services/Web3Service";
// Função da biblioteca next.js usada para pegar parâmetros passados pela URL
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";

export default function Home() {

  // Inicialização dos estados e suas respectivas funções de alteração de seus valores
  const [message, setMessage] = useState("");
  const [link, setLink] = useState({ fee: 0});

  const params = useParams();

  useEffect(() => {
    setMessage("Buscando dados do link... aguarde...");
    getLink(params.linkId) // OBS: o parâmetro passado pela URL tem o mesmo nome da pasta que se refere ao código dessa sub URL
      .then(link => {
        setMessage("");
        // Se o objeto link requisitado do contrato inteligente possuir como informação link, significa que o usuário possui acesso a ele
        // Se não, significa que ele prica pagar para ter acesso
        if (link.url) {
          window.location.href = link.url;
        } else {
          setLink(link);
        }
      })
      .catch(err => setMessage(err.message));
  }, [])

  // Função que redireciona o usuário para o link desejado ou para o pagamento para acessar o link
  function btnAccessClick() {
    setMessage("Pagando pelo acesso... aguarde...");
    payLink(params.linkId, link.fee)
      .then(() => {
        setMessage("Pagamento realizado... redirecionando...");
        return getLink(params.linkId)
      })
      .then(link => window.location.href = link.url)
      .catch(err => setMessage(err.message));
  }

  return (
    <>
      <div className="container px-5 py-5">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div className="col-6">
            <img
              src="https://imgs.search.brave.com/CUoyD21huIKlpsEAEEigBSfMz-i9xipcHpg_9Y-2RbM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMubGF1bmNoYm94/LWFwcC5jb20vN2Vm/MGQ5YzUtMzJkZC00/ODM4LWJlZDMtYmNi/YTY4ZTY0YjhjLmpw/Zw"
              className="d-block mx-lg-auto img-fluid"
              width="700"
              height="500"
            />
          </div>
          <div className="col-6">
            <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">Link Protegido</h1>
            <p className="lead">Este link está prtegido pela LinkShield</p>
            <hr />
            <div className="instruction-text mt-4">
              <p>
                Para acessar o conteúdo original, conecte sua carteira abaixo e confirme o pagamento da taxa de <strong>{link.fee} wei.</strong>
              </p>
            </div>
            <div className="row mb-3">
              <div className="col-12">
                <button type="button" className="btn btn-primary w-100 h-100" onClick={btnAccessClick}>
                  <img src="/metamask.svg" width={32} className="me-2" />
                  Pagar e Acessar Link
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
