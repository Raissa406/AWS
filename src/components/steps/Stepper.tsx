interface Iprops {
    color: string;
}

function Stepper ({ color}: Iprops) {
    return (
        <div   
            style={{ background: color}}
            className="w-[27%] h-2 rounded-lg lg:w-[8rem] lg:h-3"
        >
            {" "}
        </div>
    );
}

export default Stepper