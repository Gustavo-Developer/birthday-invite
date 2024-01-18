import logo from "./logo.svg";
import "./App.css";
import ReactAudioPlayer from "react-audio-player";

import parabensvideo from "./assets/parabens.mp4";
import parabensaudio from "./assets/parabens-audio.mp3";
import meme from "./assets/meme.png";

function App() {
  return (
    <div className="App">
      <audio src={parabensaudio} autoPlay={true} playsinline />
      <div className="video">
        <div>
          <video
            src={parabensvideo}
            autoPlay="true"
            width="100%"
            height="100%"
            muted
            playsinline
            loop
            style={{
              position: "absolute",
            }}
          />

          <div
            className="text"
            style={{
              position: "relative",
            }}
          >
            <div>
              <img
                className="image"
                src={meme}
                alt="Meme"
                style={{ width: "100px", height: "auto" }}
              />

              <p style={{ marginTop: "100px" }}>REPI BARDEI TIU IU</p>

              <div>
                <p>ANANDA</p>
                <p style={{ color: "#C0392B" }}>21 ANOS</p>
              </div>

              <p>SABADO, 3 DE FEVEREIRO AS 16H</p>
              <p>AQUI EM CASA MESMO</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
