import headphoneIcon from "./assets/headphone.png"

function SongCard(){
    return(
        <>
            <div className="flex flex-row items-center w-3xl p-3 justify-between border-1 border-slate-50 rounded-2xl">
                <img className="bg-slate-50 size-8" src={headphoneIcon} alt="headphone-icon" />
                <p>Song Name</p>
                <p>00:00</p>
                <p>Feat.Lil Nas X</p>
                <button className="font-light border-1 border-slate-50 text-slate-50 py-1 px-2.5 rounded-md hover:bg-slate-50 hover:text-slate-950">Edit</button>
                <button className="font-light border-1 border-slate-50 text-slate-50 py-1 px-2.5 rounded-md hover:bg-slate-50 hover:text-slate-950">Writing Mode</button>
            </div>
        </>
    );
}

export default SongCard;