import React from 'react'
import { createRoot } from 'react-dom/client'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { reducer } from './reducer'
import { GlobalStyle } from './GlobalStyle'
import { App } from './App'

const store = createStore(
  reducer,
  undefined,
  process.env.NODE_ENV === 'development'
    ? window.__REDUX_DEVTOOLS_EXTENSION__?.()
    : undefined,
)

const container = document.getElementById('app')
if (container) {
  const root = createRoot(container)
  root.render(
  <Provider store={store}>
    <GlobalStyle />
    <App />
  </Provider>
  )
}
