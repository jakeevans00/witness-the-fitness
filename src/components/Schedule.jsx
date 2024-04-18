export default function Schedule() {
  return (
    <>
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl text-gray-800">My Schedule</h2>
          <a href="" className="text-orange-500">
            View All
          </a>
        </div>
        <div className="bg-white py-4 px-6 rounded-xl">
          <h6 className="text-gray-700 text-lg">Monday</h6>
          <p className="inline pr-2 text-gray-500">Workout: 8:00 AM</p>
          <span className="bg-orange-100 text-orange-500 rounded-xl py-1 px-2">
            1 Hour
          </span>
        </div>
        <div className="bg-white py-4 px-6 rounded-xl">
          <h6 className="text-gray-700 text-lg">Tuesday</h6>
          <p className="inline pr-2 text-gray-500">Workout: 8:00 AM</p>
          <span className="bg-orange-100 text-orange-500 rounded-xl py-1 px-2">
            1 Hour
          </span>
        </div>
        <div className="bg-white py-4 px-6 rounded-xl">
          <h6 className="text-gray-700 text-lg">Wednesday</h6>
          <p className="inline pr-2 text-gray-500">Workout: 8:00 AM</p>
          <span className="bg-orange-100 text-orange-500 rounded-xl py-1 px-2">
            1 Hour
          </span>
        </div>
      </div>
    </>
  );
}
