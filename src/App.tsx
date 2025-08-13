import { useState } from "react"
import Index from "./components/Index"
import Sidebar from "./components/Sidebar"

function App() {
  return (
   const [isActive, SetIsActive] = useState(0)
   const taille = Sidebar.length

   function next(){
    SetIsActive((isActive) => (isActive + 1)%taille)
   }

   function preview(){
    SetIsActive((isActive) => (isActive + (taille-1))%taille)
   }

   return (
    <main className="flex w-screen h-screen">
      <Sidebar  isActive={isActive} next={next} preview={preview} />
      <Index active={isActive} />
    </main>
   )
  )
}

export default App
