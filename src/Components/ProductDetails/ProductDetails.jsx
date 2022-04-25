import React from 'react';
import './ProductDetails.css'


export const ProductDetails = (e) => {
   // const Id=e.match.param.id;
    //deconsole.log(Id);
    
  return (
    <>
<section class="product-details">
        <div class="container">
            <div class="row">
                <div class="col-lg-2 col-md-3 col-sm-4 col-6">
                    <div class="product-details-content">
                        <div class="product-details-content-img1">
                            <img src="images/Image.png" class="img-fluid"/>
                            <img src="images/Image.png" class="img-fluid"/>
                            <img src="images/Image.png" class="img-fluid"/>
                         </div> 
                     </div>
                </div>
                <div class="col-lg-6 col-md-9 col-sm-12 col-12">
                   <div class="product-details-content">
                       <div class="product-details-content-img2">
                           <img src="images/Image.png" class="img-fluid"/>
                        </div> 
                    </div>
                </div>
                <div class="col-lg-4 col-md-10 col-sm-12 col-12">
                    <div class="product-details-content">
                       <ul class="product-details-content-list">
                           <li> 
                              <div class="product-details-content-text1">
                                  <h2>Apollo</h2>
                                  <p>Running Short</p>
                               </div>
                            </li>
                            <li>
                                <h1>Size:</h1>
                               <div class="product-details-content-size"> 
                            
                                <div><a href="#">XS</a></div>   
                                <div class="active"><a href="#">S</a></div>   
                                <div><a href="#">M</a></div>   
                                <div><a href="#">L</a></div>   
                               
                                  /*<ul class="size-List">
                                    <li class="size-List-item">
                                        <a href="#">XS</a>
                                    </li>
                                    <li class="size-List-item">
                                        <a href="#" class="active">S</a>
                                    </li>
                                    <li class="size-List-item">
                                        <a href="#">M</a>
                                    </li>
                                    <li class="size-List-item">
                                        <a href="#">L</a>
                                    </li>
                                  </ul>*/
                                 </div> 
                            </li>  
                            <li>      
                                <div class="product-details-content-price">    
                                 <h3>Price:</h3>
                                 <span>$50.00</span> 
                                </div>   
                            </li> 
                            <li>
                               <div class="product-details-content-text3">
                               <a href="#" class="btn btn-light"> Add to cart</a>
                               <p>Find stunning women's cocktail dresses and party dresses.
                                    Stand out in lace and metallic cocktail dresses
                                     and party dresses from all your favorite brands.
                                </p>
                               </div>
                            </li>
                        </ul>    
                     </div>
                </div>
            </div>
         </div>                 
    </section>
   </>
   );
   }