import React, { useEffect, useState } from "react";
import axios from "axios";

const Profile = ({ accessToken }) => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const response = await axios.get("/api/auth/profile", {
          headers: { Authorization: accessToken },
        });
        setUserData(response.data);
      } catch (error) {
        console.error("Failed to fetch profile data", error);
      }
    };

    if (accessToken) {
      fetchProfileData();
    }
  }, [accessToken]);

  return (
    <div>
      <h2>Profile</h2>
      {userData && (
        <div>
          <p>Username: {userData.username}</p>
          {/* Display other profile information */}
        </div>
      )}
    </div>
  );
};

export default Profile;
