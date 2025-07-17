import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";
const ai = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

export async function POST(req:Request) {
    const {previousAnswer,questionNumber} = await req.json();

    try {
        const model = ai.getGenerativeModel({ model: "gemini-2.5-flash" });
        const result = await model.generateContent(`${previousAnswer} according to this answer give me one question and it should not be same question as previous , give question by which we can see which hogwarts house will be best for them and question should be little funny and can be cringe one question prvide four option also for it. return one question and 4 options Very Important: Return the result in **ONLY** this strict JSON format, and nothing else:{
            "id": ${questionNumber},
            "text": "Your question here?",
            "options": ["Option A", "Option B", "Option C", "Option D"]
            }`);
        const response = result.response;
        console.log(response.text);
        const text = response.text();
        if(response){   
            const cleanText = text.replace(/```json|```/g, "").trim();
            const parse = JSON.parse(cleanText);
            console.log(parse)
            return NextResponse.json({question:parse},{status: 200})
        } else{
            return  NextResponse.json({response:"Error Occured"},{status: 500})
        }
        
    } catch (error) {
        console.log(error)
        return NextResponse.json({response:"Error Occured"},{status: 500})
    }

}