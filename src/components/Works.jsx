import HoverEffect from "./HoverEffect";
import Iridescence from "./WorkBackground";
import { useTheme } from "../context/ThemeContext";
import FadeContent from "./UX/FadeContent";
import AnimatedContent from "./UX/AnimatedContent";

function Work() {
  const { isDark, toggleTheme } = useTheme();
  const meusProjetos = [
    {
      id: 1,
      author: "WHOISLEO",
      title: "TASK-HUB",
      description:
        "TASK-HUB IS A COMPLETE TASK MANAGEMENT SYSTEM DEVELOPED WITH ELECTRON. IT OFFERS A MODERN AND INTUITIVE INTERFACE TO ORGANIZE PROJECTS AND INCREASE YOUR PRODUCTIVITY.",
      color: [0.2, 0.8, 1],
      link: "https://github.com/whoisleoo/Electron-Todo-List",
    },
    {
      id: 2,
      author: "WHOISLEO AND RENDER",
      title: "CODDUO-OS",
      description:
        "CODDUO-OS IS A CUSTOMIZED ARCH-LINUX DISTRIBUTION WITH ARCHISO OPTIMIZED FOR DEVELOPERS WHO WANT TO TEST PROGRAM INTERFACES WITHOUT DEPENDING ON COMPUTER POWER.",
      color: [0.8, 0.2, 1],
      link: "https://github.com/whoisleoo/CODDUO_OS",
    },
    {
      id: 3,
      author: "WHOISLEO",
      title: "MARKETPLACE",
      description:
        "E-COMMERCE PLATFORM UNDER DEVELOPMENT WITH REACT, NODE.JS AND POSTGREESQL.",
      color: [5, 0.7, 0.2],
      link: "https://github.com/whoisleoo/marketplace-model",
    },
    {
      id: 4,
      author: "WHOISLEO",
      title: "ENCURTADOR URL",
      description:
        "A basic URL shortener that turns any link into a custom named URL.",
      color: [0.4, 1, 0.4],
      link: "https://github.com/whoisleoo/encurtador_url",
    },
    {
      id: 5,
      author: "WHOISLEO",
      title: "PORTIFOLIO",
      description:
        "PERSONAL PORTFOLIO DEVELOPED IN REACT AND TAILWIND FOR STORAGE OF PROJECTS AND PERSONAL KNOWLEDGE.",
      color: [0.6, 0.2, 0.3],
      link: "https://github.com/whoisleoo/whoisleo-portifolio",
    },
  ];

    return (
        <>
           <section id="works" className={`${isDark ? 'bg-black text-white' : 'bg-white text-black'} min-h-screen py-20 px-6 relative overflow-hidden`}>
                <AnimatedContent
                    distance={80}
                    direction="vertical"
                    duration={1}
                    delay={300}
                >
                <div className={`mb-20 text-center py-12 ${isDark ? 'text-gray-500' : 'text-gray-600'}`}>
                    <h2 style={{ fontFamily: 'ppmond, sans-serif' }}>
                        -SELECTED WORK-
                    </h2>
                </div>
                </AnimatedContent>

                <div className="max-w-6xl mx-auto space-y-32 px-8">
                    {meusProjetos.map((project, index) => (
                        <FadeContent
                            delay={200 + (index * 300)}
                            duration={1200}
                            threshold={0.2}
                        >
                        <HoverEffect key={project.id}>
                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="relative block">
                            <div className="group cursor-pointer">
                                <div className="mb-4">
                                    <div className="relative">
                                        <div className={`text-xs tracking-wider ${isDark ? 'text-gray-400' : 'text-gray-600'} ml`} style={{ fontFamily: 'SKCuber, sans-serif' }}>
                                            {project.author}
                                        </div>
                                        <div className="flex items-start justify-between">
                                            <h3 className={`text-8xl leading-none tracking-wide group-hover:tracking-wider transition-all duration-500 border-b py-2 ${isDark ? 'border-gray-500' : 'border-gray-400'} flex-1`} style={{ fontFamily: 'Roxborough, sans-serif' }}>
                                                {project.title}
                                            </h3>
                                            <div className={`w-12 h-12 ${isDark ? 'bg-white text-black' : 'bg-black text-white'} rounded-lg flex items-center justify-center p-3 ml-4 mt-2 group-hover:scale-110 transition-all`}>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="relative w-150 h-25 rounded-2xl overflow-hidden">
                                        <div className="absolute inset-0 opacity-70">
                                            <Iridescence color={project.color} mouseReact={true} amplitude={0.1} speed={0.10} />
                                        </div>
                                    </div>

                                    <div className={`w-px h-30 ${isDark ? 'bg-gray-500' : 'bg-gray-400'} -mt-4`}></div>

                                    <div className="flex-1">
                                        <p className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'} leading-relaxed max-w-sm text-left`} style={{ fontFamily: 'IBMPlex, sans-serif' }}>
                                            {project.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </a>
                        </HoverEffect>
                        </FadeContent>
                    ))}
                </div>

           </section>

        </>
    )
}

export default Work;
