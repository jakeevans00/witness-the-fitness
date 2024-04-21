import pb from "../lib/pocketbase";
import { useForm } from "react-hook-form";
import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";

export default function Auth() {
  const navigate = useNavigate();
  const { register, handleSubmit, reset } = useForm();

  const { login } = useAuth();

  const isLoggedin = pb.authStore.isValid;
  console.log(isLoggedin);

  async function onSubmit(data) {
    login({ email: data.email, password: data.password });
    reset();
  }

  async function signup() {
    navigate("/signup");
  }

  return (
    <>
      <div className="h-screen login-bg  flex justify-center items-center">
        <form
          onSubmit={handleSubmit(onSubmit)}
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
            className=" bg-cyan-700 text-white rounded-3xl px-4 py-3 mt-2"
            type="submit"
          >
            Login
          </button>
          <a
            href=""
            className="text-md text-cyan-500 m-auto"
            onClick={handleSubmit(signup)}
          >
            New around here? Sign up now!
          </a>
        </form>
      </div>
    </>
  );
}
