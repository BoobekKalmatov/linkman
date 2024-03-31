import React from 'react';
import styles from './Input.module.css';
import searh from '../../assets/loupe.png';
function Input() {
  return (
    <div className={styles.input}>
        <input type="text" className={styles.searhinput} placeholder="Искать товары"/>
        <img src={searh} alt={searh} className={styles.searhicon} />
    </div>
  )
}

export default Input;