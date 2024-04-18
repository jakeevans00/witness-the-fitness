import { Link } from "react-router-dom";

export default function Workout() {
  return (
    <>
      <div>
        <div className="flex flex-col gap-8">
          <div>
            <h1 className="text-xl font-black text-gray-600">
              Recently Completed
            </h1>
            <p>Pick up where you left off</p>
          </div>
          <div className="flex gap-4">
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                <img className="rounded-t-lg" src="/climb2.jpg" alt="" />
              </a>
              <div className="p-5">
                <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Climbing - Endurance
                  </h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Circuits on mid-range boulders, followed by a set of 4x4s on
                  moonboard.
                </p>
              </div>
            </div>
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                <img className="rounded-t-lg" src="/lift.jpg" alt="" />
              </a>
              <div className="p-5">
                <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Shoulders + Chest
                  </h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Push day, with an empahsis on deltoids and upper chest.
                </p>
              </div>
            </div>
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                <img className="rounded-t-lg" src="/bike.jpg" alt="" />
              </a>
              <div className="p-5">
                <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Mountain Biking
                  </h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Couple laps around Corner Canyon
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <Link
              to="/dashboard/1"
              className="cursor-pointer bg-gradient-to-r from-orange-500 to-red-300 rounded-xl py-8 px-6 text-white w-1/3 text-center font-bold"
            >
              Start a Workout
            </Link>
          </div>
          <div className="flex">
            <div className="w-1/2">
              <h1 className="text-xl font-black text-gray-600">
                Popular Workouts
              </h1>
              <p>Get started with these professionally curated workouts</p>
              <div></div>
            </div>
            <div className="w-1/2">
              <h1 className="text-xl font-black text-gray-600">
                Or Create Your Own
              </h1>
              <p>Choose your target, time, and get after it</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
