export function InputBox({label,placeholder}){
    return(
        <div >
            <div className="text-sm font-md text-left py-2">
            {label}
            </div>
            <input className="w-full border rounded border-slate-200 px-2 py-1" placeholder={placeholder}/>
        </div>
    )
}