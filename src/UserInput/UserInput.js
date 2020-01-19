import React from 'react';

const userInput = (props) =>{

    const style = {
        border: '1px solid blue',
        textAlign: 'center'
    }

    return(
        <div>
            <input
                type="text"
                style={style}
                onChange={props.changed}
                value={props.currentName}/>
        </div>
    );
};

export default userInput;