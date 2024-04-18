import Link from 'next/link'

const Navigation = ({navLinks}) => {
    
        return (
    <ul>   
    {
        navLinks.map(item => 
            <li className="link" key={item.id}>
                <Link href={`${item.href}`}>
                    {item.value}
                </Link>
            </li>
            )
    }
    </ul>
    )
}

export default Navigation