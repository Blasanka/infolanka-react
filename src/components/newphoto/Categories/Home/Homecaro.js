import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const tutorialSteps = [
  {
    label: 'Elephants',
    imgPath:
      'https://image.shutterstock.com/image-photo/herd-elephants-bathing-jungle-river-600w-644007904.jpg',
  },
  {
    label: 'Beautiful beach and lighthouse',
    imgPath:
      'https://image.shutterstock.com/image-photo/beautiful-beach-lighthouse-srilanka-600w-599364767.jpg',
  },
  {
    label: 'Nine Arches',
    imgPath:
      'https://image.shutterstock.com/image-photo/nine-arches-bridge-above-sri-600w-1084348016.jpg',
  },
  {
    label: 'Beautiful st.clairs waterfall',
    imgPath:
      'https://image.shutterstock.com/image-photo/beautiful-stclairs-waterfall-landscape-sri-600w-382737745.jpg',
  },
  {
    label: 'Sigiriya',
    imgPath:
      'https://image.shutterstock.com/image-photo/couple-love-on-rock-admires-600w-1101661439.jpg',
  },
  {
    label: 'Laxapana Falls',
    imgPath:
      'https://image.shutterstock.com/image-photo/laxapana-falls-126-m-high-600w-795763423.jpg',
  },
  {
    label: 'Galle fort',
    imgPath:
      'https://image.shutterstock.com/image-photo/galle-fort-aerial-photographybeautiful-destination-260nw-1169999389.jpg',
  },
];

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 600,
    flexGrow: 1,
    textAlign:'center'
  },
  header: {
    display: 'flex',
    textAlign: 'center',
    height: 50,
    paddingLeft: theme.spacing(4),
    backgroundColor: theme.palette.background.default,
  },
  img: {
    height: 280,
    display: 'block',
    maxWidth: 600,
    overflow: 'hidden',
    width: '100%',
    textAlign: 'center',
  },
}));

function SwipeableTextMobileStepper() {
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = tutorialSteps.length;

  function handleNext() {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  }

  function handleBack() {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  }

  function handleStepChange(step) {
    setActiveStep(step);
  }

  return (
    <div className={classes.root}>
      <Paper square elevation={0} className={classes.header}>
        <Typography>{tutorialSteps[activeStep].label}</Typography>
      </Paper>
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {tutorialSteps.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <img className={classes.img} src={step.imgPath} alt={step.label} />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        steps={maxSteps}
        position="static"
        variant="text"
        activeStep={activeStep}
        nextButton={
          <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
            Next
            {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
            Back
          </Button>
        }
      />
    </div>
  );
}

export default SwipeableTextMobileStepper;
