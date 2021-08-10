import Score, { IScore } from "../models/score";

export default class IOperationsDataBase {
  //Include the array string of the tweet
  verifyCandidate(tweetText: string, arrayWord: string[]) {
    //Verifico si el tweet contiene palabras de los candidatos
    const newArrayBoolean = arrayWord.map((word) => {
      if (tweetText.includes(word)) {
        return true;
      } else {
        return false;
      }
    });
    // Si el nuevo array contiene datos verdaderos retorno true
    if (newArrayBoolean.includes(true)) {
      return true;
    } else {
      return false;
    }
  }

  //Save data to the database
  async saveCandidateandScore(tweetText: string, score: string) {
    const wordCapitanich = [
      "Capitanich",
      "Coqui Capitanich",
      "Coki Capitanich",
    ];
    const wordZdero = ["Leandro Zdero", "Zdero", "Juan Carlos Polini"];
    const capitanichBoolean = this.verifyCandidate(tweetText, wordCapitanich);
    const zderoBoolean = this.verifyCandidate(tweetText, wordZdero);

    //Capitanich
    if (capitanichBoolean) {
      const capitanichData = await Score.findOne({ candidate: "Capitanich" });
      if (!capitanichData) {
        const newCandidate = new Score({
          candidate: "Capitanich",
        });
        if (score === "Positive") {
          newCandidate.scorePositive += 1;
        } else {
          if (score === "Negative") {
            newCandidate.scoreNegative += 1;
          } else {
            if (score === "Neutral") {
              newCandidate.scoreNeutral += 1;
            }
          }
        }
        await newCandidate.save();
      } else {
        if (score === "Positive") {
          capitanichData.scorePositive += 1;
        } else {
          if (score === "Negative") {
            capitanichData.scoreNegative += 1;
          } else {
            if (score === "Neutral") {
              capitanichData.scoreNeutral += 1;
            }
          }
        }
        await capitanichData.save();
      }
    }

    //Zdero
    if (zderoBoolean) {
      const zderohData = await Score.findOne({ candidate: "Zdero" });
      if (!zderohData) {
        const newCandidate = new Score({
          candidate: "Zdero",
        });
        if (score === "Positive") {
          newCandidate.scorePositive += 1;
        } else {
          if (score === "Negative") {
            newCandidate.scoreNegative += 1;
          } else {
            if (score === "Neutral") {
              newCandidate.scoreNeutral += 1;
            }
          }
        }
        await newCandidate.save();
      } else {
        if (score === "Positive") {
          zderohData.scorePositive += 1;
        } else {
          if (score === "Negative") {
            zderohData.scoreNegative += 1;
          } else {
            if (score === "Neutral") {
              zderohData.scoreNeutral += 1;
            }
          }
        }
        await zderohData.save();
      }
    }
  }
}
