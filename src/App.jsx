import Header from "./modules/Header";
import MainBlock from "./modules/MainBlock";
import Footer from "./modules/Footer";
import Facebook from "./modules/Facebook";

import { useData } from "./DataContext"; // Import the custom hook

export default function App() {
    const data = useData();
    function getUrl() {
        // Получаем ссылку перенаправления
        // let redirectLink = document.querySelector(".redirectLink").href;
        let redirectLink = "{offer}";

        // Задаем параметры для перенаправления
        let adRedirectName = data.productName;
        let img_url = "./img/product/product.webp";

        // Отправляем событие fbq
        fbq("track", "InitiateCheckout");

        // Проверяем, есть ли уже параметры в ссылке
        var separator = redirectLink.includes("?") ? "&" : "?";

        // Перенаправляем с новыми параметрами
        window.location.href =
            redirectLink +
            separator +
            "adRedirectName=" +
            encodeURIComponent(adRedirectName) +
            "&adRedirectImg=" +
            encodeURIComponent(img_url);
    }

    function buyHandler(event) {
        event.preventDefault();
        // Вызываем функцию getUrl для изменения URL и перенаправления
        getUrl();
    }

    return (
        <>
            <Facebook></Facebook>
            <Header></Header>
            <MainBlock buyHandler={buyHandler}></MainBlock>
            <Footer></Footer>
        </>
    );
}
