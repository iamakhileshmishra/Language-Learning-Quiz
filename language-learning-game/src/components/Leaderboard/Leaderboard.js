// src/components/Leaderboard.js
import React, { useState, useEffect } from "react";
import "./Leaderboard.css";

const Leaderboard = () => {
  const [leaderboardData, setLeaderboardData] = useState([]);

  useEffect(() => {
    // Fetch leaderboard data from your backend API (MongoDB)
    // Update setLeaderboardData with the fetched data
    const fetchData = async () => {
      try {
        const response = await fetch("/api/leaderboard"); // Replace with your API endpoint
        const data = await response.json();
        setLeaderboardData(data);
      } catch (error) {
        console.error("Error fetching leaderboard data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div
      className="leaderboard-container"
      style={{ backgroundImage: "url('/lng.jpg')" }}
    >
      <h1>Leaderboard</h1>
      <table className="leaderboard-table">
        <thead>
          <tr>
            <th>Rank</th>
            <th>Name</th>
            <th>Language</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {leaderboardData.map((user, index) => (
            <tr key={index} className={index < 3 ? `top-${index + 1}` : ""}>
              <td>{index + 1}</td>
              <td>{user.name}</td>
              <td>{user.language}</td>
              <td>{user.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Leaderboard;
