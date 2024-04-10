import { Link } from 'react-router-dom'
import './NotFoundPage.css'

export default function NotFoundPage(){
    return(
      <div className="notFound">
         <h1>There is no such page 😔</h1>
         <Link to='/'>Home</Link>
      </div>
    )
}