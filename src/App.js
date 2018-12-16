import React, { Component } from 'react';
import { Grommet, Box } from 'grommet';
import { Sidebar } from 'grommet-icons';
import { connect } from 'react-redux';
import AppBar from './components/AppBar';
import SideBox from './components/SideBox';

const theme = {
  global: {
    // colors: {
    //   brand: '#0096D6'
    // },
    font: {
      family: 'Roboto',
      size: '14px',
      height: '20px',
    },
  },
};

class App extends Component {

  render() {
    return (
      <Grommet theme={theme}>
        <Box fill>
          <AppBar
            name='Easy Art Maker' 
            icon={<Sidebar />}
          />
          <SideBox
            show={this.props.sidebar}
          >
            Sidebar is gere
          </SideBox>
        </Box>
      </Grommet>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return state;
}

export default connect(mapStateToProps)(App);
