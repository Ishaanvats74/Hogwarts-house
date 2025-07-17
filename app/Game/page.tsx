'use client';
import React, {  useState } from 'react'

type Questions = {
  id: number;
  text: string;
  options: string[];
};

const allQuestions:Questions = {
    id: 1,
    text: "Which house do you prefer?",
    options: ["Gryffindor", "Slytherin", "Hufflepuff", "Ravenclaw"],
  
};

const Page = () => {
  const [currentQuestion, setCurrentQuestion] = useState<Questions>(allQuestions);
  const [selected,setSelected] = useState<string | null>(null);
  const [questionIndex, setQuestionIndex] = useState<number>(1);

  const handleSelect = (option: string)=>{
    setSelected(option)
  }
  
  const handleNext = async()=>{
    if (questionIndex >=5){
      alert("End of game result is ")
    }

    const res = await fetch("/api/Game",{
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        previousAnswer: selected,
        questionNumber: questionIndex,
      }),
    });

    const data = await res.json();
    setCurrentQuestion(data.question);
    setQuestionIndex((prev)=>prev+1) 
    setSelected(null) 
  }
  return (
    <div className="absoulte h-screen z-0 inset-0 bg-black/50 backdrop-blur-xs">
        <div className="relative z-10 flex flex-col justify-center items-center h-full space-y-12 px-4 text-center">
              <div key={currentQuestion.id} className=' font-poppins shadow-xs bg-black/30 shadow-orange-100 p-5 flex flex-col rounded-2xl h-[500px]'>
                  <p className={`mb-4`}>{currentQuestion.text}</p>
                  {currentQuestion.options.map((option, index)=>(
                      <button key={index} onClick={()=>handleSelect(option)}  className={`mt-2 font-semibold bg-white/5 hover:bg-white/15 transition-all duration-300 ease-in-out rounded-md text-xl p-2 flex items-start py-5 hover:scale-95  ${selected === option? "scale-95 bg-white/15" : "scale-100 bg-white/5"}`}>{option}</button>
                  ))}
                  <button className="bg-gradient-to-r from-purple-800 via-indigo-700 to-blue-800 hover:from-purple-600 hover:to-blue-700 px-10 py-4 rounded-full text-xl font-semibold shadow-lg hover:scale-95 transition-all duration-300 mt-3" onClick={()=>handleNext()} disabled={selected == null}>
                    Next Question   
                  </button>
              </div>
        </div>    
    </div>
  )
}

export default Page
