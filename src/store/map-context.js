import React from "react"

const mapContext = React.createContext({
    states: [],
    check:(id) => {},
    uncheck: (id) => {}
})

export default mapContext