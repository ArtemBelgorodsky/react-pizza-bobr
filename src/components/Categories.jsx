import React, {useState} from 'react'
import { useSelector } from "react-redux";

export default function Categories({items, onClickItem}) {

	
	const category = useSelector((state) => state.pizzas.catIndex);
	
	const [activeItem, setActiveItem] = useState(category);
	const onSelectItem = (index) => {
		setActiveItem(index);
		onClickItem(index);
	}

	return (
		<div>
			<div className="categories">
		<ul>
		{items && 
		items.map((name, index) => (
			<li
			className={activeItem === index ? 'active' : ''}
			onClick={() => onSelectItem(index)}
			key={name}>{name}
			</li>
				))}
		</ul>
	</div>
	</div>
	);
}
