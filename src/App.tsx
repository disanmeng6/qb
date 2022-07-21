import React, { Suspense } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes";
function App() {
  return (
    <Router>
      <Suspense>
        <Routes></Routes>
      </Suspense>
    </Router>
  );
}

export default App;
