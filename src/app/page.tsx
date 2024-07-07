import LinkCard from "@/components/linkCards";

export default function Home() {
  return (
    <div className="min-h-[100vh] w-full flex justify-center items-center bg-[rgb(52,53,60)] lg:rounded-tl-3xl lg:shadow-inner lg:mt-4">
      <div className="h-[80%] w-[80%] flex flex-col gap-8 pt-[10vh]">
        <h1 className="text-white text-2xl lg:text-4xl">Hi! I&apos;m Sunny</h1>
        <h4 className="text-gray-400 text-xs lg:text-lg lg:w-[70%]">I&apos;m a Passionate and skilled Full Stack Developer with a strong emphasis on front-end
          design and development. With a deep understanding of JavaScript,
          TypeScript, and the latest front-end frameworks like React, Tailwind CSS, and ShadCN,
          I create engaging and responsive user interfaces that provide exceptional user experiences.</h4>
         <h1 className="text-white text-lg lg:text-xl">What I&apos;ve been working on</h1>
        <div className="flex gap-6 flex-col lg:flex-row lg:justify-center items-center">
        <LinkCard/>
        <LinkCard/>
        <LinkCard/>
        </div>
      </div>
    </div>
  );
}
