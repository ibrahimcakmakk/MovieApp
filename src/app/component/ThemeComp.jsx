"use client"

import React, { useEffect, useState } from 'react'
import {CiDark ,CiLight} from "react-icons/ci"
import { useTheme } from 'next-themes'

const ThemeComp = () => {
    const [mounted, setMounted] = useState(true)
    const {systemTheme,theme, setTheme} = useTheme()
    const [themeMode, setThemeMode] = useState("system")
    useEffect(()=>{
        setMounted(true)
        if (themeMode === "sytem") {
          setThemeMode(systemTheme)
        }else{
          setThemeMode(theme)
        }
    },[])

    //const themeMode = theme === "system" ? systemTheme : theme
    

    console.log(themeMode, "themeMode")
  return (
    <>
        {
            mounted && (
                themeMode === "dark" ? 
                <CiLight onClick={()=> setTheme('light')} className='cursor-pointer' size={25} /> :
                <CiDark onClick={()=> setTheme('dark')} className='cursor-pointer' size={25} />
            )
            }
        
    </>
  )
}

export default ThemeComp