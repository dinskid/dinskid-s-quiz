import { React, useState } from 'react';
import Timer from './components/Timer'
import QuestionBoard from './components/QuestionBoard';

import { eraseFromStore } from './utils/PersistState';

import { useDispatch, useSelector } from 'react-redux';
import './App.css';

function App() {
  const [questionId, setQuestionId] = useState(0);
  const questions = useSelector(state => state.questions);

  const appState = useSelector(state => state.appState);

  const questionCount = questions.length;
  const dispatch = useDispatch();

  const calculateScore = () => {
    // in an actual app, this would be some backend api
    // mostly handled by the same function which supplies the questions
    let score = 0;
    for (const q of questions) {
      if (q.answer === q.trueOption) score++;
    }
    return `${score.toString()}/${questionCount}`;
  }

  return (
    <div className="container">
      {
        appState === 'READY' &&
        <div className="start-quiz">
          <h1 style={{ fontStyle: 'italic', textAlign: 'center' }}>dinskid's arithmetic quiz</h1>
          <div className="rules">
            <h7 style={{ fontStyle: 'bold', fontSize: '1rem' }}>How it works?</h7>
            <ol>
              <li>
                You will answer 5 simple arithmetic multiple choice questions
              </li>
              <li>
                You will have 1 minute and 30 seconds to do so
              </li>
              <li>
                You will have to submit at the end to check how you performed
              </li>
            </ol>
            <div className="tag">All the best!</div>
          </div>
          <button onClick={() => {
            dispatch({ type: 'RESET' });
            dispatch({ type: 'START' });
          }}>
            Take me in to the Quiz!
          </button>
        </div>
      }
      {
        appState === 'RUNNING' && <div className="board">
          <Timer />
          <QuestionBoard questionId={questionId} currQuestion={questions[questionId]} />
          <div className="btn-list">
            {questionId !== 0 &&
              <button
                onClick={() => {
                  setQuestionId(questionId - 1);
                }}>
                Previous
            </button>
            }
            {
              questionId !== questionCount - 1 &&
              <button
                onClick={() => setQuestionId(questionId + 1)}>
                Next
            </button>
            }
            {
              questionId === questionCount - 1 &&
              <button
                onClick={() => {
                  // submit answers
                  dispatch({ type: 'END' })
                  dispatch({ type: 'ZERO_TIMER' })
                  setQuestionId(0);
                }}>
                Submit
          </button>
            }
          </div>
        </div>
      }
      {
        appState === 'ENDED' && <div className="end-card">
          <h1>Your score</h1>
          <div className="score">
            {calculateScore()}
          </div>
          <button onClick={() => {
            dispatch({ type: 'RESET_QUESTIONS' })
            // delete from local storage
            eraseFromStore();
            dispatch({ type: 'RESTART' })
          }}>
            Restart
          </button>
        </div>
      }
    </div >
  );
}

export default App;
