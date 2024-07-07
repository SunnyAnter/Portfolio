import Link from "next/link";
import Hyve from '../../public/HyveMock.png'
import Image from "next/image";

export default function LinkCard() {
  return (
    <Link href="/" className="lg:w-[25vw] w-[80vw] h-[65vh] lg:h-[60vh] rounded-lg flex items-center justify-center bg-[rgb(42,42,49)] drop-shadow-2xl hover:translate-y-[-0.5em] hover:bg-[rgb(62,62,69)]">
      <div className="w-[80%] h-[95%] flex flex-col gap-5 hover:text-white">
      <Image className="h-[40%] w-[100%] rounded-lg bg-white mt-[10%] shrink-0 shadow-2xl" src={Hyve} alt="Hyve Mockup" />
      <h1 className="text-gray-400 text-2xl font-semibold">Spot</h1>
      </div>
    </Link>
  )
}