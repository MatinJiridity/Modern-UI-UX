import React from 'react';
import { BsPlayFill, BsPauseFill } from 'react-icons/bs';
import './Intro.css';
import { meal } from '../../constants';

const Intro = () => {
  const [playVideo, setPlayVideo] = React.useState(false)
  const vidref = React.useRef();
  const handleVideo = () => {
    setPlayVideo((prevPlayVideo) => !prevPlayVideo);
    if (playVideo) {
      vidref.current.pause();
    } else {
      vidref.current.play();
    }
  }
  return (
    <div className='app__video'>
      <video src={meal} type='video/mp4' loop controls={false} muted ref={vidref} />
      <div className="app__video-overlay flex__center">
        <div
          className="app__video-overlay_circle flex__center"
          onClick={handleVideo}
        >
          {
            playVideo ?
              <BsPauseFill color='#fff' size={30} />
              :
              <BsPlayFill color='#fff' size={30} />
          }
        </div>
      </div>
    </div>
  )
};

export default Intro;
