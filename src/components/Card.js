import React from 'react'
import styles from './MyStyles.module.scss'
const Card = (props) => {
  return (
    <div className={styles.card}>
        <h3>{props.name}</h3>
        <h3>{props.price}</h3>
        <img src={props.indexImage} className={styles.img}/>
        <p>{props.description}</p>
    </div>
  )
}

export default Card