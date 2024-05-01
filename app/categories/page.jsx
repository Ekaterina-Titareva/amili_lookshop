'use client'
import styles from "./Categories.module.scss";
import Link from 'next/link';
import AllGoodsLink from '@/Components/AllGoodsLink/AllGoodsLink';
import { categories } from '@/public/assets/data/data';

export default function Categories(props) {
    const handleMouseOver = (e) => {
      e.target.src = `${e.target.src.slice(0, -5) + 2 + e.target.src.slice(-4)}`;
    }
    const handleMouseOut = (e) => {
      e.target.src = `${e.target.src.slice(0, -5) + 1 + e.target.src.slice(-4)}`;
    };
return (
  <>
  <section id="categories" className={styles.container}>
  <h2 className={styles.goodsTitle}>Наши товары</h2>
    <article className={styles.categories}>
      {categories?.length &&
      categories.map((category) => ( 
          <Link href={`/categories/${category.id}`} key={category.id} title={category.id}>
            <div className={styles.card}> 
                <div className={styles.imageWrapper}>
                    <img className={styles.image}
                    src={category.image1} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}
                    alt={category.name}
                    />
                    </div>
                    <div className={styles.nameWrapper}>
                        <p className={styles.name}>{category.name}</p>
                    </div>
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

