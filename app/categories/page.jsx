'use client'
import React, { useState} from 'react'
import styles from "./page.module.css";
import Categories from '../Components/Categories/Categories.jsx';
import Link from 'next/link';

export const getStaticProps = async() => {
  const res = await fetch('http://localhost:5000/categories');
  const data = res.json()
  console.log(data);
  return {
      props: { categories: data}
  } 
}

export default function CategoriesPage(props) {

  const [clickedCategory, setClickedCategory] = useState([]);

  const [isClicked, setIsClicked] = useState([]);

  const handleCategoryClick = (e) => {
    setIsClicked(e.target.title);
    const category = e.target.alt;
    const filteredItems = goods.filter(item => item.category === category);
    setClickedCategory(filteredItems);
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
    <article className={styles.categories}>
      {
      props.categories?.length &&
      props.categories.map((category) => ( 
          <Link href={`/categories/${category.id}` } key={category.id}>
            < Categories
              id={category.id} 
              name={category.name}
              image1={category.image1}
              image2={category.image2}
              handleCategoryClick={handleCategoryClick}
              clickedCategory={clickedCategory}
              />
            </Link>
        ))
      }
    </article>
  <a className={styles.allGoodsLink}href="/allGoods">Посмотреть все товары</a>
</section>
</>
);
}
