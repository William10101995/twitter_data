// @ts-ignore
import OpenAI from "openai-nodejs";
import configOpenAI from "../config/configOpenAI";
import { examples, labels } from "../config/trainingOpenAI";
const client = new OpenAI(configOpenAI.SECRET_KEY);
import dataBase from '../repository/operationsDataBase'

//Instancio database operations
const operationsDataBase = new dataBase();

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
        operationsDataBase.saveCandidateandScore(text, classification.label);
      })
      .catch(console.error);
  }
}
