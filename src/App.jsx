import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";

import { ProtectedRoute } from "./components/ProtectedRoute";
import { AuthProvider } from "./hooks/useAuth";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        >
          <Route path="overview" element={<h1>Home</h1>} />
          <Route path="workout" element={<h1>Workout</h1>} />
          <Route path="progress" element={<h1>Progress</h1>} />
        </Route>
      </Routes>
    </AuthProvider>
  );
}

export default App;
