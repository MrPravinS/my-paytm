export function Button({label, onClick}){
  return (
   <button onClick={onClick} className="w-full bg-gray-800 text-white focus:outline-none focus:ring-gray-4 font-medium px-5 py-2.5 cursor-pointer hover:bg-gray-900 rounded-lg me-2 mb-2">{label}</button>
  )
}