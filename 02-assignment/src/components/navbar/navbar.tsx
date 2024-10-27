
import Link from "next/link";
import cssStyle from '@/components/navbar/navbar.module.css'
const Navbar = () => {
  return (
    <div className= {cssStyle.div}>
      <Link href={"/"} className= {cssStyle.link}>Home</Link>
      <Link href={"/about"} className= {cssStyle.link}>About</Link>
      <Link href={"/services"} className= {cssStyle.link}>Services</Link>
      <Link href={"/contact"} className= {cssStyle.link}>Contact </Link>
    </div>
  )
}

export default Navbar