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

class PieChart extends Component {
      
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
      console.log(`Props Data: ${this.props.data}`)

      return (
      <div>
         <VictoryPie
         height={CHART_HEIGHT} 
         width={CHART_WIDTH}
         animate={{
            duration: 1000,
            onLoad: { duration: 2000, easing: 1000 }
         }}
         theme={VictoryTheme.material}
         colorScale={[
            "#00876c",
            "#3f996f",
            "#65aa71",
            "#8abb75",
            "#afcb7a",
            "#d5da83",
            "#fce88f",
            "#face77",
            "#f7b364",
            "#f29757",
            "#eb7b51",
            "#e15d4f",
            "#d43d51",
         ]}
         dataComponent={
            <Slice events={{ onMouseOver: handleMouseOver }}/>
         }
         style={{ labels: { fill: "primary", fontSize: 20, fontWeight: "bold" } }}
         data={
            this.props.data.map(population => (
               { x: getNameOrYear(population), y: (population.persons / 1000)}
            ))
         }
         innerRadius={54}
         />
      </div>
      );
   }
}

export default PieChart;