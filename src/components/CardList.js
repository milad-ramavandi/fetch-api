import React, { useEffect, useState } from 'react'
import Card from './Card'
import styles from './MyStyles.module.scss'
const CardList = () => {
    const [product, setProduct] = useState([])
    useEffect(() => {
      fetch('http://localhost:9090/products').then(res => res.json()).then(data => setProduct(data))
    }, [])
    
  return (
    <div className={styles.cardlist}>
        {product.map(item => <Card key={item.id} name={item.name} price={item.price} indexImage={item.indexImageUrl} description={item.description}/>)}
    </div>
  )
}

export default CardList