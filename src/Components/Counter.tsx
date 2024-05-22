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
    <div className="flex mt-12 justify-around">
      <div id="sales-container-1">
        <div>
          <img src={Sales1BG} alt="" />
        </div>
      </div>
      <div id="sales-container-2">
        <div>
          <img src={Sales2BG} alt="" />
        </div>
      </div>
    </div>
  );
}
export { Counter, SalesCounter, ScrollCounter };
