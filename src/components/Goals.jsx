export default function Goals() {
  return (
    <>
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl text-gray-800">Goals</h2>
          <a href="" className="text-orange-500">
            View All
          </a>
        </div>
        <div className="bg-white py-4 px-6 rounded-xl flex flex-col gap-2">
          <p className=" text-gray-500">Get an A on this project</p>
          <span className="w-min bg-green-100 text-green-500 rounded-xl py-1 px-2">
            Complete
          </span>
        </div>
        <div className="bg-white py-4 px-6 rounded-xl flex flex-col gap-2">
          <p className=" text-gray-500">Take wife on date</p>
          <span className="w-min bg-amber-100 text-amber-500 rounded-xl py-1 px-2">
            Planned
          </span>
        </div>
        <div className="bg-white py-4 px-6 rounded-xl flex flex-col gap-2">
          <p className=" text-gray-500">Learn Flutter</p>
          <span className="w-min bg-amber-100 text-amber-500 rounded-xl py-1 px-2">
            Planned
          </span>
        </div>
        <div className="bg-white py-4 px-6 rounded-xl flex flex-col gap-2">
          <p className=" text-gray-500">Climb 5.13a</p>
          <span className="w-fit bg-blue-100 text-blue-500 rounded-xl py-1 px-2">
            In Progress
          </span>
        </div>
      </div>
    </>
  );
}
