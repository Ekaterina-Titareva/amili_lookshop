'use client'
import React, { useState} from 'react'
import Menu from '../Menu/Menu.jsx'
import Logo from '../Logo/Logo.jsx'
import styles from '../Header/header.module.scss'
import { navLinks } from '../../public/assets/data/navLinks.js'


function Header() {
	const [menuActive, setMenuActive] = useState(false)

    return (
    <header className={styles.wrapper}>
		<div className={styles.burger}>
			<nav>
				<div className={styles.button} onClick={() => setMenuActive(!menuActive)}>
					<span className={styles.span}></span>
				</div>
			<Menu 
				active={menuActive}
				setActive={setMenuActive}
				navLinks={navLinks}
			/>
			</nav>
		</div>
		<div className={styles.container}>
			<div className={styles.header}>
				<Logo/>
			</div>
		</div>
	</header>
    );
}

export default Header;


