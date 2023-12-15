import React from "react"

export const Container = (props) => {
    const { children } = props;
    return (
        <div className=" px-28 w-full">
            {children}
        </div>
    )
}