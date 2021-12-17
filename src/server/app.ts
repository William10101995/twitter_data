import express from "express";
import * as db from "../config/connectionDataBase";
import morgan from "morgan";
import cors from "cors";
import Score from "../models/score";
import { Server, Socket } from "socket.io";
import { createServer } from "http";

//Instancio express
const app = express();

//Seteo el puerto
app.set("port", process.env.PORT);

const httpServer = createServer(app);

//Instancio socket.io
const io = new Server(httpServer, {
  transports: ["polling"],
  cors: {
    origin: "http://localhost:3000",
  },
});

//abro escucha al socket
io.on("connection", (socket: Socket) => {
  console.log(socket.id);
});

//cierro escucha al socket
io.on("disconnect", (socket: Socket) => {
  console.log(`${socket.id} se ha desconectado`);
});

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
app.get("/api/estadisticas", async (__, res) => {
  try {
    const dataScanditade = await Score.find({});
    setInterval(() => {
      io.emit("Newestadisticas", dataScanditade);
    }, 1000);
    res.status(200).json(dataScanditade);
  } catch (error: any) {
    res.status(500).send(error.message);
  }
});

//Server is listening
httpServer.listen(app.get("port"), () => {
  console.log("Server listening on port " + app.get("port"));
});

export default io;
