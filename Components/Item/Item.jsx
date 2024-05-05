import styles from "./item.module.scss"
import Image from "next/image"

const Item = (props) => {
    return (
        <div key={props.id} className={styles.card}>
            {/* <img className={selectedImage === image1 ? `${styles.image} ${styles.selected}` : styles.image} src={image1} alt={name} onClick={() => handleImageClick(image1)} />
            <img className={selectedImage === image2 ? `${styles.image} ${styles.selected}` : styles.image} src={image2} alt={name} onClick={() => handleImageClick(image2)} />
            <img className={selectedImage === image3 ? `${styles.image} ${styles.selected}` : styles.image} src={image3} alt={name} onClick={() => handleImageClick(image3)} /> */}
            <div className={styles.images}>
                <div  className={styles.imagesWrapper}>
                    <div className={styles.imageWrapper}>
                        <Image height={2000} width={1000} className={styles.image} src={props.image2} alt={props.name}/>
                    </div>
                    <div className={styles.imageWrapper}>
                        <Image height={2000} width={1000} className={styles.image} src={props.image3} alt={props.name}/>
                    </div>
                </div>
                <div className={styles.imageMainWrapper}>
                    <Image height={2000} width={1000} className={styles.imageMain} src={props.image1} alt={props.name}/>
                </div>
            </div>
            <div className={styles.infoWrapper}>
                <p className={styles.name} id={props.id}>{props.name}</p>
                <p className={styles.price}>Цена: {props.price} рублей</p>
                <p className={styles.size}>Размер: <span className={styles.sizeBox}>{props.size}</span></p>
                <p className={styles.color}>Цвет: {props.color}</p>
                <p className={styles.material}>Материал: {props.material}</p>
                <a className={styles.link} href={`https://wa.me/+79510686916/`} target="_blank">КУПИТЬ</a>
                <p className={styles.description}>{props.description}</p>
                <p className={styles.text1}>{props.text1}</p>
                <p className={styles.text2}>{props.text2}</p>
            </div>
        </div>
    )
}

export default Item

