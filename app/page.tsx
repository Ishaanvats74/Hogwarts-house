'use client'
import Image from "next/image";

const house = [
  {Name:"Gryffindor",link:"/gryffindor-removebg-preview.png"},
  {Name:"Ravenclaw",link:"/ravenclaw-removebg-preview.png"},
  {Name:"Hufflepuff",link:"/hufflepuff-removebg-preview.png"},
  {Name:"Slytherin",link:"/slytherin-removebg-preview.png"},
]

export default function Home() {
  return (
    <div className="relative h-screen w-full bg-center bg-cover bg-no-repeat text-white" style={{ backgroundImage: "url(/back.jpg)" }}>
      <div className="absoulte h-screen z-0 inset-0 bg-black/50 backdrop-blur-xs">
        <div className="relative z-10 flex flex-col justify-center items-center h-full space-y-12 px-4 text-center">
          <div className="space-y-3">
            <h1 className="text-6xl font-extrabold tracking-widest ">HOGWARTS</h1>
            <h2 className="text-3xl font-semibold tracking-wide text-gray-300">Sorting Hat Ceremony</h2>
            <h3 className="text-lg italic text-gray-400">Where magic meets destiny ✨</h3>
          </div>

          <div className="grid grid-cols-2 md:flex md:flex-row gap-6 md:gap-12">
            {house.map((item)=>(
              <div key={item.Name} className="hover:scale-105 hover:bg-white/10 bg-white/5 transition-all duration-300 p-5 rounded-2xl shadow-md flex flex-col items-center">
                <Image src={item.link} height={100} width={100} alt={item.Name}/>
                <p className="mt-2 text-lg font-medium">{item.Name}</p>
              </div>
            ))}
          </div>
          <div>
            <button className="bg-gradient-to-r from-purple-800 via-indigo-700 to-blue-800 hover:from-purple-600 hover:to-blue-700 px-10 py-4 rounded-full text-xl font-semibold shadow-lg hover:scale-105 transition-all duration-300">Start Game</button>
          </div>
        </div>
      </div>
    </div>
  );
}
