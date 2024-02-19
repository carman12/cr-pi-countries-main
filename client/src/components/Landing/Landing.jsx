import React from 'react';
import { Link } from 'react-router-dom';
import styles from './landing.module.css'

function LandingPage() {
  return (

    <div className={styles.contentLanding}>
      <h1>Guía para actividades en paises</h1>      
      <Link to="/home">
        <button>Enter</button>
      </Link>
    </div>
  );
}


export default LandingPage;