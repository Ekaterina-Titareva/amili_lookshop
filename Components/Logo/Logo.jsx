import styles from '../Logo/logo.module.css'
import logoImg from '../../public/assets/icons/flower.svg'
import Image from 'next/image';

function Logo() {
    return (
    <a className={styles.logo} href="/">
        <Image width={60} height={60} src={logoImg} alt="logo" className={styles.logoImg} />
        <div className={styles.logoInfo}>
            <p className={styles.logoTitle}>Amili look shop</p>
            <p className={styles.logoTitleText}>одежда для женщин</p>
        </div>
    </a>
    )
}
export default Logo;