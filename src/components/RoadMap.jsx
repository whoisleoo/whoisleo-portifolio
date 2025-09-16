import HoverEffect from "./HoverEffect"
import { useTheme } from "../context/ThemeContext"

function RoadMap() {
    const { isDark } = useTheme();
   

    return (
        <>
            <section className={`min-h-screen py-40  px-6 relative overflow-hidden border-t-1 border-white ${isDark ? "bg-black text-white" : "bg-white text-black"}`}>
                <div className="mb-15 text-center flex">
                    <HoverEffect>
                        <h1 
                            className="text-8xl"
                            style={{ fontFamily: 'Roxborough, sans-serif' }}
                        >
                            WHOISLEO
                        </h1>
                    </HoverEffect>
                </div>

                        
                        
            </section>
        </>
    )
}

export default RoadMap