'use client';
import React, { useState, useContext } from "react";
import styles from "../styles/components/navbar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGear,
  faUser,
  faBars,
  faGlobe,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { SidebarContext } from "../context/sidebar.context";
import Sidebar from "./sidebar";

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sidebarshow,setsidebarshow]=useState(false)
  const toggleSidebar = () => {
    setsidebarshow(prevState => !prevState);
  };
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <SidebarContext.Provider value={{toggleSidebar,sidebarshow}}>
    <div className={styles.container}>
      <span className={styles.headers}>
        <FontAwesomeIcon icon={faBars} onClick={toggleSidebar} />
        <h1>Brimston Co.</h1>
      </span>
      <span className={styles.searchBar}>
        <FontAwesomeIcon className="m-1" icon={faMagnifyingGlass} />
        <input
          type="text"
          placeholder="search your wish"
          value={searchTerm}
          onChange={handleChange}
        />
      </span>
      <div className={styles.box}>
        <span className={styles.userProfile}>
          <span>EN</span>
          <span>
            <FontAwesomeIcon icon={faGlobe} />
          </span>
        </span>
        <span className={styles.userProfile}>
          <span>username</span>
          <span>
            <FontAwesomeIcon icon={faUser} />
          </span>
        </span>
        <span className={styles.userProfile}>
          <FontAwesomeIcon icon={faGear} />
        </span>
      </div>
    
    </div>
    {sidebarshow && <Sidebar/>}
    </SidebarContext.Provider>
   
  );
};

export default Navbar;

