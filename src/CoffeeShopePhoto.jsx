import "./css_files/CoffeeShopPhoto.css"
const CoffeeShopPhoto = () => {
    return ( 
    <>
        <div className="CoffeeShopPhotoBox fade-in">
            <img src="src/photos/CoffeeShop.jpg" alt="cafe coffeeshop shop" />
            <img src="src/photos/coffeIcon3.png" alt="cafe coffeeshop shop" />
            <img src="src/photos/coffeIcon1.webp" alt="cafe coffeeshop shop" />
            <img src="src/photos/coffeIcon2.png" alt="cafe coffeeshop shop" />
            <div>
                <p className="uppercase text-4xl font-bold text-gray-100 p-3 option1">delicious</p>
                <p className="uppercase text-4xl font-bold text-gray-100 p-3 option2">hot</p>
                <p className="uppercase text-4xl font-bold text-gray-100 p-3 option3">luxury</p>
            </div>
        </div>
    
    </> );
}
 
export default CoffeeShopPhoto;