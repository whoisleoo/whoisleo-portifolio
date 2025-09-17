import HoverEffect from "./HoverEffect"
import { useTheme } from "../context/ThemeContext"

function MobileScreen() {
    const { isDark } = useTheme();
   

    return (
        <>
             <div className={`min-h-screen ${isDark ? "bg-black" : "bg-white"} flex items-center justify-center p-8 `}>
                 <div className={`text-center ${isDark ? "text-white" : "text-black"} max-w-md`}>
                 <h1 className="text-7xl font-bold mb-4" style={{ fontFamily: 'Roxborough, sans-serif' }}>
                    SORRY
                    </h1>
                <p className="text-md text-gray-300 leading-relaxed mb-6"  style={{ fontFamily: 'IBMPlex, sans-serif' }}>
                Your device display is not compatible with this site. :(
               </p>

               <div className="flex justify-center">
                   <img src="/gatotriste.gif" alt="Gato triste" className="w-25 h-25 opacity-80" />
               </div>


               </div>
            </div>
        </>
    )
}

export default MobileScreen