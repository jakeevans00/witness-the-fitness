import pb from "./lib/pocketbase";
import { useForm } from "react-hook-form";
import { useState } from "react";

export default function Auth() {
  const { register, handleSubmit } = useForm();
  const [isLoading, setLoading] = useState(false);
  const isLoggedin = pb.authStore.isValid;
  const [dummy, setDummy] = useState(false);

  async function login(data) {
    console.log(data);
    setLoading(true);

    try {
      const authData = await pb
        .collection("users")
        .authWithPassword(data.email, data.password);
      console.log(authData);
    } catch (error) {
      alert(error);
    }
    setLoading(false);
  }

  const logout = () => {
    pb.authStore.clear();
    setDummy(!dummy);
  };

  if (isLoggedin) {
    return (
      <>
        <h1 className="text-white">Logged in as: {pb.authStore.model.email}</h1>
        <button className="bg-cyan-500" onClick={logout}>
          Logout
        </button>
      </>
    );
  }
  return (
    <>
      <form
        onSubmit={handleSubmit(login)}
        className="flex flex-col w-3/4 gap-2 pb-6 text-slate-300"
      >
        <input
          className="border border-grey-400 bg-transparent rounded-3xl px-4 py-3 my-1"
          {...register("email")}
          type="text"
          placeholder="Email"
        />

        <input
          className="border border-grey-400 bg-transparent rounded-3xl px-4 py-3 mt-1"
          {...register("password")}
          type="password"
          placeholder="Password"
        />
        <div className=" flex flex-row-reverse">
          <p className="text-sm text-slate-400">Forgot Password?</p>
        </div>
        <button
          disabled={isLoading}
          className=" bg-cyan-700 text-white rounded-3xl px-4 py-3 mt-2"
          type="submit"
        >
          {isLoading ? "Loading" : "Login"}
        </button>
        <a href="" className="text-md text-cyan-500 m-auto">
          New around here? Sign up now!
        </a>
      </form>
    </>
  );
}
