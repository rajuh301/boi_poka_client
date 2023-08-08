import { useEffect, useState } from "react";
import PopularWriters from "../../writers/PopularWriters";
import SectionTitle from "../../shaired/sectionTitle/SectionTitle";

const PopularWriterSection = () => {
  const [catergory, setCategory] = useState([]);
  const [seeMore, setseeMore] = useState(6);

  const loadMore = () => {
    setseeMore((prev) => prev + 4);
  };
  useEffect(() => {
    fetch("http://localhost:5000/writer")
      .then((res) => res.json())
      .then((data) => {
        const popular = data.filter(
          (writers) => writers.category === "জনপ্ৰিয়"
        );
        setCategory(popular);
      });
  }, []);
  return (
    <div className="px-8">
      <SectionTitle heading="জনপ্রিয় লেখক"></SectionTitle>
      <div className="border border-slate-700 py-6 px-8">
        <div className="grid md:grid-cols-6 gap-8 ">
          {catergory.slice(0, seeMore).map((writerPopular) => (
            <PopularWriters
              key={writerPopular._id}
              PopularWriters={writerPopular}
            ></PopularWriters>
          ))}
        </div>
        <div className="w-32 ms-auto text-center mt-8">
          <button
            onClick={loadMore}
            className="text-center font-bold text-blue-400 text-lg "
          >
            {" "}
            See More..
          </button>
        </div>
      </div>
    </div>
  );
};

export default PopularWriterSection;
