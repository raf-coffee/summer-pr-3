import { useState } from "react";
import { useSearch } from "./useSearch";

function App() {
  const [searchValue, setSearchValue] = useState("");
  const data = useSearch(searchValue);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  return (
    <main className="max-w-7xl mx-auto flex flex-col items-center min-h-dvh">
      <div className="w-full">
        <label htmlFor="street-address" className="sr-only">
          Поиск сотрудника
        </label>
        <div className="mt-2">
          <input
            value={searchValue}
            type="text"
            name="street-address"
            id="street-address"
            placeholder="Поиск сотрудника"
            onChange={handleSearchChange}
            className="block mx-auto w-[544px] rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
      </div>
      {data.length > 0 ? (
        <ul
          role="list"
          className="divide-y divide-gray-100 bg-white border-2 border-slate-600 p-4 rounded-md my-10"
        >
          {data.map((person) => (
            <li
              key={person.email}
              className="flex justify-between gap-x-6 py-5"
            >
              <div className="flex min-w-0 gap-x-4">
                <img
                  className="h-12 w-12 flex-none rounded-full bg-gray-50"
                  src={person.avatar}
                  alt=""
                />
                <div className="min-w-0 flex-auto">
                  <p className="text-sm font-semibold leading-6 text-gray-900">
                    {person.firstName} {person.lastName}
                  </p>
                  <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                    {person.email}
                  </p>
                </div>
              </div>
              <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                <p className="text-sm leading-6 text-gray-900">
                  {person.jobTitle}
                </p>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p className="bg-white border-2 border-slate-600 p-4 rounded-md my-10 w-[544px]">
          Ничего не найдено
        </p>
      )}
    </main>
  );
}
export default App;
