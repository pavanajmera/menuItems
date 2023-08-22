import React from "react";

const Categories = ({categories}) => {
    // console.log(categories)
    return( 
        <div className="btn-container">
            {categories.map((category, index) => {
                return(
                    <button key={index} type="button" className="btn">{category}</button>
                )
            })}
        </div>
    );
};

export default Categories;
