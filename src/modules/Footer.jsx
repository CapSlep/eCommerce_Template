import { useData } from "../DataContext"; // Import the custom hook

export default function Footer() {
    const data = useData();

    return (
        <footer className="flex-row container">
            <div className="footer__image-wrapper">
                <img src="./img/logo.svg" alt="LOGO" />
            </div>
            <span className="footer__text">{data.footer}</span>
        </footer>
    );
}
