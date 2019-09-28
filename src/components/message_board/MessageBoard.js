import React from 'react';
import Container from './container'
import './style.css'
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

//components

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
  input: {
    display: 'none',
  },
}));

function MessageBoard() {
  const classes = useStyles();
  return (
    <div>
    <h1 className='App'>Message Board</h1>
    <h2 className="See">
      <Button variant="outlined" color="Primary" className={classes.button}>
        <Link to="/message_board/Signin">Login</Link>
      </Button> 
      <Button variant="outlined" color="secondary" className={classes.button}>
        <Link to="/message_board/Register">Register</Link>
      </Button>  

    </h2>
      <Container
        questionData={{
        id: "01",
        imgUrl: "http://placekitten.com/200/200?image=11",
        question: "How can i cook rice?",
        reply: "You have wash the with water and cook it"
        }}
      />
      <Container
        questionData={{
        id: "02",
        imgUrl: "http://placekitten.com/200/200?image=8",
        question: "How can i cook rice?",
        reply: "You have wash the with water and cook it"
        }}
      />
      <Container
        questionData={{
        id: "03",
        imgUrl: "http://placekitten.com/200/200?image=7",
        question: "How can i cook good marten curry?",
        reply: "You have wash the with water and cook it"
        }}
      />
      <Container
        questionData={{
        id: "04",
        imgUrl: "http://placekitten.com/200/200?image=4",
        question: "How can you love a dog?",
        reply: "You have wash the with water and cook it"
        }}
      />
      <Container
        questionData={{
        id: "01",
        imgUrl: "http://placekitten.com/200/200?image=11",
        question: "How can i cook rice?",
        reply: "You have wash the with water and cook it"
        }}
      />
      <Container
        questionData={{
        id: "02",
        imgUrl: "http://placekitten.com/200/200?image=8",
        question: "How can i cook rice?",
        reply: "You have wash the with water and cook it"
        }}
      />
      <Container
        questionData={{
        id: "03",
        imgUrl: "http://placekitten.com/200/200?image=7",
        question: "How can i cook good marten curry?",
        reply: "You have wash the with water and cook it"
        }}
      />
      <Container
        questionData={{
        id: "04",
        imgUrl: "http://placekitten.com/200/200?image=4",
        question: "How can you love a dog?",
        reply: "You have wash the with water and cook it"
        }}
      />
        <hr/>
    </div>
  );
}

export default MessageBoard;
