'use client'
import { useEffect, useState } from 'react';
import AllGoodsLink from '@/Components/AllGoodsLink/AllGoodsLink';
import Item from '@/Components/Item/Item';
// import Link from 'next/link';

export default function ItemOfGoods (props) {
    const [goods, setData] = useState(null);
    const [clickedItem, setClickedItem] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch('http://localhost:5000/goods');
            const responseData = await res.json();
            setData(responseData);
        };
        fetchData();
    }, []);
    useEffect(() => {
        const handleItem = () => {
            if (goods) {
                const filteredItems = goods.filter(item => item.id === props.params.itemId);
                setClickedItem(filteredItems);
            }
        };
        handleItem();
    }, [goods, props.params.itemId]);
    return (
        <>
        <section>
            <h2>Наши товары</h2>
            {clickedItem?.length &&
                clickedItem.map((item) => (
                    <Item 
                    key={item.id}
                    id={item.id}
                    category={item.category}
                    name={item.name}
                    image1={item.image1}
                    image2={item.image2}
                    image3={item.image3}
                    description={item.description}
                    text1={item.text1}
                    text2={item.text2}
                    color={item.color}
                    size={item.size}
                    price={item.price}
                    material={item.material}
                    />
                ))
            }
            <AllGoodsLink />
        </section>  
        </>
    );
}
