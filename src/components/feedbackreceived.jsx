import React from "react";
const FeedbackReceived = ({ feedback }) => {
  return (
    <div className="feedback-received">
      <h3>Feedback Received</h3>
      {
            feedback.length > 0 ? (
            <div className="feedback-cards">
            {
                feedback.map((fb, index) => (
                <div key={index} className="feedback-card">
                    <h2 className="feedback-name">Name: {fb.name}</h2>
                    <h3 className="feedback-email">Email: {fb.email}</h3>
                    <p className="feedback-text">{fb.name}'s Feedback: {fb.feedback}</p>
                    <hr className="feedback-divider" />
                </div>
          ))}
            </div>
      ) : (
        <p className="no-feedback">No Feedback yet. Kindly write your Feedback.</p>
      )}
    </div>
  );
};

export default FeedbackReceived;
