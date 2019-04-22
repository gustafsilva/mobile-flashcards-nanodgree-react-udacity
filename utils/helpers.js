/* eslint-disable quotes */
import { Platform, AsyncStorage } from 'react-native';
import { Notifications, Permissions } from 'expo';

export const getPlatformOS = () => Platform.OS;

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

const NOTIFICATION_KEY = 'MobileFlashCard:notifications';

export const clearLocalNotification = () => (
  AsyncStorage.removeItem(NOTIFICATION_KEY)
    .then(Notifications.cancelAllScheduledNotificationsAsync)
);

export const createNotification = () => ({
  title: 'Go back to your studies',
  body: "👋 hello, we noticed that you did not study today! How about exercising now?",
  ios: {
    sound: true,
  },
  android: {
    sound: true,
    priority: 'high',
    sticky: false,
    vibrate: true,
  }
});

export const setLocalNotification = () => (
  AsyncStorage.getItem(NOTIFICATION_KEY)
    .then(JSON.parse)
    .then((data) => {
      if (data === null) {
        Permissions.askAsync(Permissions.NOTIFICATIONS)
          .then(({ status }) => {
            if (status === 'granted') {
              Notifications.cancelAllScheduledNotificationsAsync();

              const tomorrow = new Date();
              tomorrow.setDate(tomorrow.getDate() + 1);
              tomorrow.setHours(21);
              tomorrow.setMinutes(0);

              Notifications.scheduleLocalNotificationAsync(
                createNotification(),
                {
                  time: tomorrow,
                  repeat: 'day',
                }
              );

              AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true));
            }
          });
      }
    })
);
