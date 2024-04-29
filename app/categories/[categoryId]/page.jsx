'use client'
import { useEffect, useState } from 'react';
import styles from './Category.module.scss'
import Link from 'next/link';

export default function Category (props) {

    const [data, setData] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch('http://localhost:5000/goods');
            const responseData = await res.json();
            setData(responseData);
        };
        fetchData();
    }, []);
    console.log(props)
    return (
        <>
        <section id="item" className={styles.container}>
            <h2 className={styles.goodsTitle}>Наши товары</h2>
            <article className={styles.categories}>
                {data?.length &&
                    data.map((item) => (
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
            <a className={styles.allGoodsLink}href="/allGoods">Посмотреть все товары</a>
        </section>  
        </>
    );
}
