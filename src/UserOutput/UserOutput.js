import React from 'react';

const userOutput = (props) => {
    return(
        <div className="userOutput">
            <p>Username: {props.username}</p>
            <p>{props.children}</p>
            <p>{props.children}</p>
        </div>
    );
};

export default userOutput;
