import { DiRedis } from "react-icons/di"
import { FaBootstrap, FaNodeJs } from "react-icons/fa"
import { FaCss3, FaHtml5 } from "react-icons/fa6"
import { RiReactjsLine, RiTailwindCssFill } from "react-icons/ri"
import { SiMongodb } from "react-icons/si"
import { TbBrandNextjs } from "react-icons/tb"

const Technologies = () => {
  return (
    <div className=" border-b border-neutral-800 pb-24">
        <h1 className=" my-20 text-center  text-6xl">SKILLS</h1>
        <div className=" flex flex-wrap items-center justify-center gap-4">
            <div className=" rounded-2xl border-4 border-neutral-800 p-4">
                <FaHtml5 className=" text-7xl text-[#E44D26]"/>
            </div>
            <div className=" rounded-2xl border-4 border-neutral-800 p-4">
                <FaCss3 className=" text-7xl text-[#254BDD]"/>
            </div>
            <div className=" rounded-2xl border-4 border-neutral-800 p-4">
                <FaNodeJs className=" text-7xl text-[#E1C22F]"/>
            </div>
            <div className=" rounded-2xl border-4 border-neutral-800 p-4">
                <RiReactjsLine className=" text-7xl text-cyan-400"/>
            </div>
            <div className=" rounded-2xl border-4 border-neutral-800 p-4">
                <SiMongodb className=" text-7xl text-[#569134]"/>
            </div>
            <div className=" rounded-2xl border-4 border-neutral-800 p-4">
                <FaBootstrap className=" text-7xl text-[#7A10F8]"/>
            </div>
            <div className=" rounded-2xl border-4 border-neutral-800 p-4">
                <RiTailwindCssFill className=" text-7xl text-[#38BDF8]"/>
            </div>
        </div>
    </div>
  )
}

export default Technologies
