import { createContext, useContext, useReducer } from "react";

const InputContext = createContext();

const initialState = {
    count: 12,
    inputs: Array.from({length: 12}, () => '' ),
    isUpdated: false,
    isComplete: false,
    visibility: Array.from({length: 12}, () => true ),
}

function inputReducer(state, action) {
    switch(action.type) {
        case 'setInputValue': 
            return {
                ...state,
                inputs: state.inputs.map((input, index) =>
                    index === action.index ? action.value : input
                  ),
                isUpdated: state.inputs.some(input => input.length > 1 ),
                isComplete: state.inputs.some(input => input.length !== 0 ),
            };
        case 'setCount':
            return {
                ...state,
                count: action.value,
                inputs: Array.from({length: action.value}, () => ''),
                visibility: Array.from({length: action.value}, () => true),
                isUpdated: false,
                isComplete: false,
            };
        case 'toggleVisibilty':
            return {
                ...state,
                visibility: state.visibility.map((vis, i) => i === action.index ? !vis : vis )
            }
        case 'reset':
            return {
                ...state,
                inputs: Array.from({length: state.count}, () => ''),
                isUpdated: false,
            };
        default:
            return state;
    }
}

// eslint-disable-next-line react/prop-types
function InputsProvider({children}) {
    const [state, dispatch] = useReducer(inputReducer, initialState);

    return (
        <InputContext.Provider value={{...state, dispatch}}>
            {children}
        </InputContext.Provider>
    )
}

function useValues() {
    const context = useContext(InputContext);
    if(context === undefined) throw new Error("useValues must be used within an InputsProvider");
    return context;
}

export {InputsProvider, useValues};

