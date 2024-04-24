'use client'
import { useEffect, useState } from 'react';
import styles from './Category.module.scss'

export default function Category () {
    // const [data, setData] = useState(null);
    // useEffect(() => {
    //     const fetchData = async () => {
    //         const res = await fetch('http://localhost:5000/goods');
    //         const data = await res.json();
    //         setData(data);
    //     };
    //     fetchData();
    // }, []);
    return (
        <>
        <section id="category" className={styles.container}>
            <h2 className={styles.goodsTitle}>Наши товары</h2>
            {/* { data.length &&
                data.map((item) => {
                <div key={item.id} className={styles.card}>
                    <div className={styles.imageWrapper} >
                        <img className={styles.image} src={item.image1} alt={item.name}/>
                    </div>
                    <p className={styles.name} id={item.id}>{item.name}</p>
                    <p className={styles.price}>{item.price} ₽</p>
                </div>
                })
            } */}
            <a className={styles.allGoodsLink}href="/allGoods">Посмотреть все товары</a>
        </section>  
        </>
    );
}



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