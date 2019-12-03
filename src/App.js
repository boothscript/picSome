import React from 'react';
import { Switch, Route } from 'react-router-dom'

import { ContextProvider } from './context'
import Photos from './pages/Photos'
import Cart from './pages/Cart'
import Navbar from './componenets/Navbar';
import './styles.css'
function App() {
  return (
    <ContextProvider>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Photos />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
      </Switch>
    </ContextProvider>
  )
}

export default App;
