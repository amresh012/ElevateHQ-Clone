import Button from "./Button";
import  {FaArrowRight} from "react-icons/fa"
const Features = () => {

 

  return (
    <>
      <div className="bg-slate-100  mt-24 flex  flex-col gap-12 items-center justify-start">
        <div className="mt-20 flex items-center flex-col">
          <span className="block text-xl lg:text-[3rem] font-bold">
            Why our customers love using our
          </span>
          <span className="block lg:text-[3rem] font-bold text-transparent bg-clip-text bg-gradient-to-l to-blue-500 via-purple-500 via-fuchsia-500 from-yellow-400">
            commission tracking software
          </span>
          <span className="mt-4 text-center px-4  lg:text-xl text-zinc-500">
            Here are three ways we make your quarter-ends less hectic:
          </span>
        </div>
        <div className="cards-wrapper flex flex-col lg:flex-row  gap-12 p-12 justify-center w-full h-full">
          <div className="card shadow-md shadow-black/20 max-w-[450px]  space-y-12 p-4 rounded-md">
            <div className="image">
              <img
                src="https://www.elevate.so/assets/images/high-flexibility.svg"
                alt="image"
              />
            </div>
            <div className="p-4 space-y-4">
              <h1 className="text-3xl font-medium">High flexibility</h1>
              <p className="text-thin ">
                <b> We adapt to your business</b>. With our incentive
                compensation management software, you can implement intricate
                commission plans tailored to your requirements.
              </p>
            </div>
          </div>
          {/*  */}
          <div className="card  shadow-md shadow-black/20 max-w-[440px] space-y-12 p-4  rounded-md">
            <div className="image">
              <img
                src="https://www.elevate.so/assets/images/fastest-implementation.svg"
                alt="image"
              />
            </div>
            <div className="p-4 space-y-4">
              <h1 className="text-3xl font-medium">Fastest implementation</h1>
              <p className="text-thin  ">
                We take less than <b>4</b> weeks to fully deploy. Yes, with all
                the integrations in place and commission plans set up. No
                disruptions to your operations.
              </p>
            </div>
          </div>
          {/*  */}
          <div className="card shadow-md shadow-black/20 max-w-[440px] space-y-12 p-4 rounded-md">
            <div className="image">
              <img
                src="https://www.elevate.so/assets/images/built-scalability.svg"
                alt="image"
              />
            </div>
            <div className="p-4 space-y-4">
              <h1 className="text-3xl font-medium">Built for scalability</h1>
              <p className="text-thin  ">
                Our platform is built to handle the complexities of your
                expanding sales team and <b> evolving commission structures</b>.
                We can support your growth every step of the way.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/*  */}
      <div className="space-y-14 py-24">
        <div className="mt-20 flex items-center flex-col">
          <span className="block text-xl lg:text-[3rem] font-bold">
            Automate calculations and
          </span>
          <p className=" lg:text-[3rem] font-bold">
            payouts with{" "}
            <span className=" text-transparent bg-clip-text bg-gradient-to-l to-blue-500 via-purple-500 via-fuchsia-500 from-yellow-400">
              zero fuss
            </span>
          </p>
          <span className="mt-4 text-center w-1/2  lg:text-xl text-zinc-500">
            Easy-to-use commission calculation software that lets you design any
            compensation plan and automate calculations. Never miss out on any
            calculation with real-time sync.
          </span>
        </div>
        <div className="flex justify-center items-start gap-12 px-12">
          <div className="bg-gradient-to-bl to-blue-400/20 from-fuchsia-300/20 to   w-1/2 h-full flex items-center justify-center pt-12">
            <img
              src="https://www.elevate.so/assets/images/easy-use.svg"
              alt=""
            />
          </div>
          <div className="flex flex-col w-1/2 justify-between gap-4 ">
            <div className=" h-[150px] flex hover:shadow-lg shadow-black/50 hover:border-l-8 border-blue-500 px-4 hover:scale-105 duration-300">
              <div className="w-full flex items-center justify-start gap-4">
                <img
                  src="https://www.elevate.so/assets/images/easy-designer.svg"
                  alt=""
                  className="w-16"
                />
                <div className="p-2  ">
                  <h1 className="text-[1.7rem] font-medium ">
                    Easy-to-use designer
                  </h1>
                  <p className="font-light w-full text-xs">
                    Custom fields in your CRM? No problem. Complex commission
                    workflow with multiple conditions? Walk in the park. All
                    courtesy of our intuitive sales incentive plan designer.
                  </p>
                </div>
              </div>
            </div>
            {/*  2*/}
            <div className="h-[150px] flex hover:shadow-lg shadow-black/50 hover:border-l-8 border-blue-500 px-4 hover:scale-105 duration-300">
              <div className="w-full flex items-center justify-start gap-4 ">
                <img
                  src="https://www.elevate.so/assets/images/easy-designer.svg"
                  alt=""
                  className="w-12"
                />
                <div className="p-2 ">
                  <h1 className="text-[1.7rem] font-medium ">
                    Seamless data connections
                  </h1>
                  <p className="font-light text-xs text-black">
                    One touch connection with all the tools you use. CRMs,
                    Invoicing, Accounting, Prospecting, Payroll, etc.
                  </p>
                </div>
              </div>
            </div>
            {/* 3 */}
            <div className="h-[150px] flex hover:shadow-lg shadow-black/50 hover:border-l-8 border-blue-500 px-4 hover:scale-105 duration-300">
              <div className=" flex items-center justify-start gap-4">
                <img
                  src="https://www.elevate.so/assets/images/easy-designer.svg"
                  alt=""
                  className="w-16"
                />
                <div className="p-2 cursor-pointer ">
                  <h1 className="text-[1.7rem] font-medium Peer">
                    Powerful rule engine
                  </h1>
                  <p className="font-light  text-xs text-black">
                    Customize incentive triggers, rules, and payout schedules
                    with our advanced sales incentive plan designer and
                    commission tracking software
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-[#625AFA] w-fit flex items-center  justify-center px-6 py-3 mt-4 text-white mx-44">
              <Button
                title="Explore Salse Incentive Software"
                classname="text-center flex  items-center gap-2"
                icon={<FaArrowRight />}
              />
            </div>
            {/*  */}
          </div>
        </div>
      </div>
      {/* next section */}
      <div className="mt-24 bg-gray-300/20  flex flex-col gap-4 items-center justify-center py-22">
        <div className="header w-[70vw] pr-[24rem] mt-12">
          <h1 className="font-bold text-[3rem]">
            Accurate and on-time compensation management, on
          </h1>
          <span className="text-[3rem] font-bold text-transparent bg-clip-text bg-gradient-to-l to-blue-500 via-purple-500 via-fuchsia-500 from-yellow-400">
            auto-pilot
          </span>
          <p className="Capitalize tracking-wide text-xl pt-4">
            Set up your sales commission tracker, approval and payout workflows
            that run like clockwork. Any change is just a few clicks away.
          </p>
        </div>
        {/*  */}
        <div className="w-full flex items-center  justify-between">
          <div className=" w-1/2 pl-[12rem] space-y-4">
            <div className="h-[150px] flex hover:shadow-lg shadow-black/50 hover:border-l-8 border-blue-500 px-4 hover:scale-105 duration-100">
              <div className=" flex items-center justify-start gap-4">
                <div className="w-1/4 border-b-4 border-blue-500 h-full">
                  <img
                    src="https://www.elevate.so/assets/images/easy-designer.svg"
                    alt=""
                    className="w-full h-full"
                  />
                </div>
                <div className="p-2 cursor-pointer ">
                  <h1 className="text-[1.7rem] font-medium Peer">
                    Team Management
                  </h1>
                  <p className="font-light  text-xs text-black">
                    Configure team hierarchy, add/remove team members, and
                    change users teams mid-way during the sales commission
                    period - all without breaking a sweat
                  </p>
                </div>
              </div>
            </div>
            {/* 2 */}
            <div className="h-[150px] flex hover:shadow-lg shadow-black/50 hover:border-l-8 border-blue-500 px-4 hover:scale-105 duration-100">
              <div className=" flex items-center justify-start gap-4">
                <div className="w-1/4 border-b-4 border-blue-500 h-full">
                  <img
                    src="https://www.elevate.so/assets/images/easy-designer.svg"
                    alt=""
                    className="w-full h-full"
                  />
                </div>
                <div className="p-2 cursor-pointer ">
                  <h1 className="text-[1.7rem] font-medium Peer">
                    Payout Reconciliation
                  </h1>
                  <p className="font-light  text-xs text-black">
                    Pay commissions on invoice collections? Then you know how
                    tricky it can be to reconcile invoices with inward payments,
                    deals & reps. Let our sales commission tracker do it for
                    you!
                  </p>
                </div>
              </div>
            </div>
            {/* 3 */}
            <div className="h-[150px] flex hover:shadow-lg shadow-black/50 hover:border-l-8 border-blue-500 px-4 hover:scale-105 duration-100">
              <div className=" flex items-center justify-start gap-4">
                <div className="w-1/4 border-b-4 border-blue-500 h-full">
                  <img
                    src="https://www.elevate.so/assets/images/easy-designer.svg"
                    alt=""
                    className="w-full h-full"
                  />
                </div>
                <div className="p-2 cursor-pointer ">
                  <h1 className="text-[1.7rem] font-medium Peer">
                    Overrides & Audit Trails
                  </h1>
                  <p className="font-light  text-xs text-black">
                    There are always exceptions to the rules. Split deals,
                    change commission payouts (and much more) while leaving an
                    audit log to track every change.
                  </p>
                </div>
              </div>
            </div>
            {/* button */}
            <div className="bg-[#625AFA]  flex items-center w-[25vw] py-2  justify-center text-white mt-20 ">
              <Button
                title="Explore Salse Incentive Software"
                classname="text-center flex justify-around  items-center gap-2"
                icon={<FaArrowRight />}
              />
            </div>
          </div>
          {/* right-component */}
          <div className=" w-1/2 pl-[8rem] pb-4 relative">
            <img
              src="https://www.elevate.so/assets/images/mt-thumbnail1.webp"
              alt=""
              className=" absolute top-12 right-1/4 m-2 shadow-2xl shadow-black "
            />
            <div className=" h-[35rem] w-[35rem] rounded-full -z-10 bg-gradient-to-l to-blue-400 via-purple-400 from-yellow-200"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Features;
