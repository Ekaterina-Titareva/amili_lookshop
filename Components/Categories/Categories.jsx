'use client'
import React, { useState } from 'react';
import styles from './categories.module.scss'

function Categories(props) {
    const {name, image1, image2} = props
    const handleMouseOver = (e) => {
        e.target.src = image2;
};
    const handleMouseOut = (e) => {
        e.target.src = image1;
};

    return (
        <>
            <div className={styles.card} > 
                <div className={styles.imageWrapper}>
                    <img className={styles.image}
                    src={image1} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}
                    alt={name}
                    />
                    </div>
                    <div className={styles.nameWrapper}>
                        <p className={styles.name}>{name}</p>
                    </div>
            </div>
        </>
        )
    }

export default Categories;

