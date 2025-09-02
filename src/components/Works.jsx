import HoverEffect from "./HoverEffect"
import Iridescence from "./WorkBackground"

function Work() {
    const meusProjetos = [
        {
            id: 1,
            author: "WHOISLEO",
            title: "TASK-HUB",
            description: "TASK HUB É UMA APLICAÇÃO DE GERENCIAMENTO DE TAREFAS CRIADAS.",
            color: [0.2, 0.8, 1],
            link: "https://github.com/whoisleoo/Electron-Todo-List"
        },
        {
            id: 2,
            author: "WHOISLEO | RENDER",
            title: "CODDUO-OS",
            description: "CODDUO-OS É UM SUBSISTEMA ARCH LINUX BONITO E CRIADO DE FORMA PERFEITA!.",
            color: [0.8, 0.2, 1],
            link: "https://github.com/whoisleoo/CODDUO_OS"
        }
    ];

    return (
        <>
           <section className="min-h-screen bg-black text-white py-20 px-6 relative overflow-hidden">
                <div className="mb-20 text-center py-12 text-gray-500">
                    <h2 style={{ fontFamily: 'IBMPlex, sans-serif' }}> 
                        -SELECTED WORK-
                    </h2>
                </div>

                <div className="max-w-6xl mx-auto space-y-32 px-8">
                    {meusProjetos.map((project, index) => (
                        <HoverEffect>
                        <a key={project.id} href={project.link} target="_blank" rel="noopener noreferrer" className="relative block">
                            <div className="group cursor-pointer">
                                <div className="mb-4">
                                    <div className="relative">
                                        <div className="text-xs tracking-wider text-gray-400 ml" style={{ fontFamily: 'SKCuber, sans-serif' }}>
                                            {project.author}
                                        </div>
                                        <div className="flex items-start justify-between">
                                            <h3 className="text-8xl leading-none tracking-wide group-hover:tracking-wider transition-all duration-500 border-b py-2 border-gray-500 flex-1" style={{ fontFamily: 'Roxborough, sans-serif' }}>
                                                {project.title}
                                            </h3>
                                            <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center text-black p-3 ml-4 mt-2 group-hover:scale-110 transition-all">
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
                                            <Iridescence color={project.color} mouseReact={true} amplitude={0.1} speed={0.5} />
                                        </div>
                                    </div>

                                    <div className="w-px h-30 bg-gray-500 -mt-4"></div>

                                    <div className="flex-1">
                                        <p className="text-sm text-gray-300 leading-relaxed max-w-sm text-left" style={{ fontFamily: 'IBMPlex, sans-serif' }}>
                                            {project.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </a>
                        </HoverEffect>
                    ))}
                </div>

           </section>

        </>
    )
}

export default Work