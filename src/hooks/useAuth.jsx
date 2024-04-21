import { createContext, useContext, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "./useLocalStorage";
import pb from "../lib/pocketbase";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useLocalStorage("user", null);
  const [, setLoading] = useState(false);
  const [dummy, setDummy] = useState(false);

  const navigate = useNavigate();

  async function login({ email, password }) {
    setLoading(true);
    console.log("called login");

    try {
      const authData = await pb
        .collection("users")
        .authWithPassword(email, password);
      setUser(authData);
      navigate("/");
    } catch (error) {
      alert(error);
    }
    setLoading(false);
  }

  async function signup({ username, age, weight, email, password }) {
    setLoading(true);
    console.log("in signup");
    console.log(username, age, weight, email, password);
    try {
      const user = await pb.collection("users").create({
        username,
        age,
        weight,
        email,
        emailVisibility: true,
        password,
        passwordConfirm: password,
      });
      try {
        const authData = await pb
          .collection("users")
          .authWithPassword(email, password);
        setUser(authData);
      } catch (error) {
        alert(error);
      }
      navigate("/");
    } catch (error) {
      alert(error);
    }
    setLoading(false);
  }

  const logout = () => {
    pb.authStore.clear();
    setDummy(!dummy);
    navigate("/login");
  };

  const value = useMemo(
    () => ({
      user,
      login,
      signup,
      logout,
    }),
    [user]
  );
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};
