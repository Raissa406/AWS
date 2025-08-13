import React from "react";


export interface StepProps extends React.HtmlHTMLAttributes<HTMLDivElement> {
    icon:React.ReactElement
    title: string
    description:string
    key?:number
}


function Step(props: StepProps) {
    return (
        <div className='flex items-center justity-start w-full h-20 gap-4' {...props}>
            <div className="flex items-center justify-center w-12 border border-gray-400 border-solid roudes-lg h-11">
                {props.icon}
            </div>
            <div className="text-[1.3] lg:text-[1.8rem]">
                <h6 className="font-blod"> {props.title}</h6>
                <p className="text-gray-400"> {props.description}</p>
            </div>
        </div>
    )
}
export default Step