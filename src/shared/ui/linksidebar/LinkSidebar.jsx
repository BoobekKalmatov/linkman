import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './LinkSidebar.module.css';

function LinkSidebar({to, text}) {
  return (
    <NavLink className={styles.link} to={to}>{text}</NavLink>
  )
}

export default LinkSidebar