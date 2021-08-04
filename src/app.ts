import twitter from "./index";
import { queryTweet } from "./config/queryTweet";
import AI from "./repository/openAI";

const openAi = new AI();

var stream = twitter.stream("statuses/filter", {
  track: queryTweet,
});

stream.on("tweet", async function (tweet) {
  openAi.claseficateText(tweet.text);
});
