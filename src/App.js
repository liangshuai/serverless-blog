import React from 'react'
import { Route, Switch } from 'react-router-dom'
import HomePage from './pages/HomePage'
import AddPage from './pages/AddPage'
import PostPage from './pages/PostPage'

export default function App() {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/add" component={AddPage} />
      <Route exact path="/post/:id" component={PostPage} />
    </Switch>
  )
}
