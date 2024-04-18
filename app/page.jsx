'use client'
import React, { useState} from 'react'
import styles from "./page.module.css";
import Categories from '../Components/Categories/Categories.jsx';
import ItemsOfCategory from '../Components/ItemsOfCategory/ItemsOfCategory.jsx';
import ItemOfGoogs from '../Components/ItemOfGoods/ItemOfGoods.jsx';
import {categories, goods} from '../public/assets/data/data.js'

export default function Home() {
  const [clickedCategory, setClickedCategory] = useState([]);
  const [clickedItem, setClickedItem] = useState([]);
  const [isClicked, setIsClicked] = useState(false);
  const [isItemClicked, setIsItemClicked] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const handleCategoryClick = (e) => {
    setIsClicked((prev) => !prev);
    const category = e.target.alt;
    const filteredItems = goods.filter(item => item.category === category);
    setClickedCategory(filteredItems);
  }
  const handleItemClick = (e) => {
    setIsItemClicked((prev) => !prev);
    const itemName = e.target.alt;
    const filteredItem = goods.filter(item => item.name === itemName);
    setClickedItem(filteredItem);
  }
  const handleImageClick = (image) => {
    setSelectedImage(image);
  }
return (
  <>
<article className={styles.wrapper}>
  <h1 className={styles.title}>
    Amili look shop
  </h1>
</article>
  <section id="goods" className={styles.container}>
  <h2 className={styles.goodsTitle}>Наши товары</h2>
  { isClicked ?
    <> 
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
        <article className={styles.goods}>
          {
            clickedCategory?.length &&
              clickedCategory.map((item) => ( 
                <ItemsOfCategory
                key={item.id}
                id={item.id}
                name={item.name}
                image1={item.image1}
                image2={item.image2}
                price={item.price}
                handleItemClick={handleItemClick}
                />
            ))
          }
        </article> 
      }
    </>
  :
    <article className={styles.categories}>
      {
      categories?.length &&
        categories.map((category) => ( 
          < Categories
            key={category.id}
            id={category.id} 
            name={category.name}
            image1={category.image1}
            image2={category.image2}
            handleCategoryClick={handleCategoryClick}
            />
        ))
      }
    </article>
  }
  <a className={styles.allGoodsLink}href="/allGoods">Посмотреть все товары</a>
</section>
</>
);
}
