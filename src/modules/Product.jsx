import { useData } from "../DataContext"; // Import the custom hook

export default function Product() {
    const data = useData();

    return (
        <section className="product__section">
            <div className="product__header flex-column">
                <h1 className="product__title">{data.productName}</h1>
                <div className="product__header-wrapper flex-row">
                    <span className="product__pieces">5pce</span>
                    <span className="product__stars">★★★★★ (50+)</span>
                    <span className="product__code">{data.productCode}</span>
                </div>
            </div>
            <div className="product__price-box flex-column">
                <div className="product__price-compare flex-row">
                    <span className="product__price-old">{data.oldPrice}</span>
                    <span className="product__price-new">{data.newPrice}</span>
                </div>
                <div className="product__buttons-wrapper flex-row">
                    {/* <button className="product__button-manipulate button__green flex-row">
                        {data.add}
                    </button> */}
                    <button className="product__button-manipulate button__white flex-row">
                        <img src="./img/icons/heart.svg" alt="" />
                        <span>{data.favourite}</span>
                    </button>
                    <button className="product__button-manipulate button__white flex-row">
                        <img src="./img/icons/pad.svg" alt="" />
                        <span>{data.addToList}</span>
                    </button>
                </div>
                <span className="great__offers">{data.greatOffers}</span>
            </div>
            <div className="description__block flex-column">
                <h2 className="info__title">{data.descriptionTitle}</h2>
                <div className="description__content">
                    {data.descriptionTexts.map((text, index) => {
                        return (
                            <p
                                key={index}
                                className="description__text-element"
                            >
                                {text}
                            </p>
                        );
                    })}
                    <ul className="description__list flex-column">
                        {data.descriptionList.map((listElement, index) => {
                            return <li key={index}>{listElement}</li>;
                        })}
                    </ul>
                    <div className="description__product-info flex-column">
                        {data.productInformation.map((infoElement, index) => {
                            return <p key={index}>{infoElement}</p>;
                        })}
                    </div>
                </div>
            </div>
            <div className="comments__block flex-column">
                <div className="comments__header-wrapper flex-row">
                    <h2 className="info__title comments__title">
                        {data.commentsTitle}
                    </h2>
                </div>
                <div className="comments__content">
                    {data.comments.map((comment, index) => {
                        return (
                            <div className="comment flex-column" key={index}>
                                <div className="comment__headline flex-row">
                                    <div className="comment__title-box flex-row">
                                        <div className="comment__stars">
                                            ★★★★★
                                        </div>
                                        <h6 className="comment__title">
                                            {comment.title}
                                        </h6>
                                    </div>
                                    <span className="comment__time">
                                        {comment.time}
                                    </span>
                                </div>
                                <div className="comment__text">
                                    {comment.text}
                                </div>
                                {comment.image && (
                                    <div className="comment__image-wrapper">
                                        <img src={comment.image} alt="" />
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
