import logo from "../images/logo.png";

function Header() {
  return (
    <header class="header" id="top">
      <img class="logo-img" src={logo} />
      <nav class="nav">
        <ul class="menu">
          <a href="#top">
            <li class="link">_home</li>
          </a>
          <a href="#portfolio">
            <li class="link">_portfolio</li>
          </a>
          <a href="#about">
            <li class="link">_sobre</li>
          </a>
          <a href="#contact">
            <li class="link">_contato</li>
          </a>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
