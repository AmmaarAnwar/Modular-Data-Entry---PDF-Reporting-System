import MainPage from "./Pages/MainPage";
import Header from "./components/Header";
import Slider from "./components/Slider";
function App() {
  return (
    <>
      <div className="w-full mx-0 min-h-full grid grid-cols-[auto_1fr]">
        <div className="min-h-[100vh] bg-sky-500">
          <Slider />
        </div>
        <div>
          <Header />
          <MainPage />
        </div>
      </div>
    </>
  );
}
export default App;