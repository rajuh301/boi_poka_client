import { useState } from "react";
import CategoryComponent from "../../route-category-components/CategoryComponent";
import { useEffect } from "react";

const IslamicBook = () => {
  const [catergory, setCategory] = useState([]);
  const [seeMore, setseeMore] = useState(6);

  const loadMore = () => {
    setseeMore((prev) => prev + 6);
  };
  useEffect(() => {
    fetch("https://boi-poka-server-chi.vercel.app/bookpost")
      .then((res) => res.json())
      .then((data) => {
        const popular = data.filter(
          (books) => books.category_1 === "মোটিভেশনাল"
        );
        setCategory(popular);
      });
  }, []);
  return (
    <div className="px-8 my-8">
      <h1 className="text-center text-3xl mt-8 mb-8">মোটিভেশনাল বই</h1>
      <div className="border border-slate-700 py-6 px-8">
        <div className="md:grid grid-cols-4 gap-8 ">
          {catergory.slice(0, seeMore).map((bookPopular) => (
            <CategoryComponent
              key={bookPopular._id}
              bookPopular={bookPopular}
            ></CategoryComponent>
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

export default IslamicBook;
