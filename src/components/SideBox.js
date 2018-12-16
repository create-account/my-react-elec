import React, { Component } from 'react';
import { Box } from 'grommet';

export default class SideBox extends Component {

    render() {
        const { children, show } = this.props;

        const display = show ? (
            <Box
                width='small'
                background='light-2'
                elevation='small'
                align='center'
                justify='center'
            >
            {children}
            </Box>
        ) : null;
        
        return display;
    }
}