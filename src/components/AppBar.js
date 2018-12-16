import React from 'react';
import { Box, Button, Heading } from 'grommet';
import { connect } from 'react-redux';
import { toggleSideBox } from '../actions';

const AppBar = (props) => {
    const { name, icon } = props;
    return (
        <Box
            tag='header'
            direction='row'
            align='center'
            background='brand'
            pad={{ left: 'small', right: 'small', vertical: 'small' }}
            elevation='medium'
            style={{ zIndex: '100' }}
            {...props}
        >
            <Button icon={icon} onClick={() => {props.toggleSideBox()}} />
            <Heading level='4' margin='none'>{name}</Heading>
        </Box>
    );
}

const mapStateToProps = (state) => {
    console.log(state);

    return state;
}

export default connect(mapStateToProps, { toggleSideBox })(AppBar);