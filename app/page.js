import { getTime, format } from "date-fns";

export default function Home() {
  const unixTime = getTime(new Date());
  const getDay = format(unixTime, "EEEE, LLLL do, yyyy");

  return (
    <main>
      <div className="flex justify-center">
        <h1 className=" bg-neutral-900 p-2 rounded-md text-white text-center text-2xl">
          {getDay}
        </h1>
      </div>
      <div className="flex justify-center mt-5">
        <div className="bg-blue-400 p-3 rounded-md">
          <div className="flex text-xl justify-center text-center text-white">
            <p>Please enter in the location you would like to search.</p>
          </div>
          <div className="flex justify-center">
            <ul className="text-center text-white">
              <li>You can search just the city name ex. New Hampshire</li>
              <li>You can also be more specific ex. Dallas, TX USA</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
