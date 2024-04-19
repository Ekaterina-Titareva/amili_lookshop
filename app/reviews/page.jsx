import React from 'react'
import styles from '../Reviews/reviews.module.scss'
import Avatar from '@mui/material/Avatar';

function Reviews() {
	return (
        <section className={styles.container} id="reviews">
        <h2 className={styles.title}>наши отзывы</h2>
        <div className={styles.list}>
                <div className={styles.listItem}>
                        <Avatar
                        alt="Remy Sharp"
                        src="/static/images/avatar/1.jpg"
                        sx={{ width: 100, height: 100 }}
                        />
                        <p>Отзыв отзыв отзыв отзыв отзыв</p>
                </div>
                <div className={styles.listItem}>
                        <Avatar
                        alt="Remy Sharp"
                        src="/static/images/avatar/1.jpg"
                        sx={{ width: 100, height: 100 }}
                        />
                        <p>Отзыв отзыв отзыв отзыв отзыв</p>
                </div>
                <div className={styles.listItem}>
                        <Avatar
                        alt="Remy Sharp"
                        src="/static/images/avatar/1.jpg"
                        sx={{ width: 100, height: 100 }}
                        />
                        <p>Отзыв отзыв отзыв отзыв отзыв</p>
                </div>
        </div>
        </section>
	);
}

export default Reviews;