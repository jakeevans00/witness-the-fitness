import { useState } from "react";
import pb from "../lib/pocketbase";

export default function useLogin() {
  const [isLoading, setLoading] = useState(false);

  async function login({ email, password }) {
    setLoading(true);

    try {
      const authData = await pb
        .collection("users")
        .authWithPassword(email, password);
      console.log(authData);
    } catch (error) {
      alert(error);
    }
    setLoading(false);
  }

  return { login, isLoading };
}
