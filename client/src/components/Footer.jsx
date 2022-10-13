import logo from "../assets/logo.png";

function Footer() {
    return (
        <footer>
            <img src={logo} alt="logo" />
            <span>
                Made with 💕 and <b>React.js</b>.
            </span>
        </footer>
    );
}

export default Footer;
