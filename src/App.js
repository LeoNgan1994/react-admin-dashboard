import Home from "pages/home/Home";
import List from "pages/list/List";
import Login from "pages/login/Login";
import New from "pages/new/New";
import Single from "pages/single/Single";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.scss"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="users">
          <Route index element={<List />} />
          <Route path=":userId" element={<Single />} />
          <Route path="new" element={<New />} />
        </Route>
        <Route path="products">
          <Route index element={<List />} />
          <Route path=":productId" element={<Single />} />
          <Route path="new" element={<New />} />
        </Route>
        {/* <Route
          element={<ProtectedRoute isAllowed={!!user} children={undefined} />}
        >
          <Route path="movies" element={<Home type="movies" />} />
          <Route path="series" element={<Home type="series" />} />
        </Route> */}
        {/* <Route
          path="/watch"
          element={
            <ProtectedRoute isAllowed={!!user && user.roles.includes("admin")}>
              <Watch />
            </ProtectedRoute>
          }
        /> */}

        {/* <Route path="*" element={<NoMatch />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
