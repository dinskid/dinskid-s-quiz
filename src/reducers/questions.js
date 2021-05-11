const initialState = [
  {
    question: '1x9 = ?',
    options: [
      '4',
      '7',
      '9',
      '2'
    ],
    answer: -1,
    trueOption: 2
  },
  {
    question: '2x9 = ?',
    options: [
      '4',
      '18',
      '9',
      '2'
    ],
    answer: -1,
    trueOption: 1
  },
  {
    question: '3x9 = ?',
    options: [
      '4',
      '27',
      '9',
      '2'
    ],
    answer: -1,
    trueOption: 1
  },
  {
    question: '4x9 = ?',
    options: [
      '36',
      '7',
      '9',
      '2'
    ],
    answer: -1,
    trueOption: 0
  },
  {
    question: '5x9 = ?',
    options: [
      '2',
      '9',
      '7',
      '45'
    ],
    answer: -1,
    trueOption: 3
  },
]

const getQuestions = () => {
  // shuffle source: https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
  let array = JSON.parse(JSON.stringify(initialState));
  let currentIndex = array.length, temporaryValue, randomIndex;
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}

const questionsReducer = (state = getQuestions(), action) => {
  switch (action.type) {
    case 'ANSWER_QUESTION': {
      state[action.questionId].answer = action.answer;
      return state;
    }
    case 'RESET_QUESTIONS': {
      return getQuestions();
    }
    default: return state;
  }
}

export default questionsReducer;