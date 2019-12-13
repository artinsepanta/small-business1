import React, { Component } from 'react'
import {
  TextField,
  Button,
  Container
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  loginButton: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
  },
});

const classes = useStyles();
class App extends Component {
  state = {
    username: '',
    password: ''
  }
  

  handleTextChange = (e) => {
    const state = { ...this.state }
    state[e.target.name] = e.target.value
    this.setState(state)
  }

  login = (e) => {
    e.preventDefault()
   document.cookie = "loggedIn=true;max-age=60*1000";

    window.location.replace("/")
  }

  render() {
    return (
      <div className="App">
        <Container maxWidth="sm">
          <form className="login-form" onSubmit={this.login}>
            <TextField
              required
              onChange={this.handleTextChange}
              value={this.state.username}
              name="username"
              label="Username"
              type="text" />
            <TextField
              required
              onChange={this.handleTextChange}
              value={this.state.password}
              name="password"
              label="Password"
              type="password" />
            <Button
              type="submit"
              className={classes.loginButton}
              variant="contained"
              color="primary">Login</Button>
          </form>
        </Container>
      </div>
    );
  }
}

export default App;