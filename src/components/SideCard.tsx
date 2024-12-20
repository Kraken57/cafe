import { ArrowUp } from "lucide-react";
import PieChartImage from "../assets/pie-chart.svg";
import CompanyLogo from "../assets/logo.svg";
import CountUp from "react-countup";

// Define types for the props (if needed)
interface SideCardProps {}

const SideCard: React.FC<SideCardProps> = () => {
  const countUpProps = {
    duration: 1.5,
    separator: ",",
  };

  return (
    <div className="rounded-3xl border relative shadow-xl">
      <div className="flex font-bold text-lg gap-2 items-center p-6 border-b">
        <img src={CompanyLogo} alt="Logo" width={30} height={30} />
        <span>AI to Detect & Autofix Bad Code</span>
      </div>

      <div className="flex justify-around items-center p-8 gap-12">
        <div className="flex flex-col items-center">
          <strong className="text-lg">
            <CountUp start={0} end={30} {...countUpProps} />+
          </strong>
          <span className="text-sm">Language Support</span>
        </div>

        <div className="flex flex-col items-center">
          <strong className="text-lg">
            <CountUp start={0} end={10} {...countUpProps} />
            K+
          </strong>
          <span className="text-sm">Developers</span>
        </div>

        <div className="flex flex-col items-center">
          <strong className="text-lg">
            <CountUp start={0} end={100} {...countUpProps} />
            K+
          </strong>
          <span className="text-sm">Hours Saved</span>
        </div>
      </div>

      <div className="absolute flex flex-col justify-between z-10 bg-white bottom-0 right-0 translate-y-[90%] w-[265px] h-[164px] translate-x-[10%] shadow-xl border rounded-3xl p-4">
        <div className="flex justify-between items-center">
          <div className="rounded-full p-4 bg-[#9D90FA]/25">
            <img src={PieChartImage} alt="Pie Chart" width={24} height={24} />
          </div>
          <div className="flex flex-col text-xs">
            <div className="text-[#0049C6] text-secondary text-sm font-bold flex">
              <ArrowUp size={24} />
              <CountUp start={0} end={14} duration={1.3} />%
            </div>
            This Week
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <span className="text-sm font-bold">Issues Fixed</span>
          <span className="text-[#081735] text-3xl font-bold">
            <CountUp start={0} end={500} duration={2} separator="," />
            K+
          </span>
        </div>
      </div>
    </div>
  );
};

export default SideCard;
