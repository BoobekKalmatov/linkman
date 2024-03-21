import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Modal.module.css';

function Modal({show, handleClose}) {

    if (!show) {
        return null;
      }

  return (
    <div onClick={handleClose} className={styles.modal}>
        <div className={styles.modalcontainer}>
            <h2 className={styles.modaltitle}>Авторизация</h2>
            <form className="form">
                <div className={styles.modalblock}>

                    <input type="text" className={styles.modalinput} name="phone" placeholder='Введите номер телефона'/>
                    <input type="password" className={styles.modalinput} name="password" placeholder='Введите пароль'/>
                    
                    <button className={styles.modalbtn}>отправить</button>

                </div>

                <NavLink className={styles.toregister} onClick={handleClose} to="/register">Зарегистрироваться</NavLink>

            </form>
        </div>
    </div>
  )
}

export default Modal;

