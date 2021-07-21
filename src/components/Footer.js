import Icone from './Icone';

const Footer = (props) => {
    return (
        <footer>
            <div className="my-info">
                <p>
                    Made by <a href={props.href}>{props.name}</a> with React
                </p>
            </div>
            <div className="social-network">
                <Icone
                    href="https://www.linkedin.com/in/cyril-lesot-384380100/"
                    className="fab fa-linkedin-in"
                />
                <Icone href="https://github.com/mc6ril" className="fab fa-github" />
            </div>
        </footer>
    );
};

export default Footer;
