const functions = require('firebase-functions');
const { dialogflow } = require('actions-on-google');

const app = dialogflow({ debug: true });

app.intent('repeat', (conv) => {
  console.info('input_repeat')
  conv.ask('repeat');
});

app.intent('play song', (conv)=> {
  console.info('aaaaa', conv.parameters);
  conv.ask('yes')
});

exports.stream = functions.https.onRequest(app);

exports.helloWorld = functions.https.onRequest((request, response) => {
  response.send("Hello from Firebase!");
});
