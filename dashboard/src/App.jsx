// src/App.jsx
import React from "react";
import VitalsDashboard from "./pages/VitalsDashboard";

function App() {
  return (
    <div className="App">
      <header style={styles.header}>
        <h2>AI HealthBoard – Doctor Dashboard</h2>
      </header>

      <main style={styles.main}>
        <VitalsDashboard />
      </main>
    </div>
  );
}

const styles = {
  header: {
    backgroundColor: "#0077b6",
    padding: "1rem",
    color: "white",
    textAlign: "center",
    fontFamily: "Arial, sans-serif",
  },
  main: {
    padding: "2rem",
    fontFamily: "Arial, sans-serif",
  },
};

export default App;

