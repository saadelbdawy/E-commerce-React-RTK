import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Homepage.css'
import { faStar } from '@fortawesome/free-regular-svg-icons';
import { faFacebook,faTwitter,faInstagram,faGithub 
  ,faCcVisa,faCcMastercard,faPaypal,faApplePay,faGooglePay,
   faCcPaypal, faCcApplePay} from '@fortawesome/free-brands-svg-icons';
import { useNavigate} from 'react-router-dom';

import image7 from '../assets/image 7.png';
import image8 from '../assets/image 8.png';
import image9 from '../assets/image 9.png';
import image10 from '../assets/image 10.png';
import image11 from '../assets/image11.png';
import image12 from '../assets/image12.png';
import rectanglefinal from '../assets/rectanglefinal.png'

function Homepage(){
 const navigate = useNavigate();
const handleclick =()=>{
  navigate('/products')
};
    return(
        <div className='maincont'>
<div className='blackbanner'>
    <div className='signup'>
     <div>  <p>Buy your first order and get 30% discount! </p> </div>
      
    </div>
</div>
<div className='vertix'>
<div className='firstsection'>
    <div className='hero'>
        <div className='hero1'>
        <h1> FIND CLOTHES<br></br>
        THAT MATCH<br></br>
        YOUR STYLE </h1></div>
        <div className='cater'>
            <p>
            Browse through our diverse range of meticulously crafted 
            garments, designed <br></br>  to bring out your individuality
            and cater to your sense of style.
      
            </p>
        </div>

           <div className='shopnowbutton'>
            
            <button className='shopbutton' onClick={handleclick}>
              Shop Now</button>
            </div> 
            <div className='a200'>
<h2>3000 + <br></br> Products</h2>
<h2>20000 + <br></br> Customers</h2>
<h2>25000 + <br></br> Orders</h2>
            </div>
              
         </div>
    <div className='heroimage'>
    <img src= {(rectanglefinal)}></img>
    </div>
</div>
<div className='versace'>
    <h1>Versace</h1>
    <h1>Zara</h1>
    <h1>Gucci</h1>
    <h1>Prada</h1>
    <h1>Calvin Klein</h1>
  
</div>

<div className="products">
      <h1>NEW ARRIVALS</h1>
<div className='productcard'>
<div className='innergrid'>
  <img  src={(image9)}></img>
  <h3> T-Shirt With Tape Details</h3>
  <div className='ratingstar'>
  <FontAwesomeIcon icon={faStar} size="lg" style={{color: "#FFD43B",}} />
  <FontAwesomeIcon icon={faStar} size="lg" style={{color: "#FFD43B",}} /> 
  <FontAwesomeIcon icon={faStar} size="lg" style={{color: "#FFD43B",}} /> 
  <FontAwesomeIcon icon={faStar} size="lg" style={{color: "#FFD43B",}} />
  <FontAwesomeIcon icon={faStar} size="lg" style={{color: "#FFD43B",}} />
 
 

  </div>
  <div className='price'>
    $330
  </div>
  </div>
  <div className='innergrid'>
  <img  src={(image7)}></img>
  <h3> Black Shirt Classic</h3>
  <div className='ratingstar'>
  <FontAwesomeIcon icon={faStar} size="lg" style={{color: "#FFD43B",}} />
  <FontAwesomeIcon icon={faStar} size="lg" style={{color: "#FFD43B",}} /> 
  <FontAwesomeIcon icon={faStar} size="lg" style={{color: "#FFD43B",}} /> 
  <FontAwesomeIcon icon={faStar} size="lg" style={{color: "#FFD43B",}} />
  <FontAwesomeIcon icon={faStar} size="lg" style={{color: "#FFD43B",}} />
 
 
  </div>
  <div className='price'>
    $310
  </div>
  </div>
  <div className='innergrid'>
    <div className='finalimage'>
  <img  src={(image8)}></img>
  <h3> Jeans Trousers</h3>
  <div className='ratingstar'>
  <FontAwesomeIcon icon={faStar} size="lg" style={{color: "#FFD43B",}} />
  <FontAwesomeIcon icon={faStar} size="lg" style={{color: "#FFD43B",}} /> 
  <FontAwesomeIcon icon={faStar} size="lg" style={{color: "#FFD43B",}} /> 
  <FontAwesomeIcon icon={faStar} size="lg" style={{color: "#FFD43B",}} />
  <FontAwesomeIcon icon={faStar} size="lg" style={{color: "#FFD43B",}} />
  </div>
 
  
  <div className='price'>
    $350
  </div>
  </div>
  </div>
   
</div>
             
    </div>
    <button onClick={handleclick}  className='viewwww'>View All</button>
    <div className="products">
      <h1>NEW ARRIVALS</h1>
<div className='productcard'>
<div className='innergrid'>
  <img  src={(image10)}></img>
  <h3> Sports Shirt For Men</h3>
  <div className='ratingstar'>
  <FontAwesomeIcon icon={faStar} size="lg" style={{color: "#FFD43B",}} />
  <FontAwesomeIcon icon={faStar} size="lg" style={{color: "#FFD43B",}} /> 
  <FontAwesomeIcon icon={faStar} size="lg" style={{color: "#FFD43B",}} /> 
  <FontAwesomeIcon icon={faStar} size="lg" style={{color: "#FFD43B",}} />
  <FontAwesomeIcon icon={faStar} size="lg" style={{color: "#FFD43B",}} />
 
 
  </div>
  <div className='price'>
    $232
  </div>
  </div>
  <div className='innergrid'>
  <img  src={(image11)}></img>
  <h3> Classic T-Shirt With Tape </h3>
  <div className='ratingstar'>
  <FontAwesomeIcon icon={faStar} size="lg" style={{color: "#FFD43B",}} />
  <FontAwesomeIcon icon={faStar} size="lg" style={{color: "#FFD43B",}} /> 
  <FontAwesomeIcon icon={faStar} size="lg" style={{color: "#FFD43B",}} /> 
  <FontAwesomeIcon icon={faStar} size="lg" style={{color: "#FFD43B",}} />
  <FontAwesomeIcon icon={faStar} size="lg" style={{color: "#FFD43B",}} />
 
 
  </div>
  <div className='price'>
    $210
  </div>
  </div>
  <div className='innergrid'>
    <div className='finalimage'>
  <img  src={(image12)}></img>
  <h3> Classic Orange Shirt</h3>
  <div className='ratingstar'>
  <FontAwesomeIcon icon={faStar} size="lg" style={{color: "#FFD43B",}} />
  <FontAwesomeIcon icon={faStar} size="lg" style={{color: "#FFD43B",}} /> 
  <FontAwesomeIcon icon={faStar} size="lg" style={{color: "#FFD43B",}} /> 
  <FontAwesomeIcon icon={faStar} size="lg" style={{color: "#FFD43B",}} />
  <FontAwesomeIcon icon={faStar} size="lg" style={{color: "#FFD43B",}} />
  </div>
 
  
  <div className='price'>
    $120 
  </div>
  </div>
  </div>
  
</div>
       </div>
    <button className='viewwww' onClick={handleclick}>View All</button>  
<div className='customers'>
  <div className='ourhappy'>
<h1>OUR HAPPY CUSTOMERS</h1></div>
<div className='customerinner'>
    <div className='firstcustomer'>
      
    <FontAwesomeIcon icon={faStar} size="lg" style={{color: "#FFD43B",}} />
  <FontAwesomeIcon icon={faStar} size="lg" style={{color: "#FFD43B",}} /> 
  <FontAwesomeIcon icon={faStar} size="lg" style={{color: "#FFD43B",}} /> 
  <FontAwesomeIcon icon={faStar} size="lg" style={{color: "#FFD43B",}} />
  <FontAwesomeIcon icon={faStar} size="lg" style={{color: "#FFD43B",}} />
 
 
        <p>Sarah M.</p>
            
        <p>
        "As someone who's always on the lookout<br></br> 
        for unique fashion pieces, I'm thrilled <br></br> 
        to have stumbled upon Shop.co.<br></br> 
         The selection of clothes is not only <br></br> 
         diverse but also on-point with the latest trends."

        </p>
        
   </div>
    <div className='firstcustomer'>

    <FontAwesomeIcon icon={faStar} size="lg" style={{color: "#FFD43B",}} />
  <FontAwesomeIcon icon={faStar} size="lg" style={{color: "#FFD43B",}} /> 
  <FontAwesomeIcon icon={faStar} size="lg" style={{color: "#FFD43B",}} /> 
  <FontAwesomeIcon icon={faStar} size="lg" style={{color: "#FFD43B",}} />
  <FontAwesomeIcon icon={faStar} size="lg" style={{color: "#FFD43B",}} />
 
 
        <p>Ahmed Mohammed</p>
            
        <p>

        "I'm blown away by the quality and style <br></br>
        of the clothes I received from Shop.co. <br></br>
        From casual wear to elegant dresses, <br></br>
        every piece I've bought has exceeded
         my expectations."

        </p>
    </div>
   
    
    <div className='firstcustomer1'>
      
    <FontAwesomeIcon icon={faStar} size="lg" style={{color: "#FFD43B",}} />
  <FontAwesomeIcon icon={faStar} size="lg" style={{color: "#FFD43B",}} /> 
  <FontAwesomeIcon icon={faStar} size="lg" style={{color: "#FFD43B",}} /> 
  <FontAwesomeIcon icon={faStar} size="lg" style={{color: "#FFD43B",}} />
  <FontAwesomeIcon icon={faStar} size="lg" style={{color: "#FFD43B",}} />
 
 
        <p>Mohammed Saad</p>
            
        <p>
        "Finding clothes that align with my personal style <br></br>
        used to be a challenge until I discovered Shop.co. <br></br>
        The range of options they offer is truly remarkable,<br></br>
         catering to a variety of tastes and occasions."<br></br>
         this shop is the best choice
       

        </p>
    </div>

</div>
</div>
<div className='stayup'>
    <div className='stayh1'>
<h1> STAY UP TO DATE ABOUT OUR LATEST OFFERS</h1>
</div>
<div className='inputt'>
    <input className='newsl' placeholder='Enter your email adress'></input>
    <button className='supsc'>Subscribe to Newsletter</button>
</div>
</div>
<div className='vooter'>

<div className='finalcontact'>
    <h1> SHOP.CO</h1>
    <p>  We have clothes that suit your<br></br>
         style and which you’re proud to wear. <br></br>
         From women to men.</p>
         <div className='socialmediaicons'>
            <FontAwesomeIcon  icon={faTwitter} size='1x' color='black' > 
              </FontAwesomeIcon>
            <FontAwesomeIcon  icon={faFacebook} size='1x' color='black' >
                   </FontAwesomeIcon>
            <FontAwesomeIcon  icon={faInstagram} size='1x' color='black' > 
              </FontAwesomeIcon>
            <FontAwesomeIcon  icon={faGithub} size='1x' color='black' > 
              </FontAwesomeIcon>
         </div>
</div>
<div className='company'>

    <h1> Company</h1>
    <p>About</p>
    <p>Features</p>
    <p>Works</p>
   <p>Careers</p>
    

</div>


<div className='help'>

    <h1> Help</h1>
    <p>Customer Support</p>
    <p>Delivery Details</p>
    <p>Terms&Conditions</p>
   <p>Privacy Policy</p>
    

</div>


<div className='company'>

    <h1> FAQ</h1>
    <p>Account</p>
    <p>Manage Deleviries</p>
    <p>Orders</p>
   <p>Payments</p>
    

</div>



<div className='company'>

    <h1> Resources</h1>
    <p>Free eBooks</p>
    <p>Developement Tutorial</p>
    <p>How to - Blog</p>
   <p>Youtube Playlist</p>
    

</div>
</div>

<div className='divider'></div>
<div className='foooter'>
    <p>Shop.co All Rights Reserved 2025</p>
    <div className='mastercard'>
    <FontAwesomeIcon  icon={faCcVisa} size='1x' color='black' > 
              </FontAwesomeIcon>
              <FontAwesomeIcon  icon={faCcMastercard} size='1x' color='black' > 
              </FontAwesomeIcon>
              <FontAwesomeIcon  icon={faCcPaypal} size='1x' color='black' > 
              </FontAwesomeIcon>
              <FontAwesomeIcon  icon={faCcApplePay} size='1x' color='black' > 
              </FontAwesomeIcon>
              <FontAwesomeIcon  icon={faGooglePay} size='1x' color='black' > 
              </FontAwesomeIcon>
    </div>
</div>
</div>
       </div>
    )
}
export default Homepage;