import Carrocel from "../components/Carrocel";
import Conteudo from "../components/Conteudo";
import Header from "../components/Header";
import RespIa from "../components/RespIa";

export default function Home() {
  return (
    <>
      <div className="Home">
        <Header />
        <div className="cont">
          <div className="pesquisa">
           
            <RespIa />
          </div>
          <div className="containe">
            <Carrocel/>
          </div>
          <div className="conteudoGeral">
            <Conteudo />
          </div>
        </div>
      </div>
    </>
  );
}
