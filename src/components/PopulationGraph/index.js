import React, { useEffect, useState } from "react";
import Chart from "chart.js/auto";

import "./index.css";

const PopulationGraph = () => {
  const [populationData, setPopulationData] = useState([]);
  const [chartInstance, setChartInstance] = useState(null);

  //   API Call
  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://datausa.io/api/data?drilldowns=Nation&measures=Population"
      );
      const data = await response.json();
      setPopulationData(data.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const renderPopulationGraph = () => {
    if (chartInstance) {
      chartInstance.destroy();
    }

    // Retrieving yesrs and population
    const years = populationData.map((year) => year.Year);
    const populations = populationData.map((year) => year.Population / 100000);

    const ctx = document.getElementById("populationChart").getContext("2d");
    const newChartInstance = new Chart(ctx, {
      type: "bar",
      data: {
        labels: years,
        datasets: [
          {
            label: "Population",
            data: populations,
            backgroundColor: "rgba(54, 162, 235, 0.5)",
            borderColor: "rgba(54, 162, 235, 1)",
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
            title: {
              display: true,
              text: "Population",
            },
            ticks: {
              callback: function (value, index, values) {
                return value + "k";
              },
            },
          },
          x: {
            title: {
              display: true,
              text: "Year",
            },
          },
        },
      },
    });

    setChartInstance(newChartInstance);
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (populationData.length > 0) {
      renderPopulationGraph();
    }
  }, [populationData]);

  return (
    <div className="graph-container">
      <h4 className="graph-head">Population Graph</h4>
      <canvas id="populationChart"></canvas>
    </div>
  );
};

export default PopulationGraph;
