'use client'
import Link from 'next/link';

const NotFound = () => {
    return (
        <div>
            <h2>
                Данной страницы не существует
            </h2>
            <h3> Вернуться 
                <Link href="/">
                    на главную страницу
                </Link>
            </h3>
        </div>
    )
}

export default NotFound;