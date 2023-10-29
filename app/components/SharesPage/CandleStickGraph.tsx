import { VictoryChart } from "victory-chart";
import React from "react";
import {
  VictoryAxis,
  VictoryTheme,
  VictoryCandlestick,
  VictoryBar,
} from "victory";
function CandleStickGraph() {
  const marketData = [
    { x: new Date(2016, 6, 1), open: 5, close: 10, high: 15, low: 0 },
    { x: new Date(2016, 6, 2), open: 10, close: 15, high: 20, low: 5 },
    { x: new Date(2016, 6, 3), open: 15, close: 20, high: 22, low: 10 },
    { x: new Date(2016, 6, 4), open: 20, close: 10, high: 25, low: 7 },
    { x: new Date(2016, 6, 5), open: 10, close: 8, high: 15, low: 5 },
  ];
  return (
    <div>
      {/* <VictoryCandlestick
        candleColors={{ positive: "#5f5c5b", negative: "#c43a31" }}
        data={marketData}
      />
      <VictoryChart
        theme={VictoryTheme.material}
        domainPadding={{ x: 25 }}
        scale={{ x: "time" }}
      >
        <VictoryAxis tickFormat={(t) => `${t.getDate()}/${t.getMonth()}`} />
        <VictoryAxis dependentAxis />
        <VictoryCandlestick
          candleColors={{ positive: "#5f5c5b", negative: "#c43a31" }}
          data={marketData}
        />
      </VictoryChart> */}
    </div>
  );
}

class CandleGraph extends React.Component {
  render() {
    return (
      <div>
        <VictoryBar></VictoryBar>
      </div>
    );
  }
}

export default CandleGraph;
