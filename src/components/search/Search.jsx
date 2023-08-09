import { useEffect } from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import SearchComponent from "./SearchComponent";

const Search = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const searchTerm = searchParams.get("searchTerm");
  console.log("Search Term:", searchTerm);

  const [data, setData] = useState([]);
  console.log("book data ", data);
  useEffect(() => {
    fetch(`http://localhost:5000/search/${searchTerm}`)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [searchTerm]);

  return (
    <div className="px-8 my-8">
      <div className="border border-slate-700 py-6 px-8">
        <div className="md:grid grid-cols-4 gap-8 ">
          {data.map((bookPopular) => (
            <SearchComponent
              key={bookPopular._id}
              bookPopular={bookPopular}
            ></SearchComponent>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Search;
