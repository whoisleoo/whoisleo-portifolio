import HoverEffect from "./HoverEffect"
import { useTheme } from "../context/ThemeContext"
import Dither from "./DitherBackground";

function ContactMe() {
    const { isDark, toggleTheme } = useTheme();

    const links = [
        {
            name: "WHATSAPP",
            url: "https://wa.me/42999307151",
            splitText: { left: "WHATS", right: "APP" },
            icon: (
                <svg className="w-6 h-6" fill="white" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.488"/>
                </svg>
            ),
            bgColor: "bg-black"
        },
        {
            name: "GITHUB",
            url: "https://github.com/whoisleoo",
            splitText: { left: "GIT", right: "HUB" },
            icon: (
                <svg className="w-6 h-6" fill="white" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
            ),
            bgColor: "bg-black"
        },
        {
            name: "LINKED-IN",
            url: "https://www.linkedin.com/in/leonardo-marconato-308a04344/",
            splitText: { left: "LINKED", right: "IN" },
            icon: (
                <svg className="w-6 h-6" fill="white" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
            ),
            bgColor: "bg-black"
        },
        {
            name: "EMAIL",
            url: "#",
            splitText: { left: "E", right: "MAIL" },
            icon: (
                <svg className="w-6 h-6" fill="white" viewBox="0 0 24 24">
                    <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-.904.732-1.636 1.636-1.636h.749L12 10.724l9.615-6.903h.749c.904 0 1.636.732 1.636 1.636z"/>
                </svg>
            ),
            bgColor: "bg-black"
        }
    ]


        return(
            <>
                <section className={`min-h-screen pt-60 pb-40 px-6 relative overflow-hidden ${isDark ? "bg-black text-white" : "bg-white text-black"}`}>
                    <div className="text-center mb-70" id="contact">
                         <HoverEffect>
                        <h2 className={`text-sm tracking-wider ${isDark ? 'text-gray-400' : 'text-gray-600'}`} style={{ fontFamily: 'ppmond, sans-serif' }}>
                            -CONTACT-
                        </h2>
                        </HoverEffect>
                    </div>

                    <div className="mb-16 flex justify-center">
                        <div className="relative">
                            <HoverEffect>
                            <div className={`text-lg tracking-wider ${isDark ? 'text-gray-400' : 'text-gray-600'} absolute -top-8 left-0`} style={{ fontFamily: 'SKCuber, sans-serif' }}>
                               //DON'T BE SHY 
                               
                            </div>
                            </HoverEffect>
                            
                            <div className="flex items-center gap-4">
                                <img src={`${isDark ? "/asterisco.svg" : "/asteriscopreto.svg"}`} className="w-10 h-10 mr-3">
                                </img>
                                <HoverEffect>
                                <h1 className="text-7xl " style={{ fontFamily: 'Roxborough, sans-serif' }}>
                                    CONTACT ME
                                </h1>
                                </HoverEffect>
                            </div>
                            
                        </div>
                    </div>

                    <div className="max-w-6xl mx-auto">
                        <div className="w-full mb-8">
                            <div className={`text-xs ${isDark ? 'text-gray-500' : 'text-gray-600'} mb-4`}>
                                (001)
                            </div>
                            <div className={`w-full h-px ${isDark ? 'bg-white' : 'bg-black'}`}></div>
                        </div>

                        <div className="grid grid-cols-2 items-start">
                            <div>
                                {links.map((link, index) => (
                                    <div key={index} className="mb-4" style={{ fontFamily: 'Disket, sans-serif' }}>
                                        <HoverEffect>
                                            <a href={link.url} className={`group flex items-center justify-between py-3 border-b transition-all duration-500 ${isDark ? 'border-white hover:border-gray-300' : 'border-black hover:border-gray-600'}`}>
                                                <div className="flex items-center relative overflow-hidden w-full">
                                                    <div className="flex items-center transition-all duration-500 ease-out">
                                                        <span className={`text-2xl font-light tracking-wide transition-all duration-500 ${isDark ? 'group-hover:text-gray-300' : 'group-hover:text-gray-600'}`}>
                                                            {link.splitText.left}
                                                        </span>

                                                        <div className={`w-0 h-0 ${link.bgColor} rounded-md flex items-center justify-center transition-all duration-500 ease-out group-hover:w-16 group-hover:h-12 `}>
                                                            <span className="text-white text-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200">
                                                                {link.icon}
                                                            </span>
                                                        </div>

                                                        <span className={`text-2xl font-light tracking-wide transition-all duration-500  ${isDark ? 'group-hover:text-gray-300' : 'group-hover:text-gray-600'}`}>
                                                            {link.splitText.right}
                                                        </span>
                                                    </div>
                                                </div>
                                                <img src={isDark ? "/arrowdarkmode.svg" : "/arrowlightmode.svg"} className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300 ml-4">
                                                </img>
                                            </a>
                                        </HoverEffect>
                                    </div>
                                ))}
                            </div>

                            <div className="flex justify-end">
                                <div className={`rainbow rounded-lg overflow-hidden ${isDark ? 'bg-black' : 'bg-white'}`} style={{ width: '500px', height: '384px', position: 'relative',}}>
                                    <Dither
                                        waveColor={isDark ? [0.5, 1.5, 0.5] : [0.3, 0.8, 0.3]}
                                        backgroundColor={[0, 0, 0]}
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