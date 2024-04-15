import Image from "next/image";
import Header from "./_components/Header";
import Hero from "./_components/Hero";
import Footer from "./_components/Footer";
import Sidenav from "./(pages)/_components/Sidenav";
import TopHeader from "./(pages)/_components/TopHeader";
export default function Home({ children }) {
  return (
    <div className="bg-black">
      <div className=" h-full md:w-64 flex-col fixed inset-y-0 z-50">
        <Sidenav />
      </div>
      <div>
        <TopHeader />
      </div>
      <div className="ml-64">{children}</div>
    </div>
  );
}
