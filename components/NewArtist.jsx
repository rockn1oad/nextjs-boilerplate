'use client'

function NewArtist(props) {

  return (
    <form>
      <p>
        <label htmlFor="body">Body</label>
        <input type="text" id="body" required rows={3} onChange={props.onBodyChange} />
      </p>
      <p>
        <label htmlFor="artist">Artist Name</label>
        <input type="text" placeholder="Artist Name" name="artist" onChange={props.onArtistChange} />
      </p>
      <p>
        <label htmlFor="image">Img URL</label>
        <input type="text" placeholder="Img URL" name="image"/>
      </p>

      {/* <iframe 
        width="100%"
        height="900"
        title="Spotify Embed: My Path to Spotify: Women in Engineering" 
        
        frameBorder="0"
        allowFullScreen
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture\"
        src="https://open.spotify.com/embed/artist/59vE6GY3kzc3YTpMtW1uoD?utm_source=oembed"></iframe> */}

    </form>
  );
}

export default NewArtist;