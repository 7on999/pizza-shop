import React from 'react';
import PropTypes from 'prop-types';


const Categories = React.memo(({kinds, chooseKindCategory, categoryIndex})=>{

    return ( 
    <div className="categories">
        <ul>
        <li className={categoryIndex===null? "active":''} 
        onClick={()=>{chooseKindCategory(null)}}>Все </li>
        {kinds.map((name, index)=>{
            return (<li className={index===categoryIndex? "active":''} 
            onClick={()=>{chooseKindCategory(index) }
                    }
            key={`${name}_${index}`}>{name}</li>)
        })}
        </ul>
    </div>
    )
}
)

Categories.propTypes = {
    kinds:PropTypes.arrayOf(PropTypes.string).isRequired,
    chooseKindCategory: PropTypes.func,
}

Categories.defaultProps={
    categoryIndex:null,
    kinds:[],
}
export default Categories;