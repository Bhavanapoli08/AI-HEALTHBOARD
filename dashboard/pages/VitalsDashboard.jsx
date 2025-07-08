// src/pages/VitalsDashboard.jsx
import React, { useEffect, useState } from "react";

const VitalsDashboard = () => {
  const [vitals, setVitals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2ODY4YzgxZTQ3MzAyNzg3MTI0YzZiM2YiLCJyb2xlIjoicGF0aWVudCIsImlhdCI6MTc1MTgyNzg5NSwiZXhwIjoxNzUyNDMyNjk1fQ.o3TXS9sSp46fOM6--rHcWb09j_tqhreJjCpvHBRGtkY";

    fetch("http://localhost:5001/api/vitals/all", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch vitals");
        }
        return res.json();
      })
      .then((data) => {
        setVitals(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching vitals:", err);
        setError("Failed to load vitals. Check backend.");
        setLoading(false);
      });
  }, []);

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Patient Vitals Dashboard</h1>
      {loading ? (
        <p>Loading vitals...</p>
      ) : error ? (
        <p style={{ color: "red" }}>{error}</p>
      ) : vitals.length === 0 ? (
        <p>No vitals found.</p>
      ) : (
        vitals.map((vital, index) => (
          <div
            key={index}
            style={{
              marginBottom: "1rem",
              border: "1px solid #ccc",
              padding: "1rem",
              borderRadius: "8px",
            }}
          >
            <p>
              <strong>Patient:</strong> {vital.user?.name || "Unknown"}
            </p>
            <p>
              <strong>Heart Rate:</strong> {vital.heartRate} bpm
            </p>
            <p>
              <strong>Temperature:</strong> {vital.temperature} °C
            </p>
            <p>
              <strong>Oxygen Saturation:</strong> {vital.oxygenSaturation} %
            </p>
            <p>
              <strong>Risk:</strong> {vital.riskLevel}
            </p>
          </div>
        ))
      )}
    </div>
  );
};

export default VitalsDashboard;

