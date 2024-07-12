import Hero from "./components/Hero"
import Navbar from "./components/Navbar"

function App() {
  
  return (
    <main className="px-24 py-28 flex flex-col justify-center items-center bg-[#D3E8E3] ">
      <div className="w-full h-full  border-[2px] rounded-xl bg-white">
       <div>
        <Navbar/>
        <Hero/>
        

       </div>

      </div>
    </main>
  )
}

export default App
