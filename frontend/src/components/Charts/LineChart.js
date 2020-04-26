import React, { Component } from 'react'; 
import { 
  VictoryChart,
  VictoryLine,
  VictoryScatter ,
  VictoryTheme, 
  VictoryAxis,
  VictoryLabel
} from 'victory'; 

const getNameOrYear = (population) => {
   if (population.hasOwnProperty('origin_name')) {
      return population.origin_name;
   } else {
      return population.year; 
   }
}

const cartesianInterpolations = [
  "basis",
  "bundle",
  "cardinal",
  "catmullRom",
  "linear",
  "monotoneX",
  "monotoneY",
  "natural",
  "step",
  "stepAfter",
  "stepBefore"
];

const polarInterpolations = [
  "basis",
  "cardinal",
  "catmullRom",
  "linear"
];

const InterpolationSelect = ({ currentValue, values, onChange }) => (
  <select onChange={onChange} value={currentValue} style={{ width: 75 }}>
    {values.map(
      (value) => <option value={value} key={value}>{value}</option>
    )}
  </select>
);

class AreaChart extends Component {
      
   constructor(props) {
      // Add the data as a prop from mongodb.
      super(props);
      this.state = {
         clicked: false,
         title: "",
         labels: {},
         data: []
      };
   }

   // Having a lot of trouble getting the data field to populate with the this.props.data 
   componentDidMount = () => {
      this.setState({
         clicked: false,
         labels: {
            fontWeight: "bold"
         },
         title: this.props.title,
         data: this.props.data
      });
   }

   render() {
      const handleMouseOver = () => {
      const fillColor = this.state.clicked ? "#547BFE" : this.state.color;
      const clicked = !this.state.clicked;
      this.setState({
         clicked,
         style: {
            data: { fill: fillColor }
         }
      });
      };

      const CHART_HEIGHT = 1000; 
      const CHART_WIDTH = 1200; 
      const FONT_SIZE = 24;

      return (
        <div>
          <InterpolationSelect
            currentValue={this.state.interpolation}
            values={this.state.polar ? polarInterpolations : cartesianInterpolations }
            onChange={(event) => this.setState({ interpolation: event.target.value })}
          />
          <input
            type="checkbox"
            id="polar"
            value={this.state.polar}
            onChange={
              (event) => this.setState({
                polar: event.target.checked,
                interpolation: "linear"
              })
            }
            style={{ marginLeft: 25, marginRight: 5 }}
          />
          <label htmlFor="polar">polar</label>
          <VictoryChart polar={this.state.polar} height={390}>
            <VictoryLine
              interpolation={this.state.interpolation} data={data}
              style={{ data: { stroke: "#c43a31" } }}
            />
            <VictoryScatter data={data}
              size={5}
              style={{ data: { fill: "#c43a31" } }}
            />
            <VictoryAxis dependentAxis
              label="Population (1000s)"
              axisLabelComponent={<VictoryLabel style={{fontSize: FONT_SIZE}} dy={-25}/>}
            />
            <VictoryAxis
              label="Time (Years)"
              axisLabelComponent={<VictoryLabel style={{fontSize: FONT_SIZE}} dy={25}/>}
            />
          </VictoryChart>
        </div>
      );
    }
}

export default LineChart;