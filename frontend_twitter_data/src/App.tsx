import React, { Component } from "react";
import ApexChart from "react-apexcharts";
import "./App.css"


export class App extends Component<any, any> {
  
  constructor(props: any) {
    super(props);

    this.state = {
      options: {
        chart: {
          type: "bar",
          height: 350,
        },
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: "55%",
            endingShape: "rounded",
          },
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          show: true,
          width: 2,
          colors: ["transparent"],
        },
        xaxis: {
          title:{ text : "( Listas )"},
          categories: [
            "Chaco Cambia",
            "Frente de Todos"
          ],
        },
        yaxis: {
          title: {
            text: "( Votos )",
          },
        },
        fill: {
          opacity: 1,
        },
        /* tooltip: {
          y: {
            formatter: function (val: any) {
              return "$ " + val + " thousands";
            },
          },
        }, */
      },
      series: [
        {
          name: "Score Negativo",
          data: [4, 6],
        },
        {
          name: "Score Positivo",
          data: [7, 18],
        },
        {
          name: "Score Neutral",
          data: [2, 4],
        },
      ],
    };
  }
  render() {
    return (
      <div className = "graphic-content">
        <h1>Sismógrafo Político</h1>
        <ApexChart
          options={this.state.options}
          series={this.state.series}
          type="bar"
          width={'100%'}
          height={'200%'}
        />
      </div>
    );
  }
}
