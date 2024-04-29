export default function Header() {
  return (
    <>
      <header>
        <ul className="nav justify-content-center">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              I.A
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Direito
            </a>
          </li>
        </ul>
        <div className="headCont" data-aos="zoom-in-down">
          <h1>Explore o direito de forma rápida e fácil!</h1>
          <p>
            Nosso site oferece uma maneira inovadora e eficiente de obter
            respostas rápidas e precisas sobre questões legais. Utilizando
            inteligência artificial, estamos aqui para ajudar a esclarecer suas
            dúvidas de forma acessível e conveniente. Explore nosso recurso de
            IA para obter orientação jurídica confiável, sempre que precisar
          </p>
        </div>
      </header>
    </>
  );
}
