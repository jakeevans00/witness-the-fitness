export default function FoodTable() {
  return (
    <div className="relative overflow-scroll rounded-xl">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 ">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Food
            </th>
            <th scope="col" className="px-6 py-3">
              Meal
            </th>
            <th scope="col" className="px-6 py-3">
              Calories
            </th>
            <th scope="col" className="hidden md:block px-6 py-3">
              Protein
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              Spaghetti & Meatballs
            </th>
            <td className="px-6 py-4">Dinner</td>
            <td className="px-6 py-4">560</td>
            <td className="px-6 py-4 hidden md:block">8g</td>
          </tr>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              Caesar Salad
            </th>
            <td className="px-6 py-4">Lunch</td>
            <td className="px-6 py-4">320</td>
            <td className="px-6 py-4 hidden md:block">6g</td>
          </tr>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              Grilled Chicken Breast
            </th>
            <td className="px-6 py-4">Dinner</td>
            <td className="px-6 py-4">240</td>
            <td className="px-6 py-4 hidden md:block">2g</td>
          </tr>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              Avocado Toast
            </th>
            <td className="px-6 py-4">Breakfast</td>
            <td className="px-6 py-4">400</td>
            <td className="px-6 py-4 hidden md:block">12g</td>
          </tr>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              Veggie Stir Fry
            </th>
            <td className="px-6 py-4">Dinner</td>
            <td className="px-6 py-4">350</td>
            <td className="px-6 py-4 hidden md:block">6g</td>
          </tr>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              Greek Salad
            </th>
            <td className="px-6 py-4">Lunch</td>
            <td className="px-6 py-4">200</td>
            <td className="px-6 py-4 hidden md:block">4g</td>
          </tr>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              Salmon Fillet
            </th>
            <td className="px-6 py-4">Dinner</td>
            <td className="px-6 py-4">300</td>
            <td className="px-6 py-4 hidden md:block">15g</td>
          </tr>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              Fruit Smoothie
            </th>
            <td className="px-6 py-4">Snack</td>
            <td className="px-6 py-4">150</td>
            <td className="px-6 py-4 hidden md:block">3g</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
