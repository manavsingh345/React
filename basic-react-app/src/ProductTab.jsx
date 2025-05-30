import Product from "./Product.jsx";
function ProductTab() {
    let options = ["Hi-tech", "Long Lasting", "Expensive"];
    return (<>
        <Product title="Phone" description="It is 6G smart phone" price={150000} />
        <Product title="Laptop" description="Macbook" price={190000} />
        <Product title="Watch" description="Heart Beat detection" price={10000}/>
    </>);
}

export default ProductTab;