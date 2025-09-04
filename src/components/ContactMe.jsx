import HoverEffect from "./HoverEffect"
import { useTheme } from "../context/ThemeContext"
import Dither from "./DitherBackground";

function ContactMe() {
    const { isDark, toggleTheme } = useTheme();

    const links = [
        { name: "WHATSAPP", url: "https://wa.me/42999307151"},
        { name: "GITHUB", url: "https://github.com/whoisleoo"},
        { name: "LINKED-IN", url: "https://www.linkedin.com/in/leonardo-marconato-308a04344/"},
        { name: "EMAIL", url: "#"}
        ]


        return(
            <>
                <section className="min-h-screen bg-black text-white pt-60 pb-40 px-6 relative overflow-hidden">
                    <div className="text-center mb-70" id="contact">
                        <h2 className="text-sm tracking-wider text-gray-400" style={{ fontFamily: 'Disket, sans-serif' }}>
                            -CONTACT-
                        </h2>
                    </div>

                    <div className="mb-16 flex justify-center">
                        <div className="relative">
                            <div className="text-lg tracking-wider text-gray-400 absolute -top-8 left-0" style={{ fontFamily: 'SKCuber, sans-serif' }}>
                               //DON'T BE SHY 
                            </div>
                            
                            <div className="flex items-center gap-4">
                                <img src="/asterisco.svg" className="w-10 h-10 mr-3">
                                </img>
                                <h1 className="text-7xl " style={{ fontFamily: 'Roxborough, sans-serif' }}>
                                    CONTACT ME
                                </h1>
                            </div>
                        </div>
                    </div>

                    <div className="max-w-6xl mx-auto">
                        <div className="w-full mb-8">
                            <div className="text-xs text-gray-500 mb-4">
                                (001)
                            </div>
                            <div className="w-full h-px bg-white"></div>
                        </div>

                        <div className="grid grid-cols-2 items-start">
                            <div>
                                {links.map((link, index) => (
                                    <div key={index} className="mb-4 style={{ fontFamily: 'Disket, sans-serif' }}">
                                        <HoverEffect>
                                            <a href={link.url} className="group flex items-center justify-between py-3 border-b border-white hover:border-gray-300 transition-colors duration-300">
                                                <span className="text-2xl font-light tracking-wide group-hover:text-gray-300 transition-colors duration-300">
                                                    {link.name}
                                                </span>
                                                <img src="/arrowdarkmode.svg" className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300">
                                                </img>
                                            </a>
                                        </HoverEffect>
                                    </div>
                                ))}
                            </div>

                            <div className="flex justify-end">
                                <div className="rainbow rounded-lg overflow-hidden" style={{ width: '500px', height: '384px', position: 'relative',}}>
                                    <Dither
                                        waveColor={[0.5, 1.5, 0.5]}
                                        disableAnimation={false}
                                        enableMouseInteraction={true}
                                        mouseRadius={0.8}
                                        colorNum={4}
                                        waveAmplitude={0.3}
                                        waveFrequency={3}
                                        waveSpeed={0.05}
                                    />
                                </div>
                            </div>

                        </div>


                    </div>

                </section>
            </>
        )

}

export default ContactMe