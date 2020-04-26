import React, { Component } from 'react'; 
import { 
  VictoryStack,
  VictoryArea, 
  VictoryChart, 
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

/**
 * TODO: Map props.data so that it is formatted by year. {2016 -> [Bhutan: 200, Afghanistan: 300], 2017 -> [Bhutan: 100, Afghanistan: 500]}
 * TODO: Then with each of these grouped arrays create a VictoryArea and then stack them on top of each other. 
 */
class AreaChart extends Component {
      
   constructor(props) {
      super(props);
      this.state = props.data;
    }
  
    componentDidMount() {
      this.setStateInterval = window.setInterval(() => {
        this.setState({ data: this.props.data });
      }, 4000);
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
              {this.props.data.map((population, i) => {
                return (
                  <VictoryArea
                    key={i}
                    data={{ x: new Date(population.year), y: (population.persons / 1000)}}
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