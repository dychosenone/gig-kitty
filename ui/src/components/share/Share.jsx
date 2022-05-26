import Kianna from './assets/kianna.jpg';
import Media from './assets/media-icon.svg';

import './share.css';

export default function Share() {
  return (
    <div className="share-container">
        <div className="share-wrapper">
            <div className="share-top-segment">
                <img src={Kianna} alt="pfp" id="share-pfp"/>
                <input 
                    className="share-input"
                    placeholder="What's on your mind?" 
                />
            </div>
            <hr className="share-line"/>
            <div className="share-bottom">
                <div className="share-options">
                    <div className="share-option">
                        <img 
                            src={Media} 
                            alt="share-icon"
                            id="share-media-icon"
                        />
                        <span className="share-option-text">Photo or Video</span>
                    </div>
                </div>
                <div className ="share-upload">
                    <p className="share-upload-text">Share</p>
                </div>
            </div>
        </div>
    </div>
  )
}
