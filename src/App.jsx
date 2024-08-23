import Header from "./modules/Header";
import MainBlock from "./modules/MainBlock";
import Footer from "./modules/Footer";

import { useData } from "./DataContext"; // Import the custom hook

export default function App() {
    return (
        <div>
            <Header></Header>
            <MainBlock></MainBlock>
            <Footer></Footer>
        </div>
    );
}
