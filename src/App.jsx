import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AuthProvider } from "./store/providers";
import { Login, Registration } from "./pages";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/cadastro" component={Registration} />
        </Switch>
      </AuthProvider>
    </Router>
  );
}

export default App;
