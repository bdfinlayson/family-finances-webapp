import React from "react";

export const Layout: ({children}: { children: any }) => (null | React.JSX.Element) = ({ children }) => {

    return (
        <div>
            { children }
        </div>
    )
}