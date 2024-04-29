'use client'
import { useEffect, useState } from 'react';
import Item from '@/Components/Item/Item';
import AllGoodsLink from '@/Components/AllGoodsLink/AllGoodsLink';

export default function ItemOfAllGoods (props) {
    const [goodsData, setData] = useState(null);
    const [clickedItemOfGoods, setClickedItemOfGoods] = useState([]);
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
            if (goodsData) {
                const filteredItems = goodsData.filter(item => item.id === props.params.id);
                setClickedItemOfGoods(filteredItems);
            }
        };
        handleItem();
    }, [goodsData, props.params.id]);  
    return (
        <>
        <section>
            <h2>Наши товары</h2>
            {clickedItemOfGoods?.length &&
                clickedItemOfGoods.map((item) => (
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
