// app/loading.tsx
'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Loading() {
  const pathname = usePathname()
  const [transitionType, setTransitionType] = useState<'enter' | 'exit'|null>(null);

  useEffect(()=>{
    const handlePopstate = ()=>{
      sessionStorage.setItem('navdirection','back')
    };

    window.addEventListener('popstate',handlePopstate)
    return()=>{
      window.removeEventListener('popstate',handlePopstate)
    }
  },[]);

  useEffect(()=>{
    const navdir = sessionStorage.getItem('navdirection')
    if(navdir === 'back'){
      setTransitionType('exit')
    } else{
      setTransitionType('enter')
    }
  },[pathname]);

  if (!transitionType) return null;

  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      {/* Rotating Hogwarts Emblem */}
      <motion.div
        className="mb-6 rounded-full border-4 border-purple-500 p-4 shadow-lg "
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 5, ease: 'linear' }}
      >
        <Image src="/Hogwarts-Crest-removebg-preview.png" alt="Hogwarts Logo" width={80} height={80} />
      </motion.div>

      {/* Glowing Magical Text */}
      <motion.h1
        className="text-3xl md:text-5xl font-bold text-center tracking-widest text-purple-300"
        animate={{ opacity: [0.4, 1, 0.4] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        {transitionType === 'enter'
          ? 'Entering the Wizarding World...'
          : 'Exiting the Wizarding World...'}
      </motion.h1>

      {/* Wand Glow Line */}
      <div className="mt-4 w-40 h-1 bg-purple-600 animate-pulse rounded-full shadow-xl shadow-purple-500" />
    </motion.div>
  );
}
