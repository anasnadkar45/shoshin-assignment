import Matrics from "@/components/Dashboard/Matrics";
import Image from "next/image";
import { ChartsData, MatricsData } from '../data/data'
import Charts from "@/components/Dashboard/Charts";
import Activity from "@/components/Dashboard/Activity";
import Announcement from "@/components/Dashboard/Announcement";
import Schedule from "@/components/Dashboard/Schedule";

const bgColors = ['#FFEFE7', '#E8F0FB', '#FDEBF9'];
const textColors = ['#FF5151', '#3786F1', '#EE61CF']
export default function Home() {
  return (
    <div className="space-y-4">
      <h2 className="font-bold">Dashboard</h2>

      <div className="grid grid-cols-6 gap-4">
        <div className="col-span-4 space-y-4">
          {/* matrics */}
          <div className="grid grid-cols-3 gap-4">
            {MatricsData.map((item, index) => (
              <Matrics key={index} data={item} style={{ backgroundColor: bgColors[index % bgColors.length], color: textColors[index % textColors.length] }} />
            ))}
          </div>
          <div className="grid grid-cols-2 gap-4">
            {ChartsData.map((item, index) => (
              <Charts key={index} data={item} />
            ))}
          </div>
          <div className="col-span-4">
            <Announcement />
          </div>
        </div>
        <div className="col-span-2 space-y-4">
          <Activity />
          <Schedule />
        </div>
      </div>
    </div>
  );
}
