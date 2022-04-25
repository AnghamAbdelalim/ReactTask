import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

/*import "https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css";
import "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css";
import 'https://fonts.googleapis.com/css?family=Raleway';
import 'https://fonts.googleapis.com/css?family=Roboto Condensed';
import 'https://fonts.googleapis.com/css?family=Roboto';
import 'https://fonts.googleapis.com/css?family=Source Sans Pro';*/
/*import"https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js";
import"https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js";
import"https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js";*/
import { QueryClient, QueryClientProvider } from "react-query";
import './index.css';
import App from './App';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';


/*const queryClient = new QueryClient();

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);*/
const client = new ApolloClient({
  uri: "http://localhost:4000/",
  cache: new InMemoryCache()
});

const rootElement = document.getElementById("root");
ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  rootElement
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
