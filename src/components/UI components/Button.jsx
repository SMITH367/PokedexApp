import React from "react";

const Button = (props) => {

    return (
        <>
            <button className={props.classNames} >{props.contentText}</button>
        </>
    )

}

export {
    Button
}