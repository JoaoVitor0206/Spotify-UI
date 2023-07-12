import { Home as HomeIcon, Search, Library, ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <aside className="w-72 bg-zinc-950 p-6">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"/>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"/>
            <div className="w-3 h-3 bg-green-500 rounded-full"/>
          </div>
          <nav className="space-y-5 mt-10">
            <a href="" className="flex items-center gap-3 text-sm font-semibold text-zinc-200">
              <HomeIcon />
              Home
            </a>
            <a href="" className="flex items-center gap-3 text-sm font-semibold text-zinc-200">
              <Search />
              Search
            </a>
            <a href="" className="flex items-center gap-3 text-sm font-semibold text-zinc-200">
              <Library />
              Your Library
            </a>
          </nav>
          
          <nav className="mt-6 pt-6 border-t border-zinc-800 flex flex-col gap-3">
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Playlist Jv</a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Vibes</a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Treino</a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Sofrência</a>
          </nav>
        </aside>
        <main className="flex-1 p-6">
          <div className="flex items-center gap-4">
            <button className="rounded-full bg-black/40 p-1">
              <ChevronLeft />
            </button>
            <button className="rounded-full bg-black/40 p-1">
              <ChevronRight />
            </button>
          </div>

          <h1 className="font-semibold text-3xl mt-10">Good Afternoon</h1>

          <div className="grid grid-cols-3 gap-4 mt-4">
            <div className="bg-white/10 rounded flex items-center gap-4 overflow-hidden">
              <Image src="/album1.jpg" width={104} height={104} alt="álbum 1" />
              <strong>Blurryface</strong>
            </div>
            <div className="bg-white/10 rounded flex items-center gap-4 overflow-hidden">
              <Image src="/album2.jpg" width={104} height={104} alt="álbum 2" />
              <strong>All Hope Is Gone</strong>
            </div>
            <div className="bg-white/10 rounded flex items-center gap-4 overflow-hidden">
              <Image src="/album3.jpg" width={104} height={104} alt="álbum 3" />
              <strong>Máquina do Tempo</strong>
            </div>
            <div className="bg-white/10 rounded flex items-center gap-4 overflow-hidden">
              <Image src="/album4.jpg" width={104} height={104} alt="álbum 4" />         
              <strong>Abbey Road</strong>
            </div>
            <div className="bg-white/10 rounded flex items-center gap-4 overflow-hidden">
              <Image src="/album5.jpg" width={104} height={104} alt="álbum 5" />
              <strong>The Eminem Show</strong>
            </div>
            <div className="bg-white/10 rounded flex items-center gap-4 overflow-hidden">
              <Image src="/album6.jpg" width={104} height={104} alt="álbum 6" />
              <strong>Starboy</strong>
            </div>
          </div>
        </main>
      </div>
      <footer className="bg-zinc-800 border-t border-zinc-700 p-6">
        footer
      </footer>
    </div>
  )
}
