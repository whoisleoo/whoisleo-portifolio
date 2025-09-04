import HoverEffect from "./HoverEffect"
import { useTheme } from "../context/ThemeContext"
import TiltedCard from "./TiltedCard";

function Work() {
    const { isDark, toggleTheme } = useTheme();

    return (
        <>
          <section className={`${isDark ? 'bg-black text-white' : 'bg-white text-black'} min-h-screen py-40 px-6 relative overflow-hidden`}>
            <div className="text-center mb-60">
                <h2 className={`text-sm tracking-wider ${isDark ? 'text-gray-400' : 'text-gray-600'}`} style={{ fontFamily: 'IBMPlex, sans-serif' }}>
                    -ABOUT ME-
                </h2>
            </div>

            <div className="relative mb-80 overflow-hidden" id="aboutme">
                <HoverEffect>
                <div className="flex items-center whitespace-nowrap animate-scroll" style={{ fontFamily: 'Roxborough, sans-serif' }}>
                    <span className="text-8xl tracking-wider mx-2">
                        WHO AM I?
                    </span>
                    <img src={isDark ? "/stardarkmode.svg" : "/starlightmode.svg"} className="w-30 h-30 mx-8"></img>
                    <span className="text-8xl tracking-wider mx-2">
                        WHO AM I?
                    </span>
                    <img src={isDark ? "/stardarkmode.svg" : "/starlightmode.svg"} className="w-30 h-30 mx-8"></img>
                    <span className="text-8xl tracking-wider mx-2">
                        WHO AM I?
                    </span>
                    <img src={isDark ? "/stardarkmode.svg" : "/starlightmode.svg"} className="w-30 h-30 mx-8"></img>
                    <span className="text-8xl tracking-wider mx-2">
                        WHO AM I?
                    </span>
                    <img src={isDark ? "/stardarkmode.svg" : "/starlightmode.svg"} className="w-30 h-30 mx-8"></img>
                    <span className="text-8xl tracking-wider mx-2">
                        WHO AM I?
                    </span>
                    <img src={isDark ? "/stardarkmode.svg" : "/starlightmode.svg"} className="w-30 h-30 mx-8"></img>
                </div>
                </HoverEffect>
            </div>

            <div className="max-w-6xl mx-auto">
                
                <div className="text-center mb-15">
                    <div className="flex justify-center items-baseline gap-8 relative">
                        <HoverEffect>
                        <h1 className="text-8xl leading-none italic" style={{ fontFamily: 'Roxborough, sans-serif' }}>
                            Leonardo
                        </h1>
                        </HoverEffect>
                        <div className="relative">
                            <HoverEffect>
                            <h1 className="text-8xl leading-none italic" style={{ fontFamily: 'Roxborough, sans-serif' }}>
                                Marconato
                            </h1>
                            <p className={`text-3xl tracking-wider ${isDark ? 'text-white' : 'text-black'} absolute -bottom-8 left-19 whitespace-nowrap`} style={{ fontFamily: 'Disket, sans-serif' }}>
                               SOFTWARE DEVELOPER
                            </p>
                            </HoverEffect>
                        </div>
                    </div>
                </div>


                <div className="grid grid-cols-2 gap-10 items-center ml-10">
                    <div className="flex justify-center hover:cursor-none">
                        <TiltedCard
                            imageSrc="/leonardo.jpg"
                            altText="Leonardo Marconato"
                            captionText="STOP TOUCHING ME!"
                            containerHeight="600px"
                            containerWidth="440px"
                            imageHeight="600px"
                            imageWidth="440px"
                            rotateAmplitude={12}
                            scaleOnHover={0.9}
                            showMobileWarning={false}
                            showTooltip={true}
                            displayOverlayContent={false}
                        />
                    </div>

                    <div className="pt-16">
                        <div className="space-y-8">
                            <p className={`${isDark ? 'text-gray-300' : 'text-gray-700'} leading-relaxed text-xl`}>
                                
                                Sou um desenvolvedor que ama muito programar não tem nada melhor do que ser amigo do bernardinho kuster ragugneti.
                            </p>
                            <p 
                                    className={`${isDark ? 'text-gray-300' : 'text-gray-700'} leading-relaxed text-xl`}
                                    
                                >
                                    nunca me estresso. Trabalho na bmz advogados um ótimo trabalho com ótimas pessoas e gestores de Kommo! serio eles são muito bons!
                                </p>
                                <p 
                                    className={`${isDark ? 'text-gray-300' : 'text-gray-700'} leading-relaxed text-xl`}
                                    
                                >
                                    Curso engenharia de software e busco todo dia me desenvolver para ser o melhor programador do mundo inteiro.
                                </p>
                        </div>
                        <div className="pt-30 flex justify-end">
                            <HoverEffect>
                                <button className={`group flex items-center gap-3 border ${isDark ? 'border-white/30 hover:border-white/60' : 'border-black/30 hover:border-black/60'} rounded-3xl px-8 py-4 transition-all duration-300`}>
                                    <span className="tracking-wide" style={{ fontFamily: 'SKCuber, sans-serif' }}>
                                        CONTACT
                                    </span>
                                    <img src={isDark ? "/arrowdarkmode.svg" : "/arrowlightmode.svg"} className="w-4 h-4 group-hover:scale-110 transition-transform duration-300"></img>
                                </button>
                            </HoverEffect>
                        </div>
                    </div>
                </div>
            </div>

          </section>

        </>
    )
}

export default Work