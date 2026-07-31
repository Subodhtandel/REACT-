import { Routes, Route, Navigate } from "react-router-dom";
import { Suspense, lazy } from "react";

const Login = lazy(() => import("./pages/Register"));
const Register = lazy(() => import("./pages/Register"));
const Watchlist = lazy(() => import("./pages/Watchlist"));

function App() {
  return (
    <Suspense fallback={<h2>Loading...</h2>}>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/watchlist" element={<Watchlist />} />
      </Routes>
    </Suspense>
  );
}

export default App;