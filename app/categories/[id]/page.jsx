'use client'
import React, { useState } from 'react';
import styles from './Category.module.scss'
import {categories, goods} from '../../../public/assets/data/data.js'

export default function Category () {

//     const [gotCategoryName, setCategoryName] = useState([]);
//     const [clickedCategory, setClickedCategory] = useState([]);

//     const handleCategoryName = () => {
//         const filteredCategoryName = categories.filter(item => item.id == props.params.id)
//         setCategoryName(filteredCategoryName)
//     }

//     const handleCategoryClick = () => {
//         const filteredCategory = goods.filter(item => item.category == gotCategoryName[0].name)
//         setClickedCategory(filteredCategory)
// }

//     handleCategoryName()
//     handleCategoryClick()



    return (
        <>
        { props.clickedCategory?.length &&
            props.clickedCategory.map((item) => {
            <div key={item.id} className={styles.card}>aaa
            {/* <div className={styles.imageWrapper} >
                <img className={styles.image} src={item.image1} alt={item.name}/>
            </div>
            <p className={styles.name} id={item.id}>{item.name}</p>
            <p className={styles.price}>{item.price} ₽</p> */}
            </div>

            })

        }
            
        </>
    );
}