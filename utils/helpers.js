import { Platform } from 'react-native';

export const getPlatformOS = () => 'ios';

export const formatQuizResponse = (score, numberQuestions) => {
  const performance = score / numberQuestions;
  let response = '';

  if (performance < 0.4) {
    response = '👎 Your score was below average, you can improve it! Try again later!';
  } else if (performance < 0.6) {
    response = '👍 You can improve! Please try again...';
  } else {
    response = '🚀 You detonated! Try to make a quiz of a different deck!';
  }

  return response;
};
