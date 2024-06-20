'use client';
import React, { useContext, useEffect } from 'react';
import styles from '../styles/components/sidebar.module.css';
import { SidebarContext } from '../context/sidebar.context';
import { faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Sidebar = () => {
  const { toggleSidebar, sidebarshow } = useContext(SidebarContext);

  return (
    <div className={`${styles.sidebar_inner} ${sidebarshow ? styles.show : ''}`}>
      <FontAwesomeIcon className={styles.close_icon} onClick={toggleSidebar} icon={faX} />
      <ul>
        <li>
          <a href="#">
            <span className={styles.text}>Dashboard</span>
          </a>
        </li>
        <li>
          <a href="#">
            <span className={styles.icon}><i className="fa fa-link"></i></span>
            <span className={styles.text}>Shortcuts</span>
          </a>
        </li>
        <li>
          <a href="#">
            <span className={styles.icon}><i className="fa fa-eye"></i></span>
            <span className={styles.text}>Overview</span>
          </a>
        </li>
        <li>
          <a href="#">
            <span className={styles.icon}><i className="fa fa-book"></i></span>
            <span className={styles.text}>Event</span>
          </a>
        </li>
        <li>
          <a href="#">
            <span className={styles.icon}><i className="fa fa-question-circle"></i></span>
            <span className={styles.text}>About</span>
          </a>
        </li>
        <li>
          <a href="#">
            <span className={styles.icon}><i className="fa fa-pen"></i></span>
            <span className={styles.text}>Service</span>
          </a>
        </li>
        <li>
          <a href="#">
            <span className={styles.icon}><i className="fa fa-id-card"></i></span>
            <span className={styles.text}>Contact</span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
