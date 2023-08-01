import './Footer.css';

const Footer = () => {
    return (
            <footer className="footer">
                <input type="text" placeholder="Что необходимо сделать" className="form-control me-2" />
                <button type="button" className="btn btn-primary">Добавить</button>
            </footer>
    )
}

export default Footer;