import { createContext, useReducer, useMemo, useEffect } from "react"
import PropTypes from 'prop-types'

export const initialState = {
  theme: "light",
  data: [],
  favs: JSON.parse(localStorage.getItem("favs")) || []
}

const reducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_THEME": {
      const newTheme = state.theme === "light" ? "dark" : "light"
      document.body.className = newTheme
      return { ...state, theme: newTheme }
    }
    case "SET_DATA":
      return { ...state, data: action.payload }
    case "ADD_FAV": {
      const updatedFavs = [...state.favs, action.payload]
      localStorage.setItem("favs", JSON.stringify(updatedFavs))
      return { ...state, favs: updatedFavs }
    }
    case "REMOVE_FAV": {
      const filteredFavs = state.favs.filter(fav => fav.id !== action.payload)
      localStorage.setItem("favs", JSON.stringify(filteredFavs))
      return { ...state, favs: filteredFavs }
    }
    case "RESET_FAVS":
      localStorage.removeItem("favs")
      return { ...state, favs: [] }
    case "SET_ERROR":
      return { ...state, error: action.payload }
    case "CLEAR_ERROR":
      return { ...state, error: null }
    default:
      return state
  }
}

export const ContextGlobal = createContext()

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  
  useEffect(() => {
    document.body.className = state.theme
  }, [])

  const providerValue = useMemo(() => ({
    state,
    dispatch
  }), [state])

  return (
    <ContextGlobal.Provider value={providerValue}>
      {children}
    </ContextGlobal.Provider>
  )
}

ContextProvider.propTypes = {
  children: PropTypes.node.isRequired
}
