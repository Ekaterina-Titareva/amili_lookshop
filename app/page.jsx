'use client'
import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import styles from "./page.module.css";


export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        router.push('/categories');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <article className={styles.wrapper}>
        <h1 className={styles.title}>Amili look shop</h1>
      </article>
    </>
  );
}