import { useEffect, useState } from "react";
import SearchInput from "./components/SearchInput";
import Banner from "./components/Banner";
import useFetch from "./custom_hooks/useFetch";
import ErrorMessage from "./components/ErrorMessage";
import Spinner from "./components/Spinner";
import { apiKey } from "./ulilities/secret";
import { isIP } from "./ulilities/utilityFunctions";
import type { Data } from "./types/types";
import MapComponent from "./components/MapComponent";

function App() {
  const [searchWord, setSearchWord] = useState("");
  useEffect(() => {
    document.title = "IP Address Tracker";
  }, []);
  let url;

  if (searchWord === "") {
    url = `https://geo.ipify.org/api/v2/country,city?apiKey=${apiKey}`;
  } else if (isIP(searchWord)) {
    url = `https://geo.ipify.org/api/v2/country,city?apiKey=${apiKey}&ipAddress=${searchWord}`;
  } else {
    url = `https://geo.ipify.org/api/v2/country,city?apiKey=${apiKey}&domain=${searchWord}`;
  }

  const { data, isLoading, error } = useFetch<Data>(url);

  if (error) {
    return <ErrorMessage errorMessage={error.message} />;
  }

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <main className="m-2 h-screen text-[14px] sm:text-base">
      <header className="h-[30%] min-h-[200px] bg-[url('./assets/pattern-bg-mobile.png')] bg-no-repeat bg-cover sm:bg-[url('./assets/pattern-bg-desktop.png')] sm:h-[25%]">
        <h1 className="text-2xl sm:text-3xl text-white font-bold text-center pt-3">IP Address Tracker</h1>
        <SearchInput searchFor={setSearchWord} />
      </header>
      <Banner ip={data?.ip} location={data?.location} isp={data?.isp}/>
      {data?.location && <MapComponent lat={Number(data?.location.lat)} lng={Number(data?.location.lng)}/>}
    </main>
  );
}

export default App;
