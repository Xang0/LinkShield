import Image from "next/image";

export default function Home() {
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
                Para acessar o conteúdo original, conecte sua carteira abaixo e confirme o pagamento da taxa de <strong>0 wei.</strong>
              </p>
            </div>
            <div className="row mb-3">
              <div className="col-12">
                <button type="button" className="btn btn-primary w-100 h-100">
                  <img src="/metamask.svg" width={32} className="me-2" />
                  Pagar e Acessar Link
                </button>
              </div>
            </div>

            <div className="alert alert-success p-3 col-12 mt-3" role="alert">
              Teste de mensagem
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
