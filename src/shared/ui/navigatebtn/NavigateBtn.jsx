import React from 'react';
import styles from './NavigateBtn.module.css';

function NavigateBtn({ btnicon, showmodal }) {
  return (
    <button onClick={showmodal} className={styles.button}>
        <img src={btnicon} alt={btnicon} className={styles.buttonicon} />
    </button>
  )
}

export default NavigateBtn;