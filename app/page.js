import Sidenav from "./(pages)/_components/Sidenav";
import TopHeader from "./(pages)/_components/TopHeader";

export default function page({ children }) {
  return (
    <div className="bg-black">
      {/* Sidebar */}
      <div className="h-full md:w-64 flex-col fixed inset-y-0 z-50">
        <Sidenav />
      </div>

      {/* Top Header */}
      <div>
        <TopHeader />
      </div>

      {/* Main Content */}
      <div className="ml-64">
        {/* Render the children content */}
        {children}
      </div>
    </div>
  );
}
