import Products from "./Products";
import CoffeeShopPhoto from "./CoffeeShopePhoto";
import Footer from "./Footer";
const ShowOff = () => {
    return(
        <>
            <Products/>
            <h2 className="text-4xl text-center font-bold text-gray-700 m-20 uppercase"> our coffee shop</h2>
            <CoffeeShopPhoto/>
        </>
    );
}
 
export default ShowOff;