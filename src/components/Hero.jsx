import HoverEffect from "./HoverEffect"
import { useTheme } from "../context/ThemeContext"

function HeroBackground() {

    const { isDark, toggleTheme } = useTheme();
// style={{ fontFamily: 'Roxborough, sans-serif' }}
// style={{ fontFamily: 'SKCuber, sans-serif' }}
// style={{ fontFamily: 'IBMPlex, sans-serif' }}

// MOON SVG TO DARK MODE
//<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  //<path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
//</svg>



  return (
    
    <>
      <div className={`${isDark ? 'bg-black text-white' : 'bg-white text-black'} min-h-screen w-full overflow-hidden`}>
        <header className="absolute top-0 left-0 right-0 z-50 p-2 m-10">
        <div className="flex justify-between items-start">
            <div className="text-xs flex items-start gap-2" style={{ fontFamily: 'IBMPlex, sans-serif' }}>
                <img src={`${isDark ? "/asterisco.svg" : "/asteriscopreto.svg"}`} className="w-5 h-5 animatedLogo"></img>
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
               <img src={`${isDark ? "./trademark.png" : "./trademarkblack.png"}`} className="w-5 h-5 mt-1"></img>
            </div>
            </HoverEffect>
            <div className="text-xs flex items-center gap-2" style={{ fontFamily: 'IBMPlex, sans-serif' }}>
                <button onClick={toggleTheme} className="hover:scale-120 transition-transform">
                    {isDark ? (
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
                        </svg>
                    )}
                    
                </button>
                <div>
                    Folio
                    <div className="ml-3">
                        Vol.1 —
                    </div>
                </div>
            </div>
        </div>
        </header>




        <main className="h-screen w-full flex flex-col justify-center items-center relative">
            <HoverEffect>
            <div className="absolute inset-0 flex justify-center items-center">
               <img src={`${isDark ? "./logo2.svg" : "./logo2white.svg"}`}  className="w-120 h-120 rainbow opacity-80"  alt="Background"/>
            </div>
            </HoverEffect>

    <div className="text-center relative z-10 w-full flex flex-col items-center">
        <HoverEffect>
        <h1 className="text-9xl mb-4 leading-none font-normal" style={{ fontFamily: 'Roxborough, sans-serif' }}>
            LEONARDO
        </h1>
        </HoverEffect>
        
        <HoverEffect>
        <h1 className="text-9xl leading-none font-normal" style={{ fontFamily: 'SKCuberOut, sans-serif' }}>
            MARCONATO
        </h1>
        </HoverEffect>
    </div>
</main>




<footer class="absolute bottom-0 left-0 right-0 z-50 m-5 p-7" style={{ fontFamily: 'IBMPlex, sans-serif' }}>
        <div class="flex justify-between items-end text-xs">
            <div class="space-y-1">
                <div class="text-gray-500">01</div>
                <a href="#works" className="hover:text-pink-700 hover:transition-colors" onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('works')?.scrollIntoView({ behavior: 'smooth' });
                }}>WORKS</a>
            </div>
            
            <div class="space-y-1">
                <div class="text-gray-500">02</div>
                <a href="#aboutme" className="hover:text-pink-700 hover:transition-colors" onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('aboutme')?.scrollIntoView({ behavior: 'smooth' });
                }}>ABOUT</a>
            </div>
            
            <div class="space-y-1">
                <div class="text-gray-500">03</div>
                <a href="" className="hover:text-pink-700 hover:transition-colors" onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}>CONTACT</a>
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