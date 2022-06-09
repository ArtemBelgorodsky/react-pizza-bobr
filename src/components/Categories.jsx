import React, {useState} from 'react'

/*class Categories extends React.Component {
	state = {
		activeItem: 3,
	};

	onSelectItem = (index) => {
		this.setState({
			activeItem: index,
		});
	}

	render() {
	const {items} = this.props;
	return(
			<div className="categories">
		<ul>
			<li className="active">Все</li>
			{
				items.map((name, index) => (
				<li className={this.state.activeItem === index ? 'active' : ''} onClick={() => this.onSelectItem(index)} key={name}>{name}</li>
				))}
		</ul>
	</div>
	);
}}*/

//export default Categories;




export default function Categories({items, onClick}) {
	const [activeItem, setActiveItem] = useState(0);

	const onSelectItem = (index) => {
		setActiveItem(index);
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
