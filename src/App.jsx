import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AuthProvider, HomeProvider } from "./store/providers";
import { Login, Registration, Dashboard } from "./pages";

function App() {
  return (
    <Router>
      <AuthProvider>
        <HomeProvider>
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/cadastro" component={Registration} />
            <Route path="/" exact component={Dashboard} />
          </Switch>
        </HomeProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;
