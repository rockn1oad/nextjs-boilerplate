'use client'

import { useState } from 'react';

import Artist from "@/components/Artist";
import NewArtist from "@/components/NewArtist";
import Modal from "@/components/Modal";


function Artists() {
  const [enteredBody, setEnteredbody] = useState('');
  const [enteredArtist, setEnteredArtist] = useState('');

  function bodyChangeHandler(event) {
    setEnteredbody(event.target.value);
  }

  function ArtistChangeHandler(event) {
    setEnteredArtist(event.target.value);
  }

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
      {/* <Modal>
        <NewArtist 
          onArtistChange={ArtistChangeHandler} 
          onBodyChange={bodyChangeHandler} 
        />
      </Modal> */}
      {/* <Artist name={enteredBody} body={enteredArtist} img="before-the-dinosaurs.jpg" /> */}
      <Artist name="Before The Dinosaurs" img="artists/before-the-dinosaurs.jpg" />
      <Artist name="Kill Chicago" img="artists/kill-chicago.jpg" />
      <Artist name="North of Nowhere" img="artists/north-of-nowhere.jpeg" />
      <Artist name="Melonvine" img="artists/melonvine.jpg" />
      <Artist name="Motorleague" img="artists/the-motorleague.jpg" />
      <Artist name="Run the river" img="artists/run-the-river.jpg" />
      <Artist name="Secondsdown" img="artists/seconsdown.jpg" />
      <Artist name="Sig Sour" img="sig-sour.jpg" />
      <Artist name="Too Bad Jim" img="too-bad-jim.jpg" />
    </div>
  );
}

export default Artists;