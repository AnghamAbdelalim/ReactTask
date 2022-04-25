import React from 'react';
import './Header.css';


export const Header = () => {
  return (
    <>
    <header class="main-header">
    <div class="container">
        <div class="row">
            <div class="col-lg-6 col-md-6 col-sm-6">
                <nav class="navbar navbar-expand-lg">
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                        <span class="navbar-toggler-icon"><i class="fa fa-bars"></i></span>
                   </button> 
                    <div class="collapse navbar-collapse main-menu-item" id="collapsibleNavbar">
                            <ul class="navbar-nav">
                                <li class="nav-item">
                                  <a class="nav-link active" href="#" id="active">Women</a>
                                </li>
                                <li class="nav-item">
                                  <a class="nav-link" href="#">Men</a>
                                </li>
                                <li class="nav-item">
                                  <a class="nav-link" href="#">Kids</a>
                                </li>
                              </ul>
                    </div>
                </nav> 
            </div> 
            <div class="col-lg-4 col-md-4 col-sm-3"> 
                    <div class="rotate">
                        <a href="#"><img src="./images/svg 19.png" class="img-fluid" id="arrow1"/><img src="./images/svg 21.png" class="img-fluid" id="arrow2"/></a>
                    </div>    
            </div> 
            <div class="col-lg-2 col-md-4 col-sm-3"> 
                    <div class="Shopping-Icon">        
                        <ul class="Shopping-Icon-list"> 
                            <li>
                                <div class="dropdown">
                                <button type="button" class="dropdown-toggle" data-toggle="dropdown">
                                  $
                                </button>
                                <div class="dropdown-menu">
                                  <a class="dropdown-item" href="#">$1</a>
                                  <a class="dropdown-item" href="#">$2</a>
                                  <a class="dropdown-item" href="#">$3</a>
                                </div>
                              </div>
                            </li>
                            <li><a href="#" class="cart-Icone"><i class="fa fa-shopping-cart"></i></a></li>
                        </ul>
                    </div>  
            </div>
        </div>
    </div>
</header>
     
    </>
  );
}