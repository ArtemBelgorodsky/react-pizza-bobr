import {React, useEffect, useState} from "react";
import { Route, Routes } from "react-router-dom";
import {Header, Home, Cart} from './components/index';
import axios from "axios";

function App() {
	const [pizzaList, setPizzaList] = useState([])


	useEffect(() => {
		axios.get('http://localhost:3000/db.json').then(({data}) => {
			setPizzaList(data.pizzas);
		})
	}, [])
	

  return ( 
    <div className="wrapper">
			<Header />
      <div className="content">
				<Routes>
        <Route path="*" element ={<Home items ={pizzaList} />} exact />
				<Route path="/cart" element={<Cart />} exact />
				</Routes>
      </div>
    </div>
  );
}

export default App;
