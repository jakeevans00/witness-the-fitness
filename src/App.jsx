import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

import { ProtectedRoute } from "./components/ProtectedRoute";
import { AuthProvider } from "./hooks/useAuth";
import Dashboard from "./pages/Dashboard";
import Overview from "./pages/Overview";
import Workout from "./pages/Workout";
import Progress from "./pages/Progress";
import WorkoutForm from "./components/WorkoutForm";

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        >
          <Route path="" index element={<Overview />} />
          <Route path="workout" element={<Workout />} />
          <Route path=":workoutId" element={<WorkoutForm />} />
          <Route path="progress" element={<Progress />} />
          <Route path="meals" element={<h1>Meals... to be continued 🍔</h1>} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
