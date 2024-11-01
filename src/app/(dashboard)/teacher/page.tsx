import BigCalendar from "@/components/BigCalendar";
import Announcements from "@/components/Announcements";

const TeacherPage = () => {
  return (
    <div className="flex-1 p-4 flex gap-4 flex-col xl:flex-row">
      {/* Left */}
      <div className="w-full xl:w-2/3">
        <div className="h-full p-4 bg-white rounded-md">
          <h1 className="text-xl font-semibold">Cronograma (4A)</h1>

          <BigCalendar />
        </div>
      </div>
      {/* Right */}
      <div className="w-full lg:w-2/3 flex flex-col gap-8">
        <Announcements />
      </div>
    </div>
  );
};

export default TeacherPage;
