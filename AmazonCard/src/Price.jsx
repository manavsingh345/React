function Price({ oldPrice, newPrice }) {
    let oldstyles = {
        textDecoration: "line-through",

    };
    let newstyles={
       fontWeight:"bold", 
    }
    let styles={
        backgroundColor:"#e0c367",
        height:"50px",
        borderBottomLeftRadius:"14px"
    }
    return (
        <div style={styles}>
            <p style={oldstyles}>{oldPrice} </p>
            <p style={newstyles}>{newPrice}</p>
        </div>
    )
}
export default Price;