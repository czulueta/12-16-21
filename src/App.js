import React, { useContext } from "react" 
import { Switch, Route, Redirect } from "react-router-dom"
import Navbar from "./components/Navbar.js"
import Auth from "./components/Auth.js"
import Profile from "./components/Profile.js"
import Public from "./components/Public.js"
import ProtectedRoute from "./components/ProtectedRoute.js"
import { UserContext } from "./context/UserProvider.js"

export default function App(){
  const { logout, token } = useContext(UserContext)
  return(
    <div>
      { token && <Navbar logout={logout}/>}
      <Switch>
        <Route 
          exact path="/"
          render={() => token ? <Redirect to="/profile" /> : <Auth />}
        />
        <ProtectedRoute
          paht="/profile"
          component={Profile}
          token={token}
          redirectTo="/" />
        <ProtectedRoute
          paht="/public"
          component={Public}
          token={token}
          redirectTo="/" />
      </Switch>
    </div>
  )
}