import ReactEChart from "echarts-for-react";

let dados = [];

for(let i = 0; i < 6; i++) { 
  dados.push(Math.floor(Math.random() * (1000 - 100) ));
}

export default function BarChart() {
  const eChartsOption = {
    title: {
      text: "Grafico 1",
    },
    xAxis: {
      type: "category",
      data: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun"],
    },
    yAxis: {
      type: "value",
    },
    tooltip: {},
    toolbox: {
      feature: {
        saveAsImage: {},
      },
    },

    series: {
      data: dados,
      type: "line",
    },
  };
  return (
    <div>
      <ReactEChart
        style={{
          margin: "0",
          padding: "0",
        }}
        option={eChartsOption}
      />
    </div>
  );
}
