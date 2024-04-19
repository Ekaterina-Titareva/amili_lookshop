'use client'
import React, { useState } from 'react';
import styles from './allGoods.module.scss'
import {goods} from '../../public/assets/data/data.js'
import ItemOfGoogs from '../../Components/ItemOfGoods/ItemOfGoods.jsx';
import Link from "next/link";
import MinProductCard from '../../Components/MinProductCard/MinProductCard.jsx';

function AllGoods() {
    const [clickedItem, setClickedItem] = useState([]);
    const [selectedImage, setSelectedImage] = useState(null);
	const handleImageClick = (image) => {
        setSelectedImage(image);
	}
	const [isItemClicked, setIsItemClicked] = useState(false);
	const handleItemClick = (e) => {
		setIsItemClicked((prev) => !prev);
		console.log(e.target.alt);
        const itemName = e.target.alt;
        const filteredItem = goods.filter(item => item.name === itemName);
        setClickedItem(filteredItem);
	}
    return (
        <section id="allGoods" className={styles.container}>
            <h2 className={styles.title}>все товары</h2>
            <div className={styles.wrapper}>
                { isItemClicked ? 
                    <>
                        {clickedItem?.length &&
                            clickedItem.map((item) => ( 
                                    <ItemOfGoogs 
                                        key={item.id}
                                        id={item.id}
                                        category={item.category}
                                        name={item.name}
                                        image1={item.image1}
                                        image2={item.image2}
                                        image3={item.image3}
                                        description={item.description}
                                        text1={item.text1}
                                        text2={item.text2}
                                        color={item.color}
                                        size={item.size}
                                        price={item.price}
                                        material={item.material}
                                        selectedImage={selectedImage}
                                        handleImageClick={handleImageClick}
                                    />
                            ))
                        }
                    </>
                    :
                    goods.map((item) => (
                        <Link href={`${item.id}`} key={item.id}>
                            <MinProductCard
                                key={item.id} 
                                id={item.id} 
                                name={item.name} 
                                image1={item.image1} 
                                image2={item.image2} 
                                price={item.price} 
                                handleItemClick={handleItemClick}
                            />
                        </Link>
                        ))
                }
            </div>
        </section>
    );
}

export default AllGoods;

