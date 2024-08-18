import React, { useEffect, useState } from "react";
import axios from "axios";

const GiveReferral = () => {
  const [referrals, setReferrals] = useState([]);

  useEffect(() => {
    const fetchReferrals = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5001/api/give_referrals"
        );
        setReferrals(response.data);
      } catch (error) {
        console.error("Error fetching referrals:", error);
      }
    };

    fetchReferrals();
  }, []);

  return (
    <div style={{ margin: "50px" }}>
      <h2>List of Resumes and Intro Videos</h2>
      <ul>
        {referrals.map((referral) => (
          <li key={referral._id} style={{ marginBottom: "20px" }}>
            <strong>Name:</strong> {referral.name} <br />
            <strong>Email:</strong> {referral.email} <br />
            <strong>Phone:</strong> {referral.phone} <br />
            {referral.resume && (
              <div>
                <strong>Resume:</strong>
                <a
                  href={`http://localhost:5001/uploads/${referral.resume}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Resume
                </a>
              </div>
            )}
            {referral.video && (
              <div>
                <strong>Intro Video:</strong>
                <video
                  width="600"
                  controls
                  src={`http://localhost:5001/uploads/${referral.video}`}
                  style={{ display: "block", marginTop: "10px" }}
                >
                  Your browser does not support the video tag.
                </video>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GiveReferral;
