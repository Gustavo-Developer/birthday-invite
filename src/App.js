import logo from "./logo.svg";
import "./App.css";

import meme from "./assets/meme.png";

function App() {
  return (
    <div className="App">
    <div style={{display: "hidden"}}>
    <iframe width="560" height="auto" src="https://www.youtube.com/embed/EEhGLRl--LE?si=Qpu5SUTrRsdHgYiz" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen />
    </div> 
    <div className="gradient-border content" id="box">
        <img
          className="image"
          src={meme}
          alt="Meme"
          style={{ width: "100px", height: "auto" }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <p style={{ marginTop: "20px", textAlign: "center" }}>PARABÉNNNNS</p>
          <p style={{ margin: "0" }}>ANANDA</p>
          <p style={{ color: "#C0392B", margin: "10px", fontWeight: "bold" }}>
            21 ANOS
          </p>
        </div>
        <p style={{ fontSize: "22px" }}>Sábado, 3 de Fevereiro as 18H</p>
        <p
          style={{
            textDecoration: "underline",
            fontSize: "22px",
            textAlign: "center",
            margin: "10px" 
          }}
        >
          Rua Agostinho de Andrade, N.57 - JD. Vera Cruz
        </p>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3655.6823976942096!2d-46.47306372391274!3d-23.61572076359303!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce688f9d0d5d0b%3A0xfe2c9e4adf008b36!2sR.%20Agostinho%20de%20Andrade%2C%20N%C2%B057%20-%20Jardim%20Vera%20Cruz(Zona%20Leste)%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2008330-130!5e0!3m2!1spt-BR!2sbr!4v1706283273552!5m2!1spt-BR!2sbr"
          width="90%"
          height="100px"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        />

        <p style={{ fontSize: "22px",textAlign: "center" }}>Bebibas deveram ser adquiridas no Local</p>
        <p style={{ fontSize: "22px",textAlign: "center" }}>Contamos com você ❤️ </p>

      </div>
    </div>
  );
}

export default App;
