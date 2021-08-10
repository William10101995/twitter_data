import twitter from "./config/twitInit";
import { queryTweet } from "./config/queryTweet";
import AI from "./repository/openAI";
import dataBaseConnection from './config/connectionDataBase'

//Instancio OpenAI
const openAi = new AI();

//Conecto a la base de datos
dataBaseConnection.connections();

//Abro el stream de tweets
var stream = twitter.stream("statuses/filter", {
  track: queryTweet,
});

stream.on("tweet", async function (tweet) {
  openAi.claseficateText(tweet.text);
});
