import aboutSvg from '../assets/about.svg'
import SectionTitle from './sectionTitle'
function About() {
  return (
    <section className='bg-white py-20 id'id='about'>
        <div className='align-element grid md:grid-cols-2 items-center gap-16'>
            <img src={aboutSvg} className='w-full h-64'/>
            <article>
                <SectionTitle text="code and coffe"/>
                <p className='text-slate-500 mt-8 leading-loose'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non cumque facilis fuga. Consequatur odit ipsa tenetur, nihil autem id quaerat error consectetur. Maxime, possimus dolore! Aliquid sapiente ea qui beatae.</p>
            </article>
        </div>
    </section>
  )
}
export default About