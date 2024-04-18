import React, { useState } from 'react';
import styles from './itemsOfCategory.module.scss'

function ItemsOfCategory({id, name, image1, image2, price, handleItemClick}) {


    const handleMouseOver = (e) => {
        e.target.src = image2;
};
    const handleMouseOut = (e) => {
        e.target.src = image1;
};
    return (
        <>
            <div key={id} className={styles.card} onClick={handleItemClick}>
            <div className={styles.imageWrapper} >
                <img className={styles.image} src={image1} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} alt={name}/>
            </div>
            <p className={styles.name} id={id}>{name}</p>
            <p className={styles.price}>{price} ₽</p>
            </div>
        </>
    );
}

export default ItemsOfCategory;