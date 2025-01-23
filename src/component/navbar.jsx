import {links} from '../data'
const Navbar = () => {
  return (
<nav className='bg-emerald-100 sticky top-0'>
  <div className='mx-auto max-w-7xl px-8 py-4 flex flex-col sm:flex-row sm:gap-x-16 sm:items-center sm:py-8 sm:justify-between'>
    <h2 className='text-3xl font-bold'>My <span className='text-emerald-600'>portfolio</span></h2>
    <div className='hidden sm:flex sm:gap-x-8'>
      {
        links.map((link)=>{
         const {id,href,text}=link
         return <a key={id} href={href} className='capitalize text-lg tracking-wide hover:text-emerald-600 duration-300'>{text}</a> 
        })
      }
    </div>
  </div> 
</nav>
  )
}

export default Navbar
