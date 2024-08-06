import { PROJECTS } from "../constants"


const Projects = () => {
  return (
    <div className=" border-b border-neutral-900 pb-4">
        <h1 className=" my-20 text-center text-5xl"> PROJECTS</h1>
        <div className="   md:p-9 lg:p-0 p-4  ">
            {
                PROJECTS.map((project,index)=>(
                    <div key={index} className=" mb-8 flex flex-wrap lg:justify-center">
                        <div className="w-full lg:w-1/3">
                    <img  src={project.image} alt="ImAGES" height={100} width={300} className="mb-6 rounded h-full w-full   " />
                    </div>
                    <div className="w-full max-w-xl lg:h-3/4 lg:ml-4">
                        <h6 className=" mb-2  lg:text-2xl font-semibold">{project.title}</h6>
                        <p className="mb-4 text-neutral-400">{project.description}</p>

                            {
                                project.technologies.map((tech,index)=>(
                                    <span key={index} className="mr-2 rounded px-1 md:px-2 md:py-1  bg-neutral-900  lg:px-2  lg:py-1 text-sm font-medium text-white-800">
                                        {tech}
                                    </span>
                                ))
                            }

                        <div className=" mt-8">
                            
                    <a className="p-3 lg:w-1/5 text-black bg-white rounded-[30px] transition-all ease-in-out hover:bg-neutral-500 hover:text-black" href={project.link}>Link</a>
                    </div>
                    </div>
                    </div>
                    
                ))
            }
        </div>
    </div>
  )
}

export default Projects
