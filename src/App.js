import React from 'react';
import ReactDOM from 'react-dom';
import {Product}from './Product';
import{Header} from './Components/Header/Header';
import { useQuery, gql ,useLazyQuery, useApolloClient} from "@apollo/client";
import {ProductDetails}from './Components/ProductDetails/ProductDetails';
import {Route, Router,Routes as Routing } from 'react-router-dom';




const FILMS_QUERY = gql`
{   
  categories
  {
    products
    {
      id
      name
      brand
      inStock
      description
      gallery
      category
      prices
      {
        amount
        currency
        {
          label
          symbol
        }
      }
      attributes
      {
        id
        items
        {
          id
          value
          displayValue
        }
      }
    }
  }
}
`;

export default function App() {
  const { data, loading, error } =useQuery(FILMS_QUERY);

  if (loading) return "Loading...";
  if (error) return <pre>{error.message}</pre>
  console.log(data.categories[1].products);
  return (
    <div>
      <Header/>
    <section class="category">
         <div class="container">
             <div class="category-content-text">
               <h2>Category name</h2>
             </div>
             <div class="row">
             {data.categories[0].products.map(item=> ( 
          // <li key={item.products.id}>
             <Product item={item}/>
           //</li>
           ))}
      </div>
      </div>
    </section>  
    <Router>
    <Route exact path='/productDetails/:id' element={<ProductDetails/>}/>
   </Router>  
    </div>
  );
}