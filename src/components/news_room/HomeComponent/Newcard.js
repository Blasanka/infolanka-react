import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Skeleton from '@material-ui/lab/Skeleton';
import {Col} from "antd";

const data = [
    {
        src:
            'https://www.youtube.com/embed/pd27tuX9WR8',
        title: 'Don Diablo @ Tomorrowland Main Stage 2019 | Official…',
        channel: 'Don Diablo',
        views: '396 k views',
        createdAt: 'a week ago',
    },
    {
        src:
            'https://www.youtube.com/embed/f8tbwu697js',
        title: 'Top Latino Songs 2019 - Luis Fonsi, Ozuna, Nicky Jam…',
        channel: 'Dj Yanky Plus',
        views: '2.1 M views',
        createdAt: '4 months ago',
    },
    {
        src:
            'https://www.youtube.com/embed/DppArUPDzXw',
        title: 'Calvin Harris, Sam Smith - Promises (Official Video)',
        channel: 'Calvin Harris',
        views: '130 M views',
        createdAt: '10 months ago',
    },
    {
        src:
            'https://www.youtube.com/embed/kesZHmyFOeE',
        title: 'Don Diablo @ Tomorrowland Main Stage 2019 | Official…',
        channel: 'Don Diablo',
        views: '396 k views',
        createdAt: 'a week ago',
    },
    {
        src:
            'https://www.youtube.com/embed/EPm4YVbeHTM',
        title: 'Top Latino Songs 2019 - Luis Fonsi, Ozuna, Nicky Jam…',
        channel: 'Dj Yanky Plus',
        views: '2.1 M views',
        createdAt: '4 months ago',
    },
    {
        src:
            'https://www.youtube.com/embed/ol9fiOAditk',
        title: 'Calvin Harris, Sam Smith - Promises (Official Video)',
        channel: 'Calvin Harris',
        views: '130 M views',
        createdAt: '10 months ago',
    },
];

function Media(props) {
    const { loading = false } = props;

    return (
        <Grid container wrap="nowrap">
            {(loading ? Array.from(new Array(3)) : data).map((item, index) => (
                <Box key={index} width={210} marginRight={0.5} my={5}>
                    {item ? (
                        <iframe width="210" height="118" src="https://www.youtube.com/embed/9K4VuVUcHQA" frameBorder="2"
                                allowFullScreen alt={item.title} src={item.src}></iframe>
                        // <img style={{ width: 210, height: 118 }} alt={item.title} src={item.src} />
                    ) : (
                        <Skeleton variant="rect" width={210} height={118} />
                    )}

                    {item ? (
                        <Box paddingRight={2}>
                            <Typography gutterBottom variant="body2">
                                {item.title}
                            </Typography>
                            <Typography display="block" variant="caption" color="textSecondary">
                                {item.channel}
                            </Typography>
                            <Typography variant="caption" color="textSecondary">
                                {`${item.views} • ${item.createdAt}`}
                            </Typography>
                        </Box>
                    ) : (
                        <React.Fragment>
                            <Skeleton />
                            <Skeleton width="60%" />
                        </React.Fragment>
                    )}
                </Box>
            ))}
        </Grid>
    );
}

Media.propTypes = {
    loading: PropTypes.bool,
};

export default function YouTube() {
    return (
        <Box overflow="hidden" clone>
            <Paper>
                <Box px={3}>
                    <Media />
                </Box>
            </Paper>
        </Box>
    );
}