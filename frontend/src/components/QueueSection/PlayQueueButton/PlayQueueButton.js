import React from 'react'
import PlayCircleFilledWhiteRoundedIcon from '@material-ui/icons/PlayCircleFilledWhiteRounded';
import {
    Tooltip,
    Box,
    IconButton
} from "@material-ui/core";

function ShareButton({ disabled, queue, setNowPlaying }) {

    const handleClick = (event) => {
        setNowPlaying(queue[0])
    };
    

    return (<>
        <Tooltip
            title={disabled ? "Search for songs and add them to your queue" : ""}
        >
            <Box mt={1}>
                <IconButton
                    edge="end"
                    title="Play queue from beginning"
                    disabled={disabled}
                    onClick={handleClick}
                    target="_blank"
                    color={disabled ? "inherit" : "secondary"}
                >
                    <PlayCircleFilledWhiteRoundedIcon />
                </IconButton>
            </Box>
        </Tooltip>
    </>
    )
}

export default ShareButton
