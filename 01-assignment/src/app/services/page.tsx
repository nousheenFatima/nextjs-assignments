import Link from "next/link"
import cssStyle from "../../app/services/services.module.css"
export default function Services(){
    return(
        <div className="bg-blue-100 h-screen text-black">
            <h1 className= {cssStyle.heading}>Our Services</h1> <br /><br />
            <Link className= {cssStyle.link}  href="/services/artificial-intelligence">Artificial Intelligence</Link> <br />
            <Link className= {cssStyle.link} href="/services/graphic-designing">Graphics Designing</Link> <br />
            <Link className= {cssStyle.link}href="/services/web-development">Web Development</Link>
            
        </div>
    )
}
