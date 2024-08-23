import { useData } from "../DataContext"; // Import the custom hook

export default function Header() {
    const data = useData();

    return (
        <header className="flex-column">
            <div className="header__box flex-row">
                <div className="header__logo flex-row">
                    <a href="#" className="burger">
                        <svg
                            viewBox="0 0 32 32"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M22.5 23a.5.5 0 01.5.5v1a.5.5 0 01-.5.5h-16a.5.5 0 01-.5-.5v-1a.5.5 0 01.5-.5zm-6-8a.5.5 0 01.5.5v1a.5.5 0 01-.5.5h-10a.5.5 0 01-.5-.5v-1a.5.5 0 01.5-.5zm9-8a.5.5 0 01.5.5v1a.5.5 0 01-.5.5h-19a.5.5 0 01-.5-.5v-1a.5.5 0 01.5-.5z"
                                fill="#3d3d3d"
                            ></path>
                        </svg>
                    </a>
                    <img src="./img/logo.svg" alt="LOGO" />
                </div>
                <div className="header__input flex-row">
                    <input
                        type="text"
                        placeholder="Search for products and recipes..."
                    />
                    <a href="#" className="header__search-button">
                        <img src="./img/icons/search.svg" alt="" />
                    </a>
                </div>
            </div>
            <nav className="flex-row">
                {data.navButtons.map((button, index) => {
                    return (
                        <div key={index} className="nav__button-wrapper">
                            <a href="#" className="nav__button">
                                {button}
                            </a>
                        </div>
                    );
                })}
            </nav>
        </header>
    );
}
