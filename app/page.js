import Sidenav from "./(pages)/_components/Sidenav";
export default function Home({ children }) {
  return (
    <div className="bg-black">
      <div className=" h-full md:w-64 flex-col fixed inset-y-0 z-50">
        <Sidenav />
      </div>

      <div className="ml-64">{children}</div>
    </div>
  );
}
