import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { InvalidParameterPage } from './errorPage.jsx';
import axios from 'axios';

export const EventPage = () => {
  let { eventId } = useParams();
  const [photos, setPhoto] = useState("");
  if (eventId.length != 5) {
    return (
      <InvalidParameterPage />
    )
  }

  useEffect(() => {
    const fetchPhoto = async () => {
      const result = await axios('https://afterPartyBackend.levys1.repl.co/events/' + eventId + '/photos')
      let eventPhotos = []
      console.log(result.data)
      for (let i = 0; i < result.data.length; i++) {
        eventPhotos.push((<li key={result.data[i]}><img src={result.data[i]} alt="photo not found"></img></li>));
      }
      setPhoto(eventPhotos);
    };

    fetchPhoto();
  }, []);

  return (
    <main>
      <div>
        <h1>
          Event Page
        </h1>
        <div class="event-photos">
          {photos}
        </div>
      </div>
    </main>)
}

export default EventPage