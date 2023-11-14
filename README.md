# JPFC: Japanese Flashcards

This is JPFC, a simple flashcard app for studying Japanese vocab. 

The app loads onto the 'New Words' screen, as indicated by the star icon. Tap the flashcard to flip it over, and swipe to see the next card:

![RPReplay_Final1693934725](https://github.com/dylanwiseman/flashcards/assets/85514881/59c89d20-bb44-4efa-b82b-30aaa77674f4)

Tap the reverse icon to flip all the cards and study from the definition side:

![RPReplay_Final1693934725 2](https://github.com/dylanwiseman/flashcards/assets/85514881/67447b77-600e-4c39-9ffb-68b536cf51d0)

Tap the heart at the bottom right of a flashcard to add it to your favorites. Study your favorite words by tapping the heart at the bottom of the screen:

![RPReplay_Final1693934725 3](https://github.com/dylanwiseman/flashcards/assets/85514881/80602dfd-d81f-4278-8fe1-6afe284f6feb)

## How it works

I built the app in Expo using React Native. The japanese words and their definitions come from the open source JMDict project. New words are pulled at random from the JSON dictionary; favorited words are saved to local storage. I used React Native's Animated library to animate the card flip. 
