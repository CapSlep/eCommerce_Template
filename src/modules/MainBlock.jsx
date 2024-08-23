import Product from "./Product";

import { useData } from "../DataContext"; // Import the custom hook

export default function MainBlock() {
    const data = useData();

    return (
        <main className="main__block container flex-row">
            <aside className="product__image flex-row">
                <img src="./img/product/product.webp" alt="" />
            </aside>
            <Product></Product>
            <aside className="checkout">
                <div className="checkout__content">
                    <div className="checkout__header flex-row">
                        <div className="checkout__img-wrapper">
                            <img src="./img/icons/cart.svg" alt="Cart" />
                        </div>
                        <span className="checkout__trolley">
                            {data.yourTrolley}
                        </span>
                    </div>
                    <div className="checkout__info flex-column">
                        <div className="checkout__summary flex-row">
                            <span className="checkout__summary-text">
                                {data.shoppingTotal}
                            </span>
                            <span className="checkout__summary-price">
                                {data.newPrice}
                            </span>
                        </div>
                        <button className="checkout__button">
                            {data.checkout}
                        </button>
                    </div>
                </div>
            </aside>
        </main>
    );
}
