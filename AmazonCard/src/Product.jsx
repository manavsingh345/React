import "./Product.css";
import Price from "./Price.jsx";
import Over from "./Over.jsx";

function Product({ title, idx }) {
    let oldPrices = ["12,976", "11,987", "1,598", "599"];
    let newPrices = ["8,999", "9,199", "899", "278"];
    let descriptions1 = ["8000 DPI", "Intuitive Touch Surface", "Designed for iPad Pro", "Wireless Mouse 2.4GHz"];
    let descriptions2 = ["10000 DPI", "Soft Touch Surface", "Designed for Mobile Pro", "Bluetooh Mouse 2.4GHz"];
    return (
        <div className="Product">
            <h4>{title}</h4>
            <Over ov1={descriptions1[idx]}  ov2={descriptions2[idx]}/>
            <Price oldPrice={oldPrices[idx]} newPrice={newPrices[idx]} />

        </div>
    );
}

export default Product;