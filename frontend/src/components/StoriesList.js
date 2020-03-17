import React, { useState } from 'react';
import GridList from '@material-ui/core/GridList';
import { makeStyles } from '@material-ui/core/styles';
import GridListTile from '@material-ui/core/GridListTile';

import { useStyles } from './Theme'

// creates the tiles
function ImageScroll() {
    const classes = useStyles();



    // the prefix of the image names
    let base = "user_"
    // the suffix of image names
    let end = ".png"

    // an array of objects to map
    let arrImg = [
        {
            // name: base.concat(Math.floor(Math.random() * 15) + 1, end)
            name: base.concat(1, end),
        }
    ]

    for(let i = 2; i < 16; i++) {
        arrImg.push({ 
            name: base.concat(i, end)
        })
    }

    let testClick = () => {
        console.log("CLICK");
        // StoryModal();

    }




    // for (let i = 1; i < nTiles; i++) {
    //     arrImg.push({ name: base.concat(Math.floor(Math.random() * 15) + 1, end) })
    // }
    return (
        <div>
            <GridList cols={5} spacing={0}>

                {
                    arrImg.map(tile => (
                        <GridListTile onClick={testClick}>
                            <img
                                src={tile.name}
                                alt={tile.name}
                            />
                            
                        </GridListTile>
                    ))
                }
                {/* repeated to fill more screen */}
                {
                    arrImg.map(tile => (
                        <GridListTile onClick={testClick}>
                            <img
                                src={tile.name}
                                alt={tile.name}
                            />
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