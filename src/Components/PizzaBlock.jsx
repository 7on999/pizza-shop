import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import Button from './Button';

const PizzaBlock = ({ addedCount, onClickAddPizza, name, id, imageUrl, price, types, sizes})=>{

    const availableTypes=['тонкое', 'традиционное'];
    const availableSizes=[26, 30, 40];

    const [activeTypeIndex, setActiveTypeIndex]=React.useState(types[0]);
    const [activeSizeIndex, setActiveSizeIndex]=React.useState(0);

    const text = <span style={{ fontSize:'12px'}}> В данный момент выбранной пиццы нет в наличии </span>

    const toggleActiveItem=(index)=>{
        setActiveTypeIndex(index)
    }

    const toggleActiveSize=(index)=>{
        setActiveSizeIndex(index)
    }

    const onAddPizza=()=>{
      const obj={
        name, 
        imageUrl, 
        price: price[activeSizeIndex],
        id,
        type: availableTypes[activeTypeIndex],
        size: availableSizes[activeSizeIndex],
      }
      onClickAddPizza(obj)
     }


    return (
        <div className="pizza-block">
        <img
          className="pizza-block__image"
          src={imageUrl}
          alt="Pizza"
        />
        <h4 className="pizza-block__title">{name}</h4>
        <div className="pizza-block__selector">
          <ul>
            {availableTypes.map((type, index)=>{
                return (
                    <li className={classNames({
                        'active': index===activeTypeIndex,
                        'disabled': !types.includes(index),
                    })}
                    onClick={()=>{toggleActiveItem(index)}}
                    key={`${type}_${index}`}>{type}</li>
                )
            })}
          </ul>
          <ul>
         { availableSizes.map((size, index)=>{
             return (<li key={`${size}_${index}`}
             onClick={()=>toggleActiveSize(index)}
             className={classNames({
                 'active': index===activeSizeIndex,
                 'disabled': !sizes.includes(size)
             })}>
                 {`${size} см`}
                 </li>)
         })}
          </ul>
        </div>
        <div className="pizza-block__bottom">
          <div className="pizza-block__price"> {(+id===5||+id===9)&&activeSizeIndex===0? text : 
          `от ${price[activeSizeIndex]} ₽`}</div>
          <Button onClick={ onAddPizza } id={id} activeSizeIndex={activeSizeIndex} className='button--add'  outline >
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                fill="white"
              />
            </svg>
            <span>Добавить</span>
            <i>{addedCount}</i>
          </Button>
        </div>
        </div> 
    )
}



PizzaBlock.propTypes = {
    name: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    price: PropTypes.arrayOf(PropTypes.number).isRequired,
    types:PropTypes.arrayOf(PropTypes.number).isRequired,
    onClickAddPizza:PropTypes.func
}

PizzaBlock.defaultProps={
    types:[],
    sizes:[],
    name: '---'
}


export default PizzaBlock;