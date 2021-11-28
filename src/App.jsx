import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AuthProvider } from "./store/providers";
import { Login } from "./pages";

function App() {
  return (
    <Router>
      <Switch>
        <AuthProvider>
          <Route path="/login" component={Login} />
        </AuthProvider>
      </Switch>
    </Router>
  );
}

export default App;
