import Card from "../components/Card";
import Card2 from "../components/Card2";
import Card3 from "../components/Card3";
import Card4 from "../components/Card4";
function DashBoard() {
  return (
    <>
      <div className="grid grid-cols-12 pt-2 mx-10 my-[-10px] h-full dark:bg-red-500">
        <div className="col-span-2 pt-2">
          <Card />
        </div>
        <div className="col-span-2 pt-2">
          <Card4 />
        </div>
        <div className="col-span-2 pt-2">
          <Card3 />
        </div>
        <div className="col-span-12 pt-2">
          <Card2 />
        </div>
      </div>
    </>
  );
}
export default DashBoard;