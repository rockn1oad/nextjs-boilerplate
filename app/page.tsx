import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">

        <h1 className="text-3xl font-bold uppercase">Don's Music<br />Boutique</h1>

        <div className="flex gap-4 items-center flex-col sm:flex-row px-3">
          <nav className="uppercase flex gap-10">
            <button>Artist</button>
            <button>Releases</button>
            <button>Schedual</button>
          </nav>
        </div>

        <ul>
          <li>Kill Chicago</li>
          <li>Before The Dinosaurs</li>
          <li>Melonvine</li>
          <li>Sig sour</li>
          <li>Too bad jim</li>
          <li>North of nowhere</li>
          <li>Run the river</li>
          <li>Run the river</li>
          <li>Motorleague</li>
          <li>Secondsdown</li>
        </ul>


      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
       
      </footer>
    </div>
  );
}
