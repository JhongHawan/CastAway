import React, { useState } from 'react';
import GridList from '@material-ui/core/GridList';
import { makeStyles } from '@material-ui/core/styles';
import GridListTile from '@material-ui/core/GridListTile';
import Typography from '@material-ui/core/Typography';
import Popover from '@material-ui/core/Popover';

import { NavLink } from 'react-router-dom';
import { Button, Box } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        // backgroundColor: theme.palette.background.paper,
    },
    popover: {
        pointerEvents: 'none'
    },
    paper: {
        padding: theme.spacing(1)
    }

}));


function MouseOverPopover() {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = useState(null);

    const handlePopoverOpen = (event) => {
        setAnchorEl(event.currentTarget);
    }

    const handlePopoverClose = (event) => {
        setAnchorEl(null);
    }

    const open = Boolean(anchorEl);

    return (
        <div>
            <Typography
                aria-owns={open ? 'mouse-over-popover' : undefined}
                aria-haspopup="true"
                onMouseEnter={handlePopoverOpen}
                onMouseLeave={handlePopoverClose}
            >
                Hover with a Popover.
      </Typography>
            <Popover
                id="mouse-over-popover"
                className={classes.popover}
                classes={{
                    paper: classes.paper,
                }}
                open={open}
                anchorEl={anchorEl}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                onClose={handlePopoverClose}
                disableRestoreFocus
            >
                <Typography>I use Popover.</Typography>
            </Popover>
        </div>
    );

}


// creates the tiles
function ImageScroll() {
    const classes = useStyles();

    const [anchorEl, setAnchorEl] = useState(null);

    const handlePopoverOpen = (event) => {
        setAnchorEl(event.currentTarget);
    }

    const handlePopoverClose = (event) => {
        setAnchorEl(null);
    }

    const open = Boolean(anchorEl);

    // number of pictures to populate
    const nTiles = 28;


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
        <div className={classes.gridListBasic}>
            <GridList cols={5} spacing={0}>

                {
                    arrImg.map(tile => (
                        <GridListTile onClick={testClick}>
                            <img
                                src={tile.name}
                                alt={tile.name}
                                onMouseEnter={handlePopoverOpen}
                                onMouseLeave={handlePopoverClose}
                            />
                            <Popover
                                id="mouse-over-popover"
                                className={classes.popover}
                                classes={{
                                    paper: classes.paper,
                                }}
                                open={open}
                                anchorEl={anchorEl}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                onClose={handlePopoverClose}
                                disableRestoreFocus
                            >
                                <Box>
                                    <h6>John Doe</h6>
                                </Box>
                                {/* <h1></h1> */}
                            </Popover>
                            {/* <MouseOverPopover /> */}
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
                                onMouseEnter={handlePopoverOpen}
                                onMouseLeave={handlePopoverClose}
                            />
                            <Popover
                                id="mouse-over-popover"
                                className={classes.popover}
                                classes={{
                                    paper: classes.paper,
                                }}
                                open={open}
                                anchorEl={anchorEl}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                onClose={handlePopoverClose}
                                disableRestoreFocus
                            >
                                <Box>
                                    <h6>John Doe</h6>
                                </Box>
                                {/* <h1></h1> */}
                            </Popover>
                            {/* <MouseOverPopover /> */}
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