import styles from './privacyPolicy.module.scss'

function  PrivacyPolicy() {

    return (
        <section id="privacyPolicy" className={styles.container}>
        <h2 className={styles.title}>политика конфиденциальности</h2>
        <div className={styles.textWrapper}>
            <p className={styles.text}>Мы, Amili_lookshop, ценим Вашу конфиденциальность и стремимся обеспечить безопасность Ваших данных. Данный сайт является сайтом-визиткой и не собирает персональные данные посетителей, за исключением информации, которую Вы добровольно предоставляете в сообщениях в социальных сетях, по электронной почте или других мессенджерах.</p>
            <p className={styles.text}>Наш сайт может содержать ссылки на сторонние ресурсы, за политику конфиденциальности которых мы не несем ответственности. Мы рекомендуем Вам ознакомиться с политикой конфиденциальности каждого сайта, который Вы посещаете.</p>
        </div>
        </section>
    );
}

export default PrivacyPolicy;