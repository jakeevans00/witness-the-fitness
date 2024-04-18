import { createContext, useContext, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "./useLocalStorage";
import pb from "../lib/pocketbase";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useLocalStorage("user", null);
  const [isLoading, setLoading] = useState(false);
  const [dummy, setDummy] = useState(false);

  const navigate = useNavigate();

  // call this function when you want to authenticate the user
  async function login({ email, password }) {
    setLoading(true);

    try {
      const authData = await pb
        .collection("users")
        .authWithPassword(email, password);
      setUser(authData);
      console.log(authData);
    } catch (error) {
      alert(error);
    }
    setLoading(false);
  }

  // call this function to sign out logged in user
  const logout = () => {
    pb.authStore.clear();
    setDummy(!dummy);
    navigate("/login");
  };

  const value = useMemo(
    () => ({
      user,
      login,
      logout,
    }),
    [user]
  );
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};
