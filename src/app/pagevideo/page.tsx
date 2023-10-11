'use client'
import React, { useEffect, useRef } from 'react';
import { useSearchParams } from 'next/navigation';
import data from './video.json';
import './pagevideo.css';

function PageVideo() {
  const searchParams = useSearchParams();
  const nom = searchParams.get('nom');
  const videoRef = useRef(null);

  // Recherchez la vidéo correspondante dans le fichier JSON
  const videoData = data.find((video) => video[nom]);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.volume = 0.1; // Définit le volume à 10%
    }
  }, [nom]);

  return (
    <div className='center'>
      {videoData && (
        <div className='typo inline size'>
          <video controls ref={videoRef}>
            <source src={`./${nom}.mp4`} type="video/mp4" />
          </video>
          <h1>{nom} <br /><br />{videoData[nom]}</h1>
        </div>
      )}
    </div>
  );
}

export default PageVideo;
