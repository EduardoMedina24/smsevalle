import React, { useEffect, useState } from 'react';

const VoiceAssistant = ({ navigate }) => {
  const [isListening, setIsListening] = useState(false);
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  const recognition = SpeechRecognition ? new SpeechRecognition() : null;

  const synth = window.speechSynthesis;

  useEffect(() => {
    if (!recognition) {
      console.error('API de reconocimiento de voz no soportada');
      return;
    }

    // Configuración inicial del reconocimiento
    recognition.continuous = true;
    recognition.lang = 'es-ES';
    recognition.onstart = () => setIsListening(true);
    recognition.onend = () => setIsListening(false);

    // Procesamiento de comandos
    recognition.onresult = (event) => {
      const transcript = event.results[event.results.length - 1][0].transcript.trim().toLowerCase();
      handleCommand(transcript);
    };

    // Inicio del reconocimiento
    startRecognition();

    return () => recognition.stop(); // Limpieza al desmontar
  }, []);

  const startRecognition = () => {
    if (recognition) {
      recognition.start();
    }
  };

  const speak = (text) => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'es-ES';
    synth.speak(utterance);
  };

  const handleCommand = (command) => {
    if (command.includes('primera infancia')) {
      speak('Redirigiendo a Primera Infancia.');
      navigate('/infancia');
    } else if (command.includes('inicio')) {
      speak('Redirigiendo a la página principal.');
      navigate('/');
    } else if (command.includes('informes')) {
      speak('Redirigiendo a informes.');
      navigate('/informes');
    } else {
      speak('No entendí el comando. Por favor, intente de nuevo.');
    }
  };

  useEffect(() => {
    // Bienvenida inicial
    speak('Bienvenido a SMSEValle. Diga el nombre de una sección, como Primera Infancia, para navegar.');
  }, []);

  return (
    <div>
      <button onClick={startRecognition}>Iniciar Reconocimiento de Voz</button>
      {isListening ? <p>Asistente de voz activo...</p> : <p>Activando reconocimiento de voz...</p>}
    </div>
  );
};

export default VoiceAssistant;
