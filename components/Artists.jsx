import Artist from "@/components/Artist";
import NewArtist from "@/components/NewArtist";

const artist = [
  {
    title: "Kill Chicago",
    img: "html",
    body: "Kill Chicago have a careful knack for weaving heartfelt messages through boisterous rock’n’roll. Natural storytellers with a political core, this New Brunswick-based quartet has made a name for itself through electrifying live shows and an honesty that reflects their blue collar beginnings. This group is nothing if not dedicated members of their local community. When not performing, Greg Webber (guitar/vox) teaches music at Fredericton High, developing the next generation of artists; Drummer Zach Atkinson is owner and promoter at the legendary venue The Capital, and both Matt Bowie (bass) and Dillon Anthony (guitar/keyboards) are seasoned veterans of the east coast music scene. Together, they’re politically-charged and community-minded, thick-skinned but with a sentimental core. They're a group that’s gained the grit of experience. They’ve been on both sides of the fence but know that grass is only greener when you put the time in to make it that way. Writing songs for the working class and building up the bereft."
  },
  {
    title: "Before The Dinosaurs",
    img: "react",
  },
  {
    title: "Melonvine",
    value: "vue",
  },
  {
    label: "Sig sour",
    value: "angular",
  },
  {
    label: "Too Bad Jim",
    value: "svelte",
  },
  {
    label: "North of Nowhere",
    value: "svelte",
  },
  {
    label: "Motorleague",
    value: "svelte",
  },
  {
    label: "Run the river",
    value: "svelte",
  },
  {
    label: "Secondsdown",
    value: "svelte",
  },
];

function Artists() {
  return (
    <div className="grid grid-cols-4 gap-4">
      {/* <NewArtist /> */}
      <Artist name="Before The Dinosaurs" img="before-the-dinosaurs.jpg" />
      <Artist name="Kill Chicago" img="http://loremflickr.com/g/250/100" />
      <Artist name="North of Nowhere" img="http://loremflickr.com/g/250/100" />
      <Artist name="Melonvine" img="http://loremflickr.com/g/250/100" />
      <Artist name="Motorleague" img="http://loremflickr.com/g/250/100" />
      <Artist name="Run the river" img="http://loremflickr.com/g/250/100" />
      <Artist name="Secondsdown" img="http://loremflickr.com/g/250/100" />
      <Artist name="Sig Sour" img="http://loremflickr.com/g/250/100" />
      <Artist name="Too Bad Jim" img="http://loremflickr.com/g/250/100" />
    </div>
  );
}

export default Artists;