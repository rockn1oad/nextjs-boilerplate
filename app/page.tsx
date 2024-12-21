import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Artists from '@/components/Artists'

export default function Home() {

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">

        <h1 className="text-3xl font-bold uppercase">Don's Music<br />Boutique</h1>


        <Tabs defaultValue="artist" className="w-[1200px]">
          <TabsList>
            <TabsTrigger value="artist">Artist</TabsTrigger>
            <TabsTrigger value="releases">Releases</TabsTrigger>
            <TabsTrigger value="schedual">Schedual</TabsTrigger>
          </TabsList>
          <TabsContent value="artist">

          <Artists />

          </TabsContent>
          <TabsContent value="releases">Releases will be Here</TabsContent>
          <TabsContent value="schedual">A list of Events or releases</TabsContent>
        </Tabs>


      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">

      </footer>
    </div>
  );
}
