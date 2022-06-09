import React from 'react'
import {Categories, Popup, PizzaBlock} from '../components'

export default function Home({items}) {
	console.log(items)
	return (
		<div className="container">
          <div className="content__top">
            <Categories onClick={(name) => console.log(name)} items={[
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

						{
							items.map(obj => 
								<PizzaBlock {...obj} key={obj.id}/>
							)
						}

						
					</div> 
      </div>
	)
}
