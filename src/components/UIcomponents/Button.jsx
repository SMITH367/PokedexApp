import React from "react";

const Button = (props) => {

    return (
        <>
            <button className={props.classNames} onClick={props.event}>{props.contentText}</button>
        </>
    )

}

export {
    Button
}