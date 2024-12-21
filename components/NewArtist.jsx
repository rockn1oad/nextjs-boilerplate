function NewArtist() {
  return (
    <form>
      <p>
        <label htmlFor="artist">Artist Name</label>
        <input type="text" placeholder="Artist Name" name="artist"/>
      </p>
      <p>
        <label htmlFor="image">Img URL</label>
        <input type="text" placeholder="Img URL" name="image"/>
      </p>

    </form>
  );
}

export default NewArtist;