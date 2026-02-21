import Sidebar from './components/Sidebar'
import Topbar from './components/Topbar'
import MapComponent from './components/MapComponent'
import RightSidebar from './components/RightSidebar'

function App() {
  return (
    <div className="flex flex-col h-screen w-full bg-slate-900 text-white overflow-hidden">
      <Topbar />
      <div className="flex flex-1 overflow-hidden relative p-4 gap-4">
        <Sidebar />
        <div className="flex-1 relative z-0">
            <MapComponent />
        </div>
        <RightSidebar />
      </div>
    </div>
  )
}

export default App
