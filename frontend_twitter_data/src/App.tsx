import React, { Component, useEffect, useState } from "react";
import axios from "axios";
import { io } from "socket.io-client";
import Chart from "react-apexcharts";
import "./App.css";

export const App = () => {
  const [candidatos, setCandidatos] = useState([]);
  useEffect(() => {
    const socket = io("ws://localhost:5000");

    socket.on("connnection", () => {
      console.log("connected to server");
    });

    socket.on("Newestadisticas", (newEst) => {
      setCandidatos(newEst);
      console.log(newEst);
    });

    socket.on("disconnect", () => {
      console.log("Socket disconnecting");
    });
  }, []);

  useEffect(() => {
    const getCandidate = async () => {
      const response = await axios.get(
        "http://localhost:5000/api/estadisticas"
      );
      const candidateData = response.data;
      setCandidatos(candidateData);
    };

    getCandidate();
  }, []);
  const dataC = candidatos.map((candidato: any) => candidato.candidate);
  const dataVS = candidatos.map((candidato: any) => candidato.scorePositive);
  const dataVN = candidatos.map((candidato: any) => candidato.scoreNegative);
  const dataVNeu = candidatos.map((candidato: any) => candidato.scoreNeutral);
  const option = {
    options: {
      chart: {
        id: "basic-bar",
      },
      xaxis: {
        categories: dataC,
      },
    },
    series: [
      {
        name: "Votos Positivos",
        data: dataVS,
      },
      {
        name: "Votos Negativos",
        data: dataVN,
      },
      {
        name: "Votos Neutros",
        data: dataVNeu,
      },
    ],
  };

  return (
    <div className="app">
      <div className="row">
        <div className="mixed-chart">
          <Chart
            options={option.options}
            series={option.series}
            type="bar"
            width={"100%"}
            height={"380%"}
          />
        </div>
      </div>
    </div>
  );
};
