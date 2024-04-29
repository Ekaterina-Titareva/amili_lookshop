'use client'
import { useEffect, useState } from 'react';
import styles from './Item.module.scss'

export default function Item (props) {
    const [data, setData] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch('http://localhost:5000/goods');
            const responseData = await res.json();
            setData(responseData);

        };
        fetchData();
    }, []);
            console.log(props.params.id)    
    return (
        <>
        <section id="category" className={styles.container}>
            <h2 className={styles.goodsTitle}>Наши товары</h2>
            {data?.length &&
                data.map((item) => (
                    <div key={item.id} className={styles.card}>
                
                    {/* <img className={selectedImage === image1 ? `${styles.image} ${styles.selected}` : styles.image} src={image1} alt={name} onClick={() => handleImageClick(image1)} />
                    <img className={selectedImage === image2 ? `${styles.image} ${styles.selected}` : styles.image} src={image2} alt={name} onClick={() => handleImageClick(image2)} />
                    <img className={selectedImage === image3 ? `${styles.image} ${styles.selected}` : styles.image} src={image3} alt={name} onClick={() => handleImageClick(image3)} /> */}
                    <div className={styles.images}>
                        <div  className={styles.imagesWrapper}>
                            <div className={styles.imageWrapper}>
                                <img className={styles.image} src={item.image2} alt={item.name}/>
                            </div>
                            <div className={styles.imageWrapper}>
                                <img className={styles.image} src={item.image3} alt={item.name}/>
                            </div>
                        </div>
                        <div className={styles.imageMainWrapper}>
                            <img className={styles.imageMain} src={item.image1} alt={item.name}/>
                        </div>
                    </div>
                    <div className={styles.infoWrapper}>
                        <p className={styles.name} id={item.id}>{name}</p>
                        <p className={styles.price}>Цена: {item.price} рублей</p>
                        <p className={styles.size}>Размер: <span className={styles.sizeBox}>{item.size}</span></p>
                        <p className={styles.color}>Цвет: {item.color}</p>
                        <p className={styles.material}>Материал: {item.material}</p>
                        <a className={styles.link} href={`https://wa.me/+79510686916/`} target="_blank">КУПИТЬ</a>
                        <p className={styles.description}>{item.description}</p>
                        <p className={styles.text1}>{item.text1}</p>
                        <p className={styles.text2}>{item.text2}</p>
                    </div>
                </div>
                ))
            }
            <a className={styles.allGoodsLink} href="/allGoods">Посмотреть все товары</a>
        </section>  
        </>
    );
}
