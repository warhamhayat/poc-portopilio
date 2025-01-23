import { projects } from "../data"
import ProjectCard from "./projectCard"
import SectionTitle from "./sectionTitle"

const Project = () => {
  return (
    <section className="align-element py-20" id="projects">
        <SectionTitle text='my projects'/>
        <div className="py-16 grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {
                projects.map((p)=>{
                    return <ProjectCard key={p.id} {...p}/>
                })
            }
        </div>
    </section>
  )
}
export default Project