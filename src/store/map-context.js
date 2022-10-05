import React from "react"

const mapContext = React.createContext({
    states: [],
    bakeryList:[],
    onClickState: (index) => {},
    check:(id) => {},
    uncheck: (id) => {}
})

export default mapContext