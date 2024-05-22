import TrustedSourceSmallImg from "../assets/TrustedSourceSmallimg.svg";
import TrustedSourceLargeImg from "../assets/TrustedSourceBigimg.svg";
import GreenCheckMark from "../assets/GREEN-CHECKMARK.svg";
function TrustedSource() {
  return (
    <div
      style={{
        backgroundImage: "url(TrustedSourcesBackground.svg)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "70vh",
      }}
    >
      <div className="flex mx-1 lg:mx-12 my-12">
        <div id="trusted-sources-img-container" className="flex gap-12 mt-12">
          <div id="img-1" className="hidden lg:block">
            <img className="mt-6" src={TrustedSourceSmallImg} alt="" />
          </div>
          <div id="img-2" className="hidden lg:block">
            <img src={TrustedSourceLargeImg} alt="" />
          </div>
        </div>
        <div id="trusted-sources-text">
          <div id="trusted-sources-header" className="lg:mt-16 lg:ms-12">
            <p className="font-bold text-5xl text-center lg:text-left">
              100% Trusted <br /> Organic Food Store
            </p>
          </div>
          <div id="trusted-sources-talking-points">
            <div id="talking-point-1" className="lg:ms-6">
              <div
                id="talking-pint-1-header"
                className="flex ms-4 lg:ms-12 gap-1 mt-8 align-baseline"
              >
                <div>
                  <img className="w-6 h-9" src={GreenCheckMark} alt="" />
                </div>
                <div>
                  <div>
                    <p className="text-1xl font-semibold mt-1.5 ms-1">
                      Healthy & natural food for lovers of healthy food.
                    </p>
                  </div>
                  <div className="mt-3 text-slate-400 break-words">
                    <p>
                      Ut quis tempus erat. Phasellus euismod bibendum magna non
                      tristique. Pellentesque semper
                      <br /> vestibulum elit sed condimentum. Nunc pretium
                      fermentum interdum.{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div id="talking-point-2" className="lg:ms-6">
              <div
                id="talking-pint-2-header"
                className="flex ms-4 lg:ms-12 gap-1 mt-8 align-baseline"
              >
                <div>
                  <img className="w-6 h-9" src={GreenCheckMark} alt="" />
                </div>
                <div>
                  <div>
                    <p className="text-1xl font-semibold mt-1.5 ms-1">
                      Every day fresh and quality products for you.{" "}
                    </p>
                  </div>
                  <div className="mt-3 text-slate-400 break-words">
                    <p>
                      Maecenas vehicula a justo quis laoreet. Sed
                      <br /> in placerat nibh, a posuere ex. Morbi sem neque,
                      aliquam sed orci et,
                      <br /> rhoncus lobortis felis. Sed vestibulum nisl sit
                      amet sapien.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export { TrustedSource };
