import Navigation from "../Navigation/Navigation"
import styles from '../Footer/footer.module.css'
import Logo from '../Logo/Logo.jsx'
import { navLinks } from '../../public/assets/data/navLinks'

function Footer() {
    return (
    <footer className={styles.footer} id="contacts" >
        < Logo />
        <nav>
        < Navigation 
                navLinks={navLinks}
            />
        </nav>
        <div className={styles.info}>
                <ul className={styles.contacts}>
            <li className={styles.whatsapp}><a href="https://wa.me/+79510686916" target="_blank">whatsapp</a></li>
            <li className={styles.phone}><a href="tel:+79510686916">+7 951 068 69 16</a></li>
        </ul>
        <ul className={styles.contacts}>
            <li className={styles.telegram}><a href="https://t.me/amili_lookshop" target="_blank">telegram</a></li>
            <li className={styles.instagram}><a target="_blank">instagram*</a> <span className={styles.instagramBan}>*запрещен в РФ</span></li>
        </ul>
        </div>
    </footer >
    );
}

export default Footer;