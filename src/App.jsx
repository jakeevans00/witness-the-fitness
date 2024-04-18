import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";

import { ProtectedRoute } from "./components/ProtectedRoute";
import { AuthProvider } from "./hooks/useAuth";
import Dashboard from "./pages/Dashboard";
import Overview from "./pages/Overview";
import Workout from "./pages/Workout";
import Progress from "./pages/Progress";

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
          <Route path="overview" element={<Overview />} />
          <Route path="workout" element={<Workout />} />
          <Route path=":workoutId" element={<h1>Workout Details</h1>} />
          <Route path="progress" element={<Progress />} />
          <Route path="meals" element={<h1>Meals... to be continued 🍔</h1>} />
        </Route>
      </Routes>
    </AuthProvider>
  );
}

export default App;
