import QR from "../images/image-qr-code.png"

export function QRCard(){   
    return <div className="rounded-2xl bg-white p-4 w-72 font-[Outfit] text-center drop-shadow-xl">
        <img className="rounded-xl" src={QR} alt="QR" />
        <h2 className="text-xl font-bold text-[#1f3251] pt-4 pb-2">Improve your front-end skills by building projects</h2>
        <h2 className="text-[15px] font-[Outfit] text-[#7b879d] pt-2 pb-4">Scan the QR Code to visit Frontend Mentor and take your coding skills to next level</h2>
    </div>
}