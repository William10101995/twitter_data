import express from "express";
import * as db from "../config/connectionDataBase";
import morgan from "morgan";
import cors from "cors";
import Score from "../models/score";


//Instancio express
const app = express();

//Seteo el puerto
app.set("port", process.env.PORT || 3000);

//Conecto a la base de datos
db.default.connections();

//Midleware morgan
app.use(morgan("dev"));
//Middleware cors
app.use(cors());
//Middleware json
app.use(express.json());
//Middleware urlencode
app.use(express.urlencoded({ extended: false }));

//Ruta get de la api
app.get("/api/estadisticas", async (__ , res) => {
  try {
    const dataScanditade = await Score.find({});
    res.status(200).json(dataScanditade);
  } catch (error: any) {
    res.status(500).send(error.message);
  }
});

export default app;
