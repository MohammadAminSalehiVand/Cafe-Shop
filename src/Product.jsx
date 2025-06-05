import "./css_files/product.css"
const Product = ({name,price,discription,image}) => {
    const findingAltName = ()=>{
        let word = ""
        for (const char of image){
            if (char == "."){
                break
            }
            else{
                word += char 
            }
        }
        return word;
    }
    return (
    <div className="productBox fade-in">
        <div className="productImage">
            <img className="w-full" src={"src/photos/" + image} alt={findingAltName()}/>
        </div>
        <div className="flex flex-col justify-between">
            <h3 className="uppercase">{name}</h3>
            <p className="text-gray-600">{discription}</p>
            <i>{price} $</i>
            <a>BUY</a>
        </div>

    </div> );
}
 
export default Product;