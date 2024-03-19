import Auth from "./Auth";
import Header from "./Header";

function App() {
  return (
    <>
      <div
        className="flex h-screen gap-4 justify-between flex-col items-center bg-slate-800"
        style={{
          backgroundImage: "url(" + "/login.jpg" + ")",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Header />
        <Auth />
      </div>
    </>
  );
}

export default App;
