import { FaArrowRight } from "react-icons/fa";
import { datacontent } from "../constants";
import Button from "./Button";

const DataVisual = () => {
  return (
    <div className="flex flex-col items-center justify-start gap-12 w-full h-screen py-44">
      <div className="flex flex-col items-center max-w-[80vw] gap-4  ">
        <h1 className="font-bold text-[3rem]">
          Go with data,{" "}
          <span className=" text-transparent bg-clip-text bg-gradient-to-l to-blue-500 via-purple-500 via-fuchsia-500 from-yellow-400">
            not gut
          </span>{" "}
        </h1>
        <p className="text-center w-full text-xl">
          Maximize your team’s performance with data-backed decisions from our
          incentive compensation management software. Use insightful data to
          understand and improve the outcome of your sales compensation plans.
        </p>
      </div>
      <div className="flex justify-around items-center px-24 ">
        {datacontent.map((item) => (
          <div
            className="flex flex-col items-center justify-center gap-4 w-fit"
            key={item.id}
          >
            <div className="">
              <img src={item.imgUrl} alt="" />
            </div>
            <div className="text-center flex flex-col gap-2 leading-2 items-center p-4">
              <h1 className="text-3xl font-semibold">{item.title}</h1>
              <p className="px-12 text-zinc-400">
                <span className="tracking-wider text-center">
                  {item.description}
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
        <Button
          title="Explore Salse Incentive Software"
          classname="text-center flex  items-center gap-2 px-6 py-2 bg-[#625AFA] text-white"
          icon={<FaArrowRight />}
        />
    </div>
  );
}

export default DataVisual