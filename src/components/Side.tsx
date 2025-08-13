import Sidebar from "./Sidebar"
import Step from "./steps/Step"


interface Valid {
    isActive: number
    next: () => void
    preview: () => void
}

function Side(propsValid: Valid) {

    return(

        <section className="flex-col items-center justify-between flex-1 hidden w-full px-4 py-10 md:flex bg-">
            <div className="space-y-14">
                <img src="" alt="" className="mx-auto"/>
                <div className="flex flex-col gap-[6rem]">
                    {Sidebar.map((item, index) => (
                        <Step key={index} className={index === propsValid.isActive ? "text-black flex gap-4 w-full h-20  items-center justify-start":"text-gray-400 flex gap-4 w-full h-20 items-center justify-start"} icon={item.icon} title={item.title} description={item.description} />
                    ))}
                </div>
            </div>

            <div className="flex justify-between w-full justify-self-end">
                <button className="flex items-center ">
                    <span onClick={propsValid.preview} className="text-[2rem]">Vos Détails</span>
                </button>
                <button onClick={propsValid.next} className="text-[] text-[2rem]">Sign In</button>
            </div>
        </section>
    )
}
 export default Side