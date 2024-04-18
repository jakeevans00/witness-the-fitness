import Schedule from "../components/Schedule";
import Goals from "../components/Goals";
import FoodTable from "../components/FoodTable";

export default function Overview() {
  return (
    <>
      <div className="flex gap-6">
        <div className="flex flex-col w-2/3 gap-4">
          <div className="pl-4 pr-14 py-4 rounded-xl bg-gradient-to-r from-orange-500 to-orange-200 text-white">
            <h1 className="font-bold text-3xl my-2">
              Track your daily activity
            </h1>
            <p>
              From short-burst gym workouts to scenic hikes and everything in
              between. This is your one stop fitness shop for visualizing your
              progress, tracking weight/diet, and powering up through
              professionally curated workouts.{" "}
            </p>
          </div>
          <div className="flex gap-4 h-48">
            <div className="bg-indigo-500 w-full rounded-xl py-4 px-6 text-white">
              <h5 className="font-bold">Workout</h5>
            </div>
            <div className="bg-cyan-500 w-full rounded-xl py-4 px-6 text-white">
              <h5 className="font-bold">Calories</h5>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex justify-between ">
              <h1 className="inline text-xl text-gray-700">Daily Macros</h1>
              <button className="bg-orange-500 py-1 px-2 rounded-lg text-white">
                Add Meal
              </button>
            </div>
            <FoodTable />
          </div>
        </div>
        <div className="w-1/3 flex flex-col gap-6">
          <Schedule />
          <Goals />
        </div>
      </div>
    </>
  );
}
