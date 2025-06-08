import FeedbackForm from './components/feedbackform';
import FeedbackReceived from './components/feedbackreceived';
import './App.css';
import { useState } from 'react';

function App() {
  const [feedback,setFeedback]=useState([]);
  console.log(feedback)
  const addFeedback=(feedback)=>{
    setFeedback((prev)=>[...prev,feedback])
  }
  return (
    <div className="App">
      <FeedbackForm addFeedback={addFeedback}/>
      <FeedbackReceived feedback={feedback}/>
    </div>
  );
}

export default App;
