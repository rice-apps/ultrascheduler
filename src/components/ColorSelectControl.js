import React from 'react'
import {connect} from 'react-redux';
import * as COLORS from '../constants/BackgroundColors'
import {setColor} from '../actions/BackgroundActions';

const ColorSelectControl = ({bgColor, setColor}) => (
    <div style={{marginTop: 8}}>
        <button onClick={() => bgColor == COLORS.BLUE_LIGHT ? setColor(COLORS.RED_LIGHT) : setColor(COLORS.BLUE_LIGHT)}>
            Click Me!
        </button>
    </div>
);

export default connect(
    (state) => ({
        bgColor: state.BackgroundReducer.color, 
    }),
    (dispatch) => ({
        setColor: color => dispatch(setColor(color))
    })
)(ColorSelectControl);