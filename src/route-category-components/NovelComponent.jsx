const NovelComponent = ({ bookPopular }) => {
  const { bookImage, bookName, bookWriter, bookPrice } = bookPopular;
  return (
    <div className="card md:w-[200px] bg-base-100 mt-8 ">
      <img className="h-60 md:w-64" src={bookImage} alt="Shoes" />

      <p className="text-center text-[16px] font-bold">{bookName}</p>
      <p className="text-center text-[16px]">{bookWriter}</p>
      <p className="text-center text-[16px]">rating (42)</p>
      <p className="text-center text-[16px] text-[green]">Product in stock</p>
      <p className="text-center text-[16px]">
        <del> TK.120 </del>{" "}
        <span className="font-bold ms-2">TK.{bookPrice}</span>
      </p>
    </div>
  );
};

export default NovelComponent;
