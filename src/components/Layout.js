import React from 'react';
import Navigation from './Navigation/Navigation';
import Sidebar from './Sidebar/Sidebar';
import styles from './Layout.module.css';


function Layout({ children }) {
  return (
    <>
        <Navigation/>
        <div className={styles.layoutcontainer}>
          <Sidebar/>
          {children}
       </div>
    </>
  )
}

export default Layout