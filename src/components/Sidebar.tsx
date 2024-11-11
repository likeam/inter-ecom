import { useEffect, useState } from "react";
import { useFilter } from "./FilterContext";

interface Product {
  category: string;
}

interface FeatchResponse {
  products: Product[];
}

const Sidebar = () => {
  const [categories, setCategories] = useState<string[]>([]);
  const [keywords] = useState<string[]>([
    "apple",
    "watch",
    "Fashion",
    "trend",
    "shoes",
    "shirt",
  ]);

  const {
    searchQuery,
    setSearchQuery,
    minPrice,
    setMinPrice,
    maxPrice,
    setMaxPrice,
    keyword,
    setKeyword,
    selectedCategory,
    setSelectedCategory,
  } = useFilter();

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch("https://dummyjson.com/products");
        const data: FeatchResponse = await response.json();
        const uniqeCategories = Array.from(
          new Set(data.products.map((product) => product.category))
        );
        setCategories(uniqeCategories);
      } catch (error) {
        console.error("Error fetching Product", error);
      }
    };

    fetchCategories();
  }, []);

  const handleMinPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setMinPrice(value ? parseFloat(value) : undefined);
  };

  const handleMaxPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setMaxPrice(value ? parseFloat(value) : undefined);
  };

  const handleRadioChangeCategories = (category: string) => {
    setSelectedCategory(category);
  };

  const handleKeywordClick = (keyword: string) => {
    setKeyword(keyword);
  };

  const handleResetFilters = () => {
    setSearchQuery("");
    setSelectedCategory("");
    setMinPrice(undefined);
    setMaxPrice(undefined);
    setKeyword("");
  };

  return (
    <div className=" w-64 p-5 h-screen bg-black text-white">
      <h1 className=" text-2xl font-bold mb-10 mt4 ">INTER STORE</h1>

      <section className="">
        <input
          type="text"
          className=" border-2 rounded px-2  sm:mb-0 text-black"
          placeholder="Search Product"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />

        <div className=" flex justify-center items-center mt-4 text-black">
          <input
            type="number"
            className=" border-2 mr-2 px-5 py-3 w-full"
            placeholder="Min"
            value={minPrice ?? ""}
            onChange={handleMinPriceChange}
          />
          <input
            type="text"
            className=" border-2 mr-2 px-5 py-3 w-full text-black "
            placeholder="Max"
            value={maxPrice ?? ""}
            onChange={handleMaxPriceChange}
          />
        </div>

        {/* Categories Section */}

        <section>
          <div className=" mb-5">
            <h2 className=" text-xl font-semibold mb-3">Categories</h2>
          </div>
          {categories.map((category, index) => (
            <label key={index} className=" block mb-2">
              <input
                type="radio"
                name="category"
                value={category}
                className=" mr-2 w-[16px] h-[16px]"
                onChange={() => handleRadioChangeCategories(category)}
                checked={selectedCategory === category}
              />
              {category.toUpperCase()}
            </label>
          ))}
        </section>

        {/* Keywords Section  */}

        <div className="mb-5 mt-4">
          <h2 className=" text-xl font-semibold mb-3">Keyword</h2>
          <div className="">
            {keywords.map((keyword, index) => (
              <button
                key={index}
                value={keyword}
                className=" block mb-2 px-4 py-2 w-full text-left border rounded hover:bg-gray-200 hover:text-black"
                onClick={() => handleKeywordClick(keyword)}
              >
                {keyword.toUpperCase()}
              </button>
            ))}
          </div>
        </div>

        <button
          className=" w-full mb-[4rem] py-2 bg-gray-800 text-white rounded mt-5"
          onClick={handleResetFilters}
        >
          Reset Filters
        </button>
      </section>
    </div>
  );
};

export default Sidebar;
