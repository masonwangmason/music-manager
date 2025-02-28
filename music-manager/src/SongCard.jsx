import headphoneIcon from "./assets/headphone.png"

function SongCard(){
    return(
        <>
            <div className="flex flex-row items-center w-full h-20 p-3 justify-between border-1 border-slate-50 rounded-2xl">
                <button>
                    <img className="bg-slate-50 p-1 size-8 rounded-2xl transition duration-200 hover:border-2" src={headphoneIcon} alt="headphone-icon" />
                </button>
                <p>Song Name</p>
                <p>00:00</p>
                <p>Feat.Lil Nas X</p>
                <div className="flex flex-ro gap-1.5">
                    <button className="font-light border-1 border-slate-50 text-slate-50 py-1 px-2.5 rounded-md transition duration-200 hover:bg-slate-50 hover:text-slate-950">Edit</button>
                    <button className="font-light border-1 border-slate-50 text-slate-50 py-1 px-2.5 rounded-md transition duration-200 hover:bg-slate-50 hover:text-slate-950">Writing Mode</button>
                </div>
                
            </div>
        </>
    );
}

export default SongCard;