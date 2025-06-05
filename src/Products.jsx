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
    return ( 
    <>
        <h2 className="text-4xl text-center font-bold text-gray-700 mb-20 pt-10">PRODUCTS</h2>
        <div className="flex flex-row flex-wrap justify-around mb-10">
            {productList.map((item,index) =>
                (<Product name={item.name} price={item.price} discription={item.discription} image={item.image} key={index} />
            ))}
        </div> 
    </>
    );
}
 
export default Products;