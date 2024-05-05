import Navigation from "../Navigation/Navigation"
import styles from '../Footer/footer.module.scss'
import Logo from '../Logo/Logo.jsx'
import { navLinks } from '../../public/assets/data/data.js'

function Footer() {
    return (
    <footer className={styles.footer} id="contacts" >
        < Logo />
        <nav>
        < Navigation 
                navLinks={navLinks}
            />
        </nav>
        <ul className={styles.info}>
            <li className={styles.whatsapp}><a href="https://wa.me/+79510686916" target="_blank">whatsapp</a></li>
            <li className={styles.phone}><a href="tel:+79510686916">+7 951 068 69 16</a></li>
            <li className={styles.telegram}><a href="https://t.me/amili_lookshop" target="_blank">telegram</a></li>
            <li className={styles.instagram}><a target="_blank">instagram - запрещен в РФ</a></li>
        </ul>
    </footer >
    );
}

export default Footer;