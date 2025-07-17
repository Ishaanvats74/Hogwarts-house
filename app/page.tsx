'use client'
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";


type house = {
  Name: string,
  link: string,
  Traits: string,
  Description: string,
};




const house: house[]= [
  {Name:"Gryffindor",link:"/gryffindor-removebg-preview.png",Traits: "Bravery, courage, determination, chivalry, daring",Description:"Gryffindor is the house of the bold and the brave. Founded by Godric Gryffindor, this house values courage, nerve, and daring. Its members are known to stand up for what is right—even in the face of danger. Gryffindors often act on instinct and are natural-born leaders with strong moral compasses."},
  {Name:"Ravenclaw",link:"/ravenclaw-removebg-preview.png",Traits: "Intelligence, creativity, learning, wisdom, wit",Description:"Ravenclaw celebrates those with a thirst for knowledge and a sharp mind. Founded by Rowena Ravenclaw, this house values wisdom, learning, and individuality. Ravenclaws are imaginative thinkers, problem solvers, and curious minds always seeking to expand their understanding of the magical world."},
  {Name:"Hufflepuff",link:"/hufflepuff-removebg-preview.png",Traits: "Loyalty, patience, kindness, hard work, fairness",Description:"Hufflepuff is the most inclusive house, founded by Helga Hufflepuff. It values loyalty, dedication, honesty, and fair play. Hufflepuffs are kind, humble, and just. Though often underestimated, they are the most reliable and hardworking students at Hogwarts."},
  {Name:"Slytherin",link:"/slytherin-removebg-preview.png",Traits: "Ambition, cunning, resourcefulness, leadership, self-preservation",Description:"Founded by Salazar Slytherin, this house values ambition, cunning, and strategic thinking. Slytherins are determined to achieve their goals and are willing to do whatever it takes to get there. They are natural leaders and often misunderstood for their desire for greatness."},
];

export default function Home() {
  
  const [selected,setSelected] = useState<house| null>(null);
  const router = useRouter()
  const handleStart = async()=>{
    router.push('/Game')
  }

  const handlehouse = async(item: house)=>{
    setSelected(item)
  }

  


  return (
   
      <div className="absoulte h-screen z-0 inset-0 bg-black/50 backdrop-blur-xs">
        <div className="relative z-10 flex flex-col justify-center items-center h-full space-y-12 px-4 text-center">
          <div className="space-y-3">
            <h1 className="text-6xl font-extrabold tracking-widest ">HOGWARTS</h1>
            <h2 className="text-3xl font-semibold tracking-wide text-gray-300">Sorting Hat Ceremony</h2>
            <h3 className="text-lg italic text-gray-400">Where magic meets destiny ✨</h3>
          </div>

          <div className="grid grid-cols-2 md:flex md:flex-row gap-6 md:gap-12">
            {house.map((item)=>(
              <button onClick={()=>handlehouse(item)} key={item.Name} className="hover:scale-105 hover:bg-white/10 bg-white/5 transition-all duration-300 p-5 rounded-2xl shadow-md flex flex-col items-center">
                <Image src={item.link} height={100} width={100} alt={item.Name}/>
                <p className="mt-2 text-lg font-medium">{item.Name}</p>
              </button>
            ))}
          </div>
          <div>
            <button onClick={()=>handleStart()} className="bg-gradient-to-r from-purple-800 via-indigo-700 to-blue-800 hover:from-purple-600 hover:to-blue-700 px-10 py-4 rounded-full text-xl font-semibold shadow-lg hover:scale-105 transition-all duration-300">Start Game</button>
          </div>
        </div>
        <AnimatePresence>
          {selected && (
            <motion.div className="fixed inset-0 z-50 flex items-center justify-center bg-black/10 backdrop-blur-3xl " 
            initial={{ opacity:0}} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }}>
              <motion.div className="bg-black/80 text-white p-6 rounded-xl shadow-xl max-w-lg relative max-h-xl transition-all duration-300 ease-in-out" initial={{ scale: 0.8, opacity: 0, y: 20 }} animate={{ scale: 1, opacity: 1, y: 0 }} exit={{ scale: 0.8, opacity: 0, y: 20 }} transition={{type: "spring", duration: 0.6, stiffness: 160,damping: 20, }}>
                <button onClick={() => setSelected(null)} className="absolute top-2 right-2 text-gray-400 hover:text-white text-2xl">
                  &times;
                </button>
                <div className="flex flex-col items-center space-y-4">
                  <Image src={selected.link} height={100} width={100} alt={selected.Name}/>
                  <h1 className="text-3xl font-bold">{selected.Name}</h1>
                  <p className="text-sm italic text-gray-300 mb-1 text-center ">Traits: {selected.Traits}</p>
                  <p className="text-sm text-center text-gray-300">Description: {selected.Description}</p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
  );
}
