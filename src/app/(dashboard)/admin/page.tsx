import UserCard from "@/components/UserCard";
import CountChart from "@/components/CountChart";
import FinanceChart from "@/components/FInanceChart";
import Announcements from "@/components/Announcements";
import EventCalendar from "@/components/EventCalendar";
import AttendanceChart from "@/components/AttendanceChart";

const AdminPage = () => {
  return (
    <div className="p-4 flex gap-4 flex-col md:flex-row">
      {/* Left */}
      <div className="w-full lg:w-2/3 flex flex-col gap-8">
        {/* User cards */}
        <div className="flex gap-4 justify-between flex-wrap">
          <UserCard type="Estudiantes" />
          <UserCard type="Maestros" />
          <UserCard type="Padres" />
          <UserCard type="Equipo" />
        </div>

        {/* Middle Charts */}
        <div className="flex gap-4 flex-col lg:flex-row">
          {/* count chart */}
          <div className="w-full lg:w-1/3 h-[450px]">
            <CountChart />
          </div>
          {/* attem chart */}
          <div className="w-full lg:w-2/3 h-[450px]">
            <AttendanceChart />
          </div>
        </div>
        {/* Bottom Charts */}
        <div className="w-full h-[500px]">
          <FinanceChart />
        </div>
      </div>
      {/* Right */}
      <div className="w-full lg:w-2/3 flex flex-col gap-8">
        <EventCalendar />
        <Announcements />
      </div>
    </div>
  );
};

export default AdminPage;
