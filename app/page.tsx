import Footer from "./Components/Footer";
import Header from "./Components/Header";
import SideBar from "./Components/SideBar";

export default function Home() {
  const username: string = "abc";
  return (
    <div>
      <div className="bg-gray-100">
        <Header username={username} />
        <div className="flex flex-row">
          <SideBar />
          <div className="">Content</div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
