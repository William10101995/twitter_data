// @ts-ignore
import OpenAI from "openai-nodejs";
import configOpenAI from "../config/configOpenAI";
import { examples, labels } from "../config/trainingOpenAI";
const client = new OpenAI(configOpenAI.SECRET_KEY);

export default class ArtificialInteligence {
  claseficateText(text: string) {
    client
      .classificate(text, {
        examples,
        labels,
        search_model: "ada",
        model: "curie",
      })
      .then((classification: any) => {
        console.log(`${text}: ${classification.label}`);
      })
      .catch(console.error);
  }
}
