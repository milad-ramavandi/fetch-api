import React from 'react'
import CardList from './CardList'
import styles from './MyStyles.module.scss'
const MainContainer = () => {
  return (
    <div className={styles.maincontainer}>
        <div className={styles.topsection}>
            <strong className={styles.strong}>پیشنهاد ویژه</strong>
            <a href='*' className={styles.link}>مشاهده ی همه</a>
        </div>
        <div>
            <CardList/>
        </div>
    </div>
  )
}

export default MainContainer