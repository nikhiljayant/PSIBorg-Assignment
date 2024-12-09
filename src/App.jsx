// Component
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <div className="min-h-dvh flex">
      <Sidebar />
      <div className="bg-[#141416] w-full">
        <Header />
        <Dashboard />
      </div>
    </div>
  );
}

export default App;
