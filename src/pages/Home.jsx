import React, {useCallback} from 'react'
import {Categories, Popup, PizzaBlock, PizzaLoadingBlock} from '../components';
import { useDispatch, useSelector} from "react-redux";
import axios from 'axios';
import { LoadPizzas } from '../redux/SetPizzasSlice';
import { useEffect } from 'react';
import { SetCategory } from '../redux/pizzaSlice';

export default function Home() {
	const dispatch = useDispatch();

  const items = useSelector((state) => state.LoadPizzas.items);
	const isLoaded = useSelector((state) => state.LoadPizzas.isLoaded);
	const category = useSelector((state) => state.pizzas.catIndex);
	const sort = useSelector((state) => state.pizzas.sortIndex)
	

	const onSelectCategory = (index) => {
		dispatch(SetCategory(index));
	};

	useEffect(() => {
		axios.get("http://localhost:3001/pizzas").then(({ data }) => {
			dispatch(LoadPizzas(SortPizzas(data, sort)));
		});
  }, [sort]);
	
	const SortPizzas = (arrayPizzas, sortBy) => {
		if (sortBy == 0){
		let newPizzas = arrayPizzas.sort((a,b) => a.rating - b.rating)
		return newPizzas
	}
		else if (sortBy == 1) {
			let newPizzas = arrayPizzas.sort((a,b) => {
				let nameA = a.name.toLowerCase();
				let nameB = b.name.toLowerCase();
				if (nameA < nameB) {
					return -1
				}else if(nameA > nameB){
					return 1
				}else{return 0}
			})
			return newPizzas
		}
		else if (sortBy == 2) {
			let newPizzas = arrayPizzas.sort((a,b) => a.price - b.price)
			return newPizzas
		}
	}


	return (
		<div className="container">
          <div className="content__top">
            <Categories 
						onClickItem={onSelectCategory}
						items={[
							'Все',
							'Мясные',
							'Вегетерианская',
							'Гриль',
							'Острые',
							'Закрытые'
						]} />
            <Popup items={[
							"популярности",
							"алфавиту",
							"цене"
						]} />
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">

						{isLoaded ? (
							items.map(obj => {
								if(category == 0)
								return <PizzaBlock {...obj} key={obj.id} obj={obj}/>
								else if (category == obj.category)
								return <PizzaBlock {...obj} key={obj.id}/>
							})
		 			
						
							) : (Array(10).fill(<PizzaLoadingBlock />))
						}

						
					</div> 
      </div>
	)
}
