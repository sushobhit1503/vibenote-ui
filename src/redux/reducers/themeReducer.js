const initialState = {
    isDarkMode: false,
}

const themeReducer = (state = initialState, action) => {
    switch (action.type) {
        case "TOGGLE": 
            return { ...state, isDarkMode: !state.isDarkMode }
        default:
            return state
    }
}

export default themeReducer