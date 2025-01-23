import SkillCard from "./skillCard"
import { skills } from "../data"
import SectionTitle from "./sectionTitle"

const Skill = () => {
  return (
    <section className="py-16 align-element" id="skills">
      <SectionTitle text="skills" />
      <div className="py-16 grid md:grid-cols-2 lg:grid-cols-3 gap-9" >
        {skills.map((s)=>{
            return <SkillCard key={s.id}{...s} />
        })}
      </div>
    </section>
  )
}
export default Skill