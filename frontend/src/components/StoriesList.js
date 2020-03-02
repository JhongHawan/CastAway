import React from 'react';
import GridList from '@material-ui/core/GridList';
import { makeStyles } from '@material-ui/core/styles';
import GridListTile from '@material-ui/core/GridListTile';


const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
    }

}));


// creates the tiles
function ImageScroll() {
    const classes = useStyles();

    // number of pictures to populate
    const nTiles = 28;


    // the prefix of the image names
    let base = "user_"
    // the suffix of image names
    let end = ".png"

    // an array of objects to map
    let arrImg = [
        {
            name: base.concat(Math.floor(Math.random() * 15) + 1, end)
        }
    ]

    let testClick = () => {
        console.log("CLICK");

    }

    

    for (let i = 1; i < nTiles; i++) {
        arrImg.push({ name: base.concat(Math.floor(Math.random() * 15) + 1, end) })
    }
    return (
        <div className={classes.gridListBasic}>
            <GridList cols={7} spacing={0}>

                {
                    arrImg.map(tile => (
                        <GridListTile onClick={testClick}>
                            <img src={tile.name} alt={tile.name} />
                        </GridListTile>
                    ))
                }

            </GridList>
        </div>
    );
}


class storiesList extends React.Component {
    constructor(props) {
        super(props)

    }

    render() {

        return (
            <ImageScroll />
        );
    }
}


export default storiesList;