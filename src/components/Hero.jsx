import HoverEffect from "./HoverEffect"
import Particles from "./Particle"

function HeroBackground() {
// style={{ fontFamily: 'Roxborough, sans-serif' }}
// style={{ fontFamily: 'SKCuber, sans-serif' }}
// style={{ fontFamily: 'IBMPlex, sans-serif' }}


  return (
    <>
      <div className="bg-black text-white min-h-screen w-full overflow-hidden " >
        <header className="absolute top-0 left-0 right-0 z-50 p-2 m-10">
        <div className="flex justify-between items-start">
            <div className="text-xs flex items-start gap-2" style={{ fontFamily: 'IBMPlex, sans-serif' }}>
                <img src="/asterisco.svg" className="w-5 h-5 animatedLogo"></img>
                <div>
                    Open for any
                    <div>
                        collaborations and offers
                    </div>
                </div>
            </div>
            <HoverEffect>
            <div style={{ fontFamily: 'SKCuber, sans-serif' }} className="absolute left-1/2 transform -translate-x-1/2 py-5 text-3xl flex items-start gap-2">
               <div>
                   <span>WHOIS</span><a href="https://github.com/whoisleoo" className="hover:text-pink-700 hover:transition-colors">LEO</a>
               </div>
               <img src="/trademark.png" className="w-5 h-5 mt-1"></img>
            </div>
            </HoverEffect>
            <div className="text-xs " style={{ fontFamily: 'IBMPlex, sans-serif' }}>
               <div>
                    Folio
               </div>
               <div className="ml-3">
                    Vol.1 —
               </div>
            </div>
        </div>
        </header>




        <main className="h-screen w-full flex flex-col justify-center items-center relative">
            <HoverEffect>
            <div className="absolute inset-0 flex justify-center items-center">
                <img src="/logo.svg"  className="w-110 h-110 rainbow"  alt="Background"/>
            </div>
            </HoverEffect>

    <div className="text-center relative z-10 w-full flex flex-col items-center">
        <HoverEffect>
        <h1 style={{ fontFamily: 'Roxborough, sans-serif' }} className="text-9xl mb-4 leading-none font-normal">
            LEONARDO
        </h1>
        </HoverEffect>
        <HoverEffect>
        <h2 style={{ fontFamily: 'SKCuberOut, sans-serif' }} className="text-9xl leading-none font-normal">
            MARCONATO
        </h2>
        </HoverEffect>
    </div>
</main>




<footer class="absolute bottom-0 left-0 right-0 z-50 m-5 p-7" style={{ fontFamily: 'IBMPlex, sans-serif' }}>
        <div class="flex justify-between items-end text-xs">
            <div class="space-y-1">
                <div class="text-gray-500">01</div>
                <a href="" className="hover:text-pink-700 hover:transition-colors">ABOUT</a>
            </div>
            
            <div class="space-y-1">
                <div class="text-gray-500">02</div>
                <a href="" className="hover:text-pink-700 hover:transition-colors">WORKS</a>
            </div>
            
            <div class="space-y-1">
                <div class="text-gray-500">03</div>
                <a href="" className="hover:text-pink-700 hover:transition-colors">CONTACT</a>
            </div>
            
            <div class="space-y-1">
                <div class="text-gray-500">04</div>
                <a href="" className="hover:text-pink-700 hover:transition-colors">ROADMAP</a>
            </div>
            <div class="text-right">
                <div>©2025</div>
            </div>
        </div>
    </footer>

      </div>
    </>
  )
}

export default HeroBackground