import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/profile-pic.jpeg"



const Hero = () => {
  return (
    <div className="border-b border-neutral-800 pb-4 ">
      <div className=" flex flex-wrap">
        <div className=" w-full lg:w-[60%]">
          <div className=" flex flex-col items-center lg:items-start">
            <h1 className=" pb-5 text-6xl  tracking-tight lg:mt-6 lg:ml-16  lg:text-[11vw] lg:font-mono font-semibold">
              Samrudh M
            </h1>
            <span className=" bg-gradient-to-r align-middle from-lime-500 via-red-200 to-pink-500 bg-clip-text  text-3xl lg:text-6xl font-extrabold tracking-tight lg:ml-16 lg:text-[5vw] lg: text-transparent">
                Front End Developer
            </span>
            <p className="my-2 lg:ml-16 max-w-[90%]  lg:max-w-[80%] py-6 font-light tracking-tighter">{HERO_CONTENT}</p>
          </div>
        </div>
        <div className="w-full  lg:h-min lg:w-[30%] lg:p-10  lg:mt-20 lg:ml-14 ">
            <div className="flex h-[40vh]  md:h-[50vh]  lg:h-[50vh]  lg:w-full justify-center md:flex md:align-middle">
                <img className=" lg:w-full w-[75%]  md:w-1/2  rounded-[50%]   lg:rounded-[50%] object-cover" src={profilePic} alt="Samrudh MG"></img>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;




3