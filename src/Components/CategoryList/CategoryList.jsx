import account from "../../assets/icons/accounts.png";
import creative from "../../assets/icons/creative.png";
import marketing from "../../assets/icons/marketing.png";
import chip from "../../assets/icons/chip.png";
const CategoryList = () => {
  return (
    <div className="mt-[200px] mb-[100px]">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-[#1A1919]">Job Category List</h1>
        <p className="text-[#757575] mt-3">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div className="mt-20 grid grid-cols md:grid-cols-4 gap-4 m-4">
        <div className="card w-72 bg-base-100 shadow-xl">
          <div className="card-body">
            <div className="w-[80px]">
              <img className="w-full" src={account} alt="" />
            </div>
            <div className="card-actions justify-start">
              <h2 className="card-title">Account & Finance</h2>
              <p>300 Jobs Available</p>
            </div>
          </div>
        </div>
        {/* card2 */}
        <div className="card w-72 bg-base-100 shadow-xl">
          <div className="card-body">
            <div className="w-[80px]">
              <img className="w-full" src={creative} alt="" />
            </div>
            <div className="card-actions justify-start">
              <h2 className="card-title">Creative Design</h2>
              <p>100+ Jobs Available</p>
            </div>
          </div>
        </div>
         {/* card3 */}
        <div className="card w-72 bg-base-100 shadow-xl">
          <div className="card-body">
            <div className="w-[80px]">
              <img className="w-full" src={marketing} alt="" />
            </div>
            <div className="card-actions justify-start">
              <h2 className="card-title">Marketing & Sales</h2>
              <p>150 Jobs Available</p>
            </div>
          </div>
        </div>
         {/* card4 */}
        <div className="card w-72 bg-base-100 shadow-xl">
          <div className="card-body">
            <div className="w-[80px]">
              <img className="w-full" src={chip} alt="" />
            </div>
            <div className="card-actions justify-start">
              <h2 className="card-title">Engineering Job</h2>
              <p>224 Jobs Available</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryList;
