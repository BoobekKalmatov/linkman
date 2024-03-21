import React, { useState } from 'react';
import Input from '../../shared/ui/input/Input';
import NavigateBtn from '../../shared/ui/navigatebtn/NavigateBtn';
import styles from './Navigation.module.css';

import basket from '../../images/basket.png';
import account from '../../images/account.png';
import Modal from '../../shared/ui/modal/Modal';


function Navigation() {


    const [showModal, setShowModal] = useState(false);

    const handleOpenModal = () => {
        setShowModal(true);
    };


    const handleCloseModal = () => {
        setShowModal(false);
      };


  return (
    <div className={styles.navigate}>
        <div className={styles.container}>

            <div className="logoblock">
                <span className={styles.logo}>LINKMAN</span>
            </div>

            <div className={styles.search}>
                
                <div className={styles.categories}>
                    <button className={styles.categoriesbtn}>
                        Категории
                    </button>
                </div>

                <div className={styles.searchInput}>
                    <form className={styles.form}>
                        <Input/>
                    </form>
                </div>

            </div>

            <div className={styles.loginBlock}>
                <NavigateBtn showmodal={handleOpenModal} btnicon={basket}/>

                <Modal show={showModal} handleClose={handleCloseModal}/>

                <NavigateBtn showmodal={handleOpenModal} btnicon={account}/>
            </div>

        </div>
    </div>
  )
}

export default Navigation