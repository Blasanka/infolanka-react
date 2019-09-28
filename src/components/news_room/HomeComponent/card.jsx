
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const useStyles = makeStyles(theme => ({
    card: {
        maxWidth: 345,
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: red[500],
    },
}));

export default function RecipeReviewCard() {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Card className={classes.card}>

            <CardMedia
                className={classes.media}
                image="http://www.hirunews.lk/Data/News_Images/201909/1569552614_4256162_hirunews_Pakistan-Vs-Sri-Lanka.jpg"
                title="Paella dish"
            />
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                    This impressive paella is a perfect party dish and a fun meal to cook together with your
                    guests. Add 1 cup of frozen peas along with the mussels, if you like.
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                    <ShareIcon />
                </IconButton>
                <IconButton
                    className={clsx(classes.expand, {
                        [classes.expandOpen]: expanded,
                    })}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    <ExpandMoreIcon />
                </IconButton>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <Typography paragraph>Method:</Typography>
                    <Typography paragraph>
                        The Sri Lanka national men's cricket team, (Sinhala: ශ්‍රී ලංකා ජාතික ක්‍රිකට් කණ්ඩායම,Tamil:இலங்கை தேசிய கிரிக்கெட் அணி) nicknamed The Lions, represents Sri Lanka in international cricket. It is a Full Member of the International Cricket Council (ICC) with Test, One-Day International (ODI) and T20 International (T20I) status.[8] The team first played international cricket (as Ceylon) in 1926–27, and were later awarThe Sri Lanka national men's cricket team, (Sinhala: ශ්‍රී ලංකා ජාතික ක්‍රිකට් කණ්ඩායම,Tamil:இலங்கை தேசிய கிரிக்கெட் அணி) nicknamed The Lions, represents Sri Lanka in international cricket. It is a Full Member of the International Cricket Council (ICC) with Test, One-Day International (ODI) and T20 International (T20I) status.[8] The team first played international cricket (as Ceylon) in 1926–27, and were later awar
                    </Typography>
                    {/*<Typography paragraph>*/}
                    {/*    Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high*/}
                    {/*    heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly*/}
                    {/*    browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken*/}
                    {/*    and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion, salt and*/}
                    {/*    pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add*/}
                    {/*    saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.*/}
                    {/*</Typography>*/}
                    {/*<Typography paragraph>*/}
                    {/*    Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook*/}
                    {/*    without stirring, until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat to*/}
                    {/*    medium-low, add reserved shrimp and mussels, tucking them down into the rice, and cook*/}
                    {/*    again without stirring, until mussels have opened and rice is just tender, 5 to 7*/}
                    {/*    minutes more. (Discard any mussels that don’t open.)*/}
                    {/*</Typography>*/}
                    {/*<Typography>*/}
                    {/*    Set aside off of the heat to let rest for 10 minutes, and then serve.*/}
                    {/*</Typography>*/}
                </CardContent>
            </Collapse>
        </Card>
    );
}