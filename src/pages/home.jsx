import Banner from "../assets/images/banner.png";
import ProteinCard from "../components/proteinCard";
import Graph from "../assets/images/graph.png";
import CategoryCard from "../components/categoryCard";
import TopCard from "../components/topCard";
import AboutBanner from "../assets/images/about-banner.png";
import { useEffect, useState } from "react";
import Chart from "../components/chart";
const Home = () => {
  const [debouncedCategory, setDebouncedCategory] = useState("");
  const [category, setCategory] = useState("");
  const [timeRange, setTimeRange] = useState("12");
  const protein = [
    {
      color: "red",
      count: 1,
    },
    {
      color: "#C0C0C0",
      count: 2,
    },
    {
      color: "#CD7F32",
      count: 3,
    },
  ];
  const Topcard = [
    {
      color: "red",
      count: 1,
    },
    {
      color: "#C0C0C0",
      count: 2,
    },
    {
      color: "#CD7F32",
      count: 3,
    },
  ];
  const categoryList = [
    {
      title: "Protein Powder",
    },
    {
      title: "Creatine",
    },
    {
      title: "fish oil",
    },
    {
      title: "pre-workout",
    },
    {
      title: "electrolytes",
    },
    {
      title: "supplement name",
    },
    {
      title: "supplement name",
    },
    {
      title: "supplement name",
    },
    {
      title: "supplement name",
    },
    {
      title: "supplement name",
    },
  ];

  const filterCategory = categoryList.filter((item) => {
    return item.title.toLowerCase().includes(debouncedCategory.toLowerCase());
  });
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedCategory(category);
    }, 1000);

    return () => {
      clearTimeout(handler);
    };
  }, [category]);

  return (
    <>
      {/* banner section */}
      <section className="banner-section px-3 sm:px-0 pt-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center justify-between gap-10 lg:gap-20">
          <div className="order-2 lg:order-1 text-center lg:text-start">
            <h1 className="font-bold text-4xl sm:text-5xl md:text-6xl lg:text-4xl xl:text-6xl">
              Never Fall For{" "}
              <span style={{ color: "#003BFE" }}>Supplement</span> Marketing
              Again.
            </h1>
            <p className="py-8">
              Lorem ipsum is a major key to success. Wraith talk. Learning is
              cool, but knowing is better, & I know key to success.
            </p>
            <button className="text-white  bg-primary  font-medium rounded-full text-sm px-4 lg:px-5 py-2 lg:py-3 ">
              Get started
            </button>
          </div>
          <div className="banner-img mx-auto lg:ms-auto order-1 lg:order-2">
            <img src={Banner} className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* top whey protein section */}
      <section className="whey-section px-3 sm:px-0 pt-10">
        <div className="bg-white border rounded-3xl p-5 text-center">
          <h3 className="text-4xl font-bold my-6">Top Whey Proteins</h3>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <h5 className="font-bold">SORT BY:</h5>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="text-primary border border-dashed border-primary rounded-full py-2.5 px-4">
                Value Ranking
              </button>
              <button className="text-gray-600 hover:text-primary border border-dashed border-gray-700 hover:border-primary rounded-full py-2.5 px-4">
                Most Serving
              </button>
              <button className="text-gray-600 hover:text-primary border border-dashed border-gray-700 hover:border-primary rounded-full py-2.5 px-4">
                Best Flavors
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-10">
            {protein.map((res, i) => (
              <ProteinCard key={i} count={res.count} color={res.color} />
            ))}
            <div className="protein-card border-2 flex justify-center items-center rounded-3xl p-5 text-center border-primary">
              <h5 className="text-lg text-primary font-semibold">
                See all ranking
              </h5>
            </div>
          </div>
        </div>
      </section>

      {/* graph section */}
      <section className="px-3 sm:px-0 pt-10">
        <div
          className="rounded-2xl border-2 bg-white"
          style={{ borderColor: "#E3F5FF" }}
        >
          <div
            className="flex flex-wrap justify-between items-center p-4 border-b"
            style={{ borderColor: "#E3F5FF" }}
          >
            <div className="flex gap-6 items-center">
              <h5 className="font-semibold text-lg">Whey Protein Statistics</h5>
              <p className="text-primary text-xs">Avg. Selling price per kg</p>
            </div>
            <div className="relative ">
              <select
                value={timeRange}
                onChange={(e) => setTimeRange(e.target.value)}
                className="text-primary outline-none text-nowrap flex items-center gap-2 font-semibold text-xs border border-dashed border-primary rounded-full py-2 px-4 bg-white appearance-none pr-10"
              >
                <option value="12">12 Months</option>
                <option value="6">6 Months</option>
                <option value="1">1 Month</option>
              </select>
              <svg
                className="w-4 h-4 text-primary absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M7 10l5 5 5-5H7z" />
              </svg>
            </div>
          </div>
          <div className="p-10">
            <Chart timeRange={timeRange} />
          </div>
        </div>
      </section>

      {/* supplement category section */}
      <section className="px-3 sm:px-0 pt-20">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center border rounded-full border-primary overflow-hidden shadow-lg mb-5">
            <input
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              type="text"
              placeholder="Search for any supplement"
              className="px-7 py-3 w-full border-none focus:outline-none"
            />
            <button className="p-2 me-3 rounded-full">
              <svg
                className="w-4 h-4 text-primary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-4.35-4.35M9 16a7 7 0 100-14 7 7 0 000 14z"
                />
              </svg>
            </button>
          </div>
          <div className="flex gap-3 items-center">
            <p className="text-sm text-primary text-nowrap">Quick links:</p>
            <div className="flex flex-wrap lg:flex-nowrap gap-2">
              <button className="border text-xs text-gray-500 border-gray-300 py-1.5 px-3 rounded-full text-nowrap">
                creatine
              </button>
              <button className="border text-xs text-gray-500 border-gray-300 py-1.5 px-3 rounded-full text-nowrap">
                pump workout
              </button>
              <button className="border text-xs text-gray-500 border-gray-300 py-1.5 px-3 rounded-full text-nowrap">
                best value protein
              </button>
              <button className="border text-xs text-gray-500 border-gray-300 py-1.5 px-3 rounded-full text-nowrap">
                fish oil
              </button>
              <button className="border text-xs text-gray-500 border-gray-300 py-1.5 px-3 rounded-full text-nowrap">
                pre workout
              </button>
              <button className="border text-xs text-gray-500 border-gray-300 py-1.5 px-3 rounded-full text-nowrap">
                chocolate flavour protein
              </button>
            </div>
          </div>
        </div>
        <h3 className="text-4xl font-bold mt-6 mb-5 text-center">
          All <span className="text-primary">Supplement</span> categories
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {filterCategory.map((res, i) => (
            <CategoryCard key={i} title={res.title.toUpperCase()} />
          ))}
        </div>
      </section>

      {/* top product section */}
      <section className="px-3 sm:px-0 pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          <div>
            <h4 className="text-2xl font-bold mb-4">TOP PRE-WORKOUT</h4>
            {Topcard.map((res, i) => (
              <div className="mb-3">
                <TopCard key={i} color={res.color} count={res.count} />
              </div>
            ))}
          </div>
          <div>
            <h4 className="text-2xl font-bold mb-4">TOP CREATINE</h4>
            {Topcard.map((res, i) => (
              <div className="mb-3">
                <TopCard key={i} color={res.color} count={res.count} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* about section */}
      <section className=" my-20 about-section rounded-3xl flex justify-center items-center">
        <div className="grid items-center grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="p-20 lg:ps-20 order-2 lg:order-1 text-center lg:text-start">
            <h2 className="font-bold  sm:text-2xl md:text-4xl lg:text-5xl xl:text-5xl text-wrap xl:text-nowrap">
              ABOUT SUPPMETRICS
            </h2>
            <p
              className="text-md font-extralight my-6"
              style={{ color: "#333333" }}
            >
              Lorem Khaled Ipsum is a major key to success. Let me be clear, you
              have to make it through the jungle to make it to Paradise, that’s
              the key, Lion! Life is what you make it.
            </p>
            <button className="text-white  bg-primary font-medium rounded-full text-sm px-4 lg:px-5 py-2 lg:py-4">
              Discover more about us
            </button>
          </div>
          <div className="about-banner mx-auto lg:ms-auto order-1 lg:order-2 ">
            <img
              src={AboutBanner}
              alt="img"
              className="h-full w-full rounded-t-3xl"
            />
          </div>
        </div>
      </section>
    </>
  );
};
export default Home;
