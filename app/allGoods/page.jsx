'use client'
import styles from './allGoods.module.scss'
import Link from "next/link";
import { goods as data}  from '@/public/assets/data/data';

function AllGoods(props) {
    return (
        <section className={styles.container}>
            <h2 className={styles.title}>все товары</h2>
            <div className={styles.wrapper}>
                { data?.length &&
                    data.map((item) => (
                        <Link href={`/allGoods/${item.id}`} key={item.id}>
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
            </div>
        </section>
    );
}

export default AllGoods;

