import React, { Component } from 'react'; 
import { 
  VictoryChart,
  VictoryLine,
  Curve,
  Point,
  VictoryScatter ,
  VictoryTheme, 
  VictoryAxis,
  VictoryLabel
} from 'victory'; 

const data = [
  { x: 0, y: 0 },
  { x: 1, y: 2 },
  { x: 2, y: 1 },
  { x: 3, y: 4 },
  { x: 4, y: 3 },
  { x: 5, y: 5 }
];

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

class LineChart extends Component {
      
   constructor(props) {
      // Add the data as a prop from mongodb.
      super(props);
      this.state = {
         clicked: false,
         stroke: "#FF30F7",
         fill: "#FF3333",
         title: "",
         labels: {},
         data: []
      };
   }

   componentDidMount = () => {
      this.setState({
         clicked: false,
         stroke: this.props.stroke,
         fill: this.props.fill,
         labels: {
            fontWeight: "bold"
         },
         title: this.props.title,
         data: this.props.data
      });
   }

   render() {
      const handleMouseOver = () => {
      const strokeColor = this.state.clicked ? this.state.fill : this.state.stroke;
      const fillColor = this.state.clicked ? this.state.stroke : this.state.fill;
      const clicked = !this.state.clicked;
      this.setState({
         clicked,
         strokeStyle: {
          data: { stroke: strokeColor }
        },
         scatterStyle: {
            data: { fill: fillColor }
         }
      });
      };

      const CHART_HEIGHT = 1000; 
      const CHART_WIDTH = 1200; 
      const FONT_SIZE = 18;

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
          <VictoryChart 
            height={CHART_HEIGHT} 
            width={CHART_WIDTH}
            animate={{
              duration: 1000,
              onLoad: { duration: 2000 }
            }}
            domainPadding={{ x: 50, y: [0, 20] }}
            scale={{ x: "time", y: "linear" }}
            theme={VictoryTheme.material}
          >
            <VictoryLine
              interpolation={this.state.interpolation} 
              dataComponent={
                <Curve events={{ onMouseOver: handleMouseOver }} />
              }
              labels={
                this.props.data.map(population => `Year: ${population.year}` )
              }
              data={
                this.props.data.map(population => (
                  { x: new Date(population.year), y: (population.persons / 1000)}
                ))
              }
              style={this.state.strokeStyle}
            />
            <VictoryScatter 
              dataComponent={
                <Point events={{ onMouseOver: handleMouseOver }} />
              }
              data={
                this.props.data.map(population => (
                  { x: new Date(population.year), y: (population.persons / 1000)}
                ))
              }
              size={5}
              style={this.state.scatterStyle}
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