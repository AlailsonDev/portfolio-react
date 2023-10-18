import facebook from "../images/social/facebook.png";
import instagram from "../images/social/instagram.png";
import linkedin from "../images/social/linkedin.png";
import github from "../images/social/github.png";

function Footer() {
  return (
    <footer class="footer">
      <img src={facebook} />
      <img src={instagram} alt="instagram" class="social-img" />
      <img src={linkedin} />
      <img src={github} />
    </footer>
  );
}

export default Footer;
