import Link from "next/link";
import Image, {StaticImageData} from "next/image";

export default function LinkCard({ image, title, href, description }: {
  image: StaticImageData,
  title: string,
  href: string,
  description:string
}) {
  return (
    <Link href={`/${href}`} className="lg:w-[25vw] w-[80vw] h-[65vh] lg:h-[60vh] rounded-lg flex items-center justify-center bg-[rgb(42,42,49)] drop-shadow-2xl lg:hover:translate-y-[-0.5em] lg:hover:bg-[rgb(62,62,69)]">
      <div className="w-[80%] h-[95%] flex flex-col gap-5">
        <Image className="rounded-lg bg-indigo-700 mt-[10%] shrink-0 shadow-2xl" src={image} alt="Hyve Mockup" />
        <div className="w-full flex flex-col justify-center items-center gap-2">
          <h1 className="text-white text-2xl font-semibold w-full flex justify-center items-center p-1 bg-[rgb(82,82,89)] rounded-md">{title}</h1>
          <h4 className="text-gray-400 text-lg">{description}</h4>
        </div>
      </div>
    </Link>
  )
}