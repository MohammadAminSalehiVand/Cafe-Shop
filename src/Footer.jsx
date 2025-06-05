import "./css_files/Footer.css"
import {Link} from "react-router-dom";
const Footer = () => {
    return ( 
    <>
        <div className="footerBox flex flex-row justify-between flex-wrap uppercase">
            <div className="box1 boxes">
                    <h5 className="mb-5"><Link to="/ContactUs">Contact Us</Link></h5>
                    <p className="mb-3">Location : <span>Tehran _ Ghiamdasht _ Azad Univercity</span></p>
                    <p className="mb-3">Call Number : <span>021-11111111</span></p>
            </div>
            <div className="box2 boxes">
                <h5 className="mb-5"><Link to="/AboutUs">About Us</Link></h5>
                <p>a Coffee Shop that have a lovely place for spending some time and enjoy with your friends</p>
            </div>
            <div className="box3 boxes">
                <Link to="/Product"><h5 className="mb-5">categories</h5></Link>
                <ul>
                    <li className="mb-3">Hot</li>
                    <li className="mb-3">Cold</li>
                    <li className="mb-3">Dairy</li>
                    <li className="mb-3">Shakes</li>
                </ul>
            </div>
            <div className="box4 boxes mt-10">
                <hr />
                <p className="text-sm text-gray-400 uppercase my-tag">Created by Mohammad Amin Salehi Vand</p>
            </div>
        </div>
    
    </> );
}
 
export default Footer;