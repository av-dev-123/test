import TopImage from "../assets/images/protein.png";
const TopCard = ({ color, count }) => {
  return (
    <>
      <div
        className="border-2 rounded-full flex flex-col sm:flex-row gap-3 items-center justify-between p-4 px-5 top-card"
        style={{ borderColor: color }}
      >
        <div className="flex items-center gap-2">
          <div
            className="number flex justify-center items-center text-lg text-white"
            style={{ background: color }}
          >
            {count}
          </div>
          <div className="top-card-img">
            <img src={TopImage} alt="img" className="h-full w-full" />
          </div>
          <div>
            <p className="text-primary font-semibold mb-1">
              General Nutrition Centers
            </p>
            <p className="text-xs font-normal" style={{ color: "#666666" }}>
              GNC Pro Performance 100% Whey Protein
            </p>
          </div>
        </div>
        <div className="text-center">
          <p className="text-primary font-semibold mb-1">MRP: ₤51.30</p>
          <p className="text-xs font-normal" style={{ color: "#666666" }}>
            51 Servings
          </p>
        </div>
      </div>
    </>
  );
};
export default TopCard;
