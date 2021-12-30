import "./scss/main.scss"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import Header from "./components/Header/Header"

import Home from "./pages/Home"
import MyAlbums from "./pages/MyAlbums"
import Error404 from "./pages/Error404"

function App(props) {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />

          <Route exact path="/birthday/:name">
            <Home {...props}/>
          </Route>

          <Route exact path="/my-albums" component={MyAlbums} />

          <Route path="*" component={Error404} />
        </Switch>
      </Router>
    </div>
  )
}

export default App
