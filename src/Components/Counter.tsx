import Sales1BG from "../assets/Backgrounds/sales-bg-1.jpg";
import Sales2BG from "../assets/Backgrounds/sales-bg-2.svg";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

function Counter() {
  return (
    <div
      style={{
        backgroundImage: "url(CounterUnderTrustedSourcesBackGround.svg)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <ScrollCounter />
    </div>
  );
}

const ScrollCounter = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 1,
  });
  return (
    <div ref={ref}>
      {inView && (
        <div
          id="counter-container"
          className="flex flex-col lg:flex-row justify-center gap-24 text-center p-12 lg:p-0"
        >
          <div id="counter-1" className="lg:mt-14 lg:mb-14 ">
            <div>
              <h1 className="text-green-500 text-5xl font-bold ">
                <CountUp start={0} end={37} duration={5} />
              </h1>
            </div>
            <div>
              <p className="text-white text-2xl">Years Of Hard Work</p>
            </div>
          </div>
          <div id="counter-2" className="lg:mt-14 lg:mb-14">
            <div>
              <h1 className="text-green-500 text-5xl font-bold">
                <CountUp start={0} end={500000} duration={5} />
              </h1>
            </div>
            <div className="text-white text-2xl">Happy Customers</div>
          </div>
          <div id="counter-3" className="lg:mt-14 lg:mb-14">
            <div>
              <h1 className="text-green-500 text-5xl font-bold">
                <CountUp start={0} end={28} duration={5} />
              </h1>
            </div>
            <div>
              <p className="text-white text-2xl">Qualified Team Member</p>
            </div>
          </div>
          <div id="counter-4" className="lg:mt-14 lg:mb-14">
            <div>
              <h1 className="text-green-500 text-5xl font-bold">
                <CountUp start={0} end={750000} duration={5} />
              </h1>
            </div>
            <div>
              <p className="text-white text-2xl">Monthly Orders</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
function SalesCounter() {
  return (
    <div className="flex mt-12 justify-around relative mx-auto ">
      <div id="sales-container-1">
        <div>
          <img src={Sales1BG} alt="" />
        </div>
        <div className="absolute inset-0 flex items-start ms-16 mt-28 justify-start">
          <h2 className="text-white text-1xl">100% Organic </h2>
        </div>
        <div className="absolute inset-0 flex items-start ms-16 mt-36 justify-start">
          <h1 className="text-white text-4xl font-bold">Fruit & Vegetable</h1>
        </div>
        <div className="absolute inset-0 flex items-start ms-16 mt-52 justify-start">
          <h1 className="text-white text-1xl">Starting at:</h1>
          <div>
            <button className="bg-amber-600 rounded ms-1">
              <h1 className="text-white text-1xl ms-1 me-1">$11.99</h1>
            </button>
          </div>
        </div>
        <div className="absolute inset-0 flex items-start ms-14 mt-64 justify-start">
          <button className="bg-lime-600 rounded-full py-3 px-12">
            <h1 className="text-white">Shop Now </h1>
          </button>
        </div>
      </div>
      <div id="sales-container-2">
        <div>
          <img src={Sales2BG} alt="" />
        </div>
        <div className="absolute inset-0 flex items-top justify-center ms-64 me-3 mt-28">
          <h2 className="text-white text-1xl">Sale of the week </h2>
        </div>
        <div className="absolute inset-0 flex items-top justify-center ms-96 mt-36">
          <h2 className="text-white text-4xl ms-6 font-bold">
            Sales of the Year
          </h2>
        </div>
        <div className="absolute inset-0 flex items-top justify-center ms-96 mt-48">
          <div className="flex ms-16 mt-3 gap-3 text-white text-1xl text-center">
            <div>
              <div>
                <p>00</p>
              </div>
              <div>
                <p className="text-gray-300">DAYS</p>
              </div>
            </div>
            <div>:</div>
            <div>
              <div>
                <p>02</p>
              </div>
              <div>
                <p className="text-gray-300">HOURS</p>
              </div>
            </div>
            <div>:</div>
            <div>
              <div>
                <p>18</p>
              </div>
              <div>
                <p className="text-gray-300">MINUTES</p>
              </div>
            </div>
            <div>:</div>
            <div>
              <div>
                <p>46</p>
              </div>
              <div>
                <p className="text-gray-300">SECONDS</p>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 flex items-center ms-96 mt-64 me-24 justify-center">
          <button className="bg-lime-600 rounded-full py-3 px-12">
            <h1 className="text-white">Shop Now </h1>
          </button>
        </div>
      </div>
    </div>
  );
}
export { Counter, SalesCounter, ScrollCounter };
