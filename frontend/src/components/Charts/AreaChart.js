import React, { Component } from 'react'; 
import { 
  VictoryContainer,
  VictoryPie, 
  VictoryChart, 
  VictoryTheme, 
  Slice, 
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
          <VictoryChart
            theme={VictoryTheme.material}
            animate={{ duration: 1000 }}
          >
            <VictoryStack
              colorScale={"blue"}
            >
              {this.state.data.map((data, i) => {
                return (
                  <VictoryArea
                    key={i}
                    data={data}
                    interpolation={"basis"}
                  />
                );
              })}
            </VictoryStack>
          </VictoryChart>
      </div>
      );
   }
}

export default AreaChart;