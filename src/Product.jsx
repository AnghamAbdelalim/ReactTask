import React from 'react';
import './Product.css';
import { Link } from "react-router-dom";
export const Product = (props) =>
 {
    console.log(props.item);
    return (   
            
                         <div class="col-lg-4 col-md-6 col-sm-9 col-9">
                              <div class="category-content">
                                  <div class="category-content-img">   
                                      <img src={props.item.gallery[0]} class="img-fluid"/>
                                      <Link to={`/productDetails/${props.item.id}`} class="product-Details">Out of stock</Link>
                                      <a href="#" class="Shopping-Cart-Icon">
                                          <i class="fa fa-shopping-cart"></i>
                                      </a>                                    
                                   </div>
                                  <div class="category-content-text">
                                      <p>{props.item.name}</p>
                                     <span>${props.item.prices[0].amount}</span>
                                  </div>
                                </div>
                            </div>              
       );
  }
  