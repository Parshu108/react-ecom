import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaGooglePay } from "react-icons/fa";
import { SiPaytm } from "react-icons/si";
import { FaAmazonPay } from "react-icons/fa";
const Footer=()=>{
   return(
      <>
         <div id="footer" className="container-fluid ">
            <div id="div1">
               <div id="f-div">
               <h4>Headphone</h4>
               <h6>
               <a href="#"><FaFacebook style={{color:"blue",fontSize:"25px"}} /></a>
               <a href="#"> <FaLinkedin style={{color:"blue",fontSize:"25px",marginLeft:"10px"}} /></a>
               <a href="#"> <FaTwitterSquare style={{color:"blue",fontSize:"25px",marginLeft:"10px"}} /></a>
               <a href="#"><FaGithub style={{color:"black",fontSize:"25px",marginLeft:"10px"}} /></a>
               </h6>
               <br />
               <input type="email" placeholder="Enter e-mail" />
            </div>
            <div>
               <li><a href="#">Home</a></li>
               <li><a href="#">About</a></li>
               <li><a href="#">Category</a></li>
               <li><a href="#">service</a></li>
            </div>
            <div>
               <li><a href="#">Category</a></li>
               <li><a href="#">Wireless</a></li>
               <li><a href="#">Neakband</a></li>
            </div>
            <div id="f-div1">
               <h5>payment</h5>
               <FaGooglePay style={{color:"blue",fontSize:"35px"}} />
               <SiPaytm style={{color:"blue",fontSize:"35px",marginLeft:"10px"}}/>
               <FaAmazonPay style={{color:"blue",fontSize:"35px",marginLeft:"10px"}}/>
            </div>
            </div>
            <div id="pdiv">
               <p>CopyWrite 2025 @HeadPhone-All Right Reserved.</p>
            </div>
         </div>
      </>
   )
}
export default Footer;