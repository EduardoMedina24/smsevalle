import React, { useState, useEffect } from "react";
import { CssBaseline, Typography, Container, Box } from "@mui/material";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
  useLocation,
} from "react-router-dom";
import Navbar from "./components/Navbars/Navbar";
import QuickAccess from "./components/quickAccess/QuickAccess";
import InfanciaPage from "./pages/InfanciaPage";
import AccionComunalPage from "./pages/AccionComunalPage";
import VejezPage from "./pages/VejezPage";
import AdolescenciaPage from "./pages/AdolescenciaPage";

const VoiceNavigator = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      // Inicializar el reconocimiento de voz
      const recognition = new (window.SpeechRecognition ||
        window.webkitSpeechRecognition)();
      recognition.stop(); // Desactiva el micrófono antes de comenzar

      // Configurar el reconocimiento de voz
      recognition.continuous = true; // Escuchar continuamente
      recognition.interimResults = true; // Permite obtener resultados intermedios
      recognition.maxAlternatives = 1; // Número máximo de alternativas que se muestran

      // Configurar síntesis de voz para la bienvenida
      const welcomeMessage = new SpeechSynthesisUtterance(
        "Bienvenidos a SMSEValle. Indíquenos qué quiere conocer hoy: infancia, adolescencia, vejez o acción comunal."
      );
      welcomeMessage.lang = "es-ES"; // Configurar el idioma en español
      welcomeMessage.pitch = 1; // Tono
      welcomeMessage.rate = 1; // Velocidad

      // Reproducir el mensaje de bienvenida
      window.speechSynthesis.speak(welcomeMessage);

      // Iniciar el reconocimiento de voz después de la bienvenida
      welcomeMessage.onend = () => {
        recognition.start(); // Comienza a escuchar después de la nota de voz
      };

      recognition.onresult = (event) => {
        const transcript = event.results[event.results.length - 1][0].transcript
          .trim()
          .toLowerCase();
        console.log("Comando detectado:", transcript);

        // Aquí va la lógica para navegar a las páginas según el comando de voz
        if (transcript.includes("inicio") || transcript.includes("home")) {
          navigate("/");
        } else if (transcript.includes("infancia")) {
          navigate("/infancia");
        } else if (
          transcript.includes("adolescencia") ||
          transcript.includes("juventud")
        ) {
          navigate("/adolescencia");
        } else if (transcript.includes("vejez")) {
          navigate("/vejez");
        } else if (transcript.includes("acción comunal")) {
          navigate("/accioncomunal");
        }
      };

      recognition.onerror = (event) => {
        console.error("Error de reconocimiento de voz:", event.error);
      };

      recognition.onend = () => {
        console.log("Reconocimiento de voz terminado.");
        recognition.start(); // Reinicia el reconocimiento para que siga escuchando
      };
    }
  }, [location.pathname, navigate]);

  return null;
};

// Carrusel sin dependencias externas
const CustomCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    {
      title: "Infancia",
      img: "/img/descargar.jpg",
    },
    {
      title: "Adolescencia",
      img: "/img/descargar.jpg",
    },
    { title: "Vejez", img: "/img/descargar.jpg" },
    {
      title: "Acción Comunal",
      img: "/img/descargar.jpg",
    },
  ];

  // Función para ir al siguiente slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  // Función para ir al slide anterior
  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + slides.length) % slides.length
    );
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000); // Cambiar cada 3 segundos
    return () => clearInterval(interval); // Limpiar el intervalo al desmontar el componente
  }, []);

  return (
    <div className="carousel-container">
      <div className="carousel-slide">
        <img src={slides[currentIndex].img} alt={slides[currentIndex].title} />
        <Typography variant="h6">{slides[currentIndex].title}</Typography>
      </div>
      <div className="carousel-controls">
        <button onClick={prevSlide} className="carousel-button">
          ←
        </button>
        <button onClick={nextSlide} className="carousel-button">
          →
        </button>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <CssBaseline />
      <Navbar />
      <VoiceNavigator />
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "40px",
        }}
      >
        <Container
          sx={{
            backgroundColor: "#aceed633",
            padding: "40px",
            borderRadius: "16px",
            boxShadow: "0px 10px 40px rgba(0, 0, 0, 0.2)",
            maxWidth: "900px",
            textAlign: "center",
            animation: "fadeIn 1.2s ease-in-out",
          }}
        >
          <Typography
            variant="h4"
            component="h1"
            gutterBottom
            sx={{
              fontWeight: "bold",
              letterSpacing: "0.15em",
              color: "#ff6f00",
              textShadow: "2px 2px 5px rgba(0,0,0,0.3)",
              textTransform: "uppercase",
            }}
          >
            Bienvenidos a SMSEVALLE
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{
              fontStyle: "italic",
              color: "#1e88e5",
              marginBottom: "20px",
              textShadow: "1px 1px 4px rgba(0,0,0,0.2)",
            }}
          >
            Sistema de Monitoreo, Seguimiento y Evaluación de las políticas
          </Typography>

          {/* Mostrar el carrusel solo en la página principal */}
          {window.location.pathname === "/" && <CustomCarousel />}

          <main>
            <Routes>
              <Route path="/" element={<QuickAccess />} />
              <Route path="/infancia" element={<InfanciaPage />} />
              <Route path="/adolescencia" element={<AdolescenciaPage />} />
              <Route path="/vejez" element={<VejezPage />} />
              <Route path="/accioncomunal" element={<AccionComunalPage />} />
            </Routes>
          </main>
        </Container>
      </Box>

      {/* Estilos CSS para el carrusel */}
      <style>
        {`
          .carousel-container {
            position: relative;
            width: 100%;
            max-width: 900px;
            margin: 0 auto;
          }

          .carousel-slide {
            position: relative;
            width: 100%;
            height: 400px;
            overflow: hidden;
            border-radius: 10px;
          }

          .carousel-slide img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 0.5s ease-in-out;
          }

          .carousel-controls {
            position: absolute;
            top: 50%;
            left: 0;
            right: 0;
            display: flex;
            justify-content: space-between;
            transform: translateY(-50%);
            padding: 0 10px;
          }

          .carousel-button {
            background-color: rgba(0, 0, 0, 0.5);
            color: white;
            border: none;
            padding: 10px;
            cursor: pointer;
            font-size: 18px;
            border-radius: 50%;
            transition: background-color 0.3s;
          }

          .carousel-button:hover {
            background-color: rgba(0, 0, 0, 0.8);
          }
        `}
      </style>
    </Router>
  );
};

export default App;
