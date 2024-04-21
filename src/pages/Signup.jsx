import { useForm } from "react-hook-form";
import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const navigate = useNavigate();
  const { register, handleSubmit, reset } = useForm();

  const { signup } = useAuth();

  async function onSubmit(data) {
    signup({
      username: data.username,
      age: data.age,
      weight: data.weight,
      email: data.email,
      password: data.password,
    });
    reset();
  }

  async function toLogin() {
    navigate("/login");
  }

  return (
    <>
      <div className="h-screen bg-black  flex justify-center items-center">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col w-3/4 gap-2 pb-6 text-slate-300"
        >
          <h1 className="text-center text-3xl font-bold mb-4">Sign up</h1>
          <input
            className="border border-grey-400 bg-transparent rounded-3xl px-4 py-3 my-1"
            {...register("username")}
            type="text"
            placeholder="Name"
            required
          />
          <div>
            <input
              className="border border-grey-400 bg-transparent rounded-3xl px-4 py-3 my-1 mr-2"
              {...register("age")}
              type="number"
              min="0"
              placeholder="Age"
              required
            />
            <input
              className="border border-grey-400 bg-transparent rounded-3xl px-4 py-3 my-1 mr-2"
              {...register("weight")}
              type="number"
              step="0.1"
              min="0"
              placeholder="Weight"
              required
            />
            <input
              className="border border-grey-400 bg-transparent rounded-3xl px-4 py-3 my-1 "
              {...register("height")}
              type="number"
              step="0.1"
              min="0"
              placeholder="Height"
              required
            />
          </div>

          <input
            className="border border-grey-400 bg-transparent rounded-3xl px-4 py-3 my-1"
            {...register("email")}
            type="text"
            placeholder="Email"
            required
          />
          <input
            className="border border-grey-400 bg-transparent rounded-3xl px-4 py-3 mt-1"
            {...register("password")}
            type="password"
            placeholder="Password"
            required
          />
          <div className=" flex flex-row-reverse">
            <p className="text-sm text-slate-400">Forgot Password?</p>
          </div>
          <button
            className=" bg-cyan-700 text-white rounded-3xl px-4 py-3 mt-2"
            type="submit"
          >
            Let&apos;s start!
          </button>
          <a
            href=""
            className="text-md text-cyan-500 m-auto"
            onClick={handleSubmit(toLogin)}
          >
            Already have an account? Login now!
          </a>
        </form>
      </div>
    </>
  );
}
