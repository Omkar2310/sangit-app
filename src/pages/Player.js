import React from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

const Player = ({trackDetail,token}) => {
    console.log(trackDetail);
    console.log(token);
    
    

    return(
        <div className="myplayer">
            <AudioPlayer autoPlay
            src={trackDetail.preview_url}
            onPlay={e => console.log("onPlay")}
            // other props here
            showDownloadProgress
            />
        </div>
    );
}

export default Player;
