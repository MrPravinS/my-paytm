import { Link } from "react-router-dom"

function BottomWarning({label,buttontext,to}){
    return (
        <div className="">
          <div className="text-sm flex justify-center py-2">
            {label}
          </div>
          <Link to={to} className="pointer underline cursor-pointer">{buttontext}
          </Link>
        </div>
    )
}

export default BottomWarning