import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    <div style={styles.container}>

      <h1 style={styles.title}>🚧 Under Maintenance 🚧</h1>
      <p style={styles.text}>Our website is currently undergoing maintenance.</p>

      

      <p style={styles.text}>Please check back soon!</p>
    </div>
  );
}

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f7f7f7",
    textAlign: "center",
    padding: "20px",
  },
  title: {
    fontSize: "2.5rem",
    marginBottom: "10px",
    color: "#da4848ff",
  },
  text: {
    fontSize: "1.2rem",
 
    color: "#da4848ff",

  },
};

export default App;



