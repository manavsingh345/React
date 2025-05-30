import './Product.css';

function Product({ title, description, price, features }) {
    let isDiscount = price > 3000;
    let styles = { backgroundColor: isDiscount ? "pink" : "yellow" };
    return (
        <div className="Product" style={styles}>
            <h3>{title}</h3>
            <h5>{description}</h5>
            <h5>Price: {price}</h5>
            {isDiscount ? <p>Discount of 5%</p> : <a href="/">Get Discount</a>}
        </div>
    );
}

export default Product;