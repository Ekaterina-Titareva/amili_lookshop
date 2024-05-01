'use client'
import React, { useState, useEffect } from 'react';
import styles from './Category.module.scss'
import Link from 'next/link';
import AllGoodsLink from '@/Components/AllGoodsLink/AllGoodsLink';
import { goods as data}  from '@/public/assets/data/data';

export default function Category (props) {
    // const [data, setData] = useState(null);
    const [clickedCategory, setClickedCategory] = useState([]);
    // useEffect(() => {
    //     const fetchData = async () => {
    //         const res = await fetch('http://localhost:5000/goods');
    //         const responseData = await res.json();
    //         setData(responseData);
    //     };
    //     fetchData();
    // }, []);
    useEffect(() => {
        const handleCategory = () => {
            if (data) {
                const filteredItems = data.filter(item => item.categoryEng === props.params.categoryId);
                setClickedCategory(filteredItems);
            }
        };
        handleCategory();
    }, [data, props.params.categoryId]);

    return (
        <>
        <section className={styles.container}>
            <h2 className={styles.goodsTitle}>Наши товары</h2>
            <article className={styles.categories}>
                {clickedCategory?.length &&
                    clickedCategory.map((item) => (
                    <Link href={`/categories/${props.params.categoryId}/${item.id}`} key={item.id}>
                        <div key={item.id} className={styles.card}>
                            <div className={styles.imageWrapper} >
                                <img className={styles.image} src={item.image1} alt={item.name}/>
                            </div>
                            <p className={styles.name} id={item.id}>{item.name}</p>
                            <p className={styles.price}>{item.price} ₽</p>
                        </div>
                    </Link>
                    ))
                }
            </article>
            <AllGoodsLink />
        </section>  
        </>
    );
}