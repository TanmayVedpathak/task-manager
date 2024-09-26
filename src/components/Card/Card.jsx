import BlackBin from "../../assets/bin-black.svg";
import WhiteBin from "../../assets/bin-white.svg";
import BlackPen from "../../assets/pen-black.svg";
import WhitePen from "../../assets/pen-white.svg";

export const Card = ({ title, dark }) => {
    return (
        <>
            <div className='bg-black dark:bg-white px-4 py-2 max-w-[300px] w-full rounded shadow-2xl dark:shadow-[0_25px_50px_-12px_rgba(255,255,255,0.3)] '>
                <div className="flex gap-2 mb-4">
                    <button className="w-8 h-8 p-1 border border-white dark:border-black rounded">
                        <img className='w-full h-auto' src={dark ? BlackPen : WhitePen} alt="pen" />
                    </button>
                    <button className="w-8 h-8 p-1 border border-white dark:border-black rounded">
                        <img className='w-full h-auto' src={dark ? BlackBin : WhiteBin} alt="bin" />
                    </button>
                </div>
                <div>
                    <p className='text-3xl text-white dark:text-black'>{title}</p>
                </div>
            </div>
        </>
    )
}
