import React from 'react';
import LinkSidebar from '../../shared/ui/linksidebar/LinkSidebar';
import styles from './Sidebar.module.css';

function Sidebar() {
  return (
    <div className={styles.sidebar}>

        <div className={styles.sidebarContainer}>
            <LinkSidebar to="/about" text="Все товары"/>
            <LinkSidebar to="about" text="Туалетная бумага"/>
            <LinkSidebar to="about" text="Бытовая химия"/>
            <LinkSidebar to="about" text="Коврики"/>
            <LinkSidebar to="about" text="Для туалета"/>
            <LinkSidebar to="about" text="Для упаковки"/>
            <LinkSidebar to="about" text="Для уборки"/>
            <div className={styles.block}>
                <LinkSidebar to="/about" text="О компании"/>
                <LinkSidebar to="/about" text="Контакты"/>
                <LinkSidebar to="/about" text="Доставка"/>
                <LinkSidebar to="/about" text="О подписке"/>
                <LinkSidebar to="/about" text="Условия пользование"/>
                <LinkSidebar to="/about" text="Как оформить заказ"/>
            </div>
        </div>

    </div>
  )
}

export default Sidebar