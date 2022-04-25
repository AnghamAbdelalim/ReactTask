import React from 'react';
import './Cart.css';


export const Cart= () => {
  return (
    <>
    <section class="cart">
        <div class="container">
            <div class="cart-content-text">
                <h1>Cart</h1>
             </div>
            <div class="row">
                <div class="col-lg-12 col-md-12">
                    <div class="cart-details">
                        <div class="row">
                            <div class="col-lg-9 col-md-7 col-sm-6">
                                <div class="cart-details-text">
                                <h2>Apollo</h2>
                                <p>Running Short</p>
                                <span>$50.00</span>
                                <ul class="cart-details-size-List">
                                <li> <div><a href="#">S</a></div></li>  
                                <li><div class="active"><a href="#">M</a></div></li>  
                                </ul>  
                               </div> 
                            </div>  
                            
                            <div class="col-lg-3 col-md-5 col-sm-6">
                                <div class="cart-details-text2">
                                  <ul class="cart-details-decreaseItem">
                                  <li> <div class="update-value"><a href="#">+</a></div></li>  
                                  <li> <div class="value"><a href="#">1</a></div></li>  
                                  <li><div class="update-value"><a href="#">-</a></div></li>  
                                  </ul>  
                                  <div class="cart-details-text2-img">
                                    <img src="images/Product D.png" class="img-fluid"/></div>
                                </div>
                            </div>
                         </div>
                    </div>
                </div>
            </div>
           </div>                
     </section>
       </>
      );
    }