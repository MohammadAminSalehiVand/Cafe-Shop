import Product from "./Product";
const Products = () => {
    let productList = [
        {name:"Latte",
        price:60000,
        discription:"Milk and Coffee",
        image:"latte.jpg"},
        {name:"Ice Late",
        price:70000,
        discription:"Milk and Coffee and some Ice Cubes",
        image:"ice-latte.jpeg"},
        {name:"Americano",
        price:60000,
        discription:"Americano Coffee",
        image:"americano.jpg"},
        {name:"Coffee",
        price:60000,
        discription:"Regular Coffee",
        image:"coffee.jpg"},
        {name:"Latte",
        price:60000,
        discription:"Milk and Coffee",
        image:"latte.jpg"},
        {name:"Ice Late",
        price:70000,
        discription:"Milk and Coffee and some Ice Cubes",
        image:"ice-latte.jpeg"},
        {name:"Americano",
        price:60000,
        discription:"Americano Coffee",
        image:"americano.jpg"},
        {name:"Coffee",
        price:60000,
        discription:"Regular Coffee",
        image:"coffee.jpg"}
        ]
    return ( <div className="flex flex-row flex-wrap justify-around">
        {productList.map((item,index) =>
            (<Product name={item.name} price={item.price} discription={item.discription} image={item.image} key={index} />
        ))}
        {/* <Product name={productList[0].name} price={productList[0].price} discription={productList[0].discription} image={productList[0].image}/> */}
    </div> );
}
 
export default Products;