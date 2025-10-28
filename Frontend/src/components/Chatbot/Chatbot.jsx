import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';

const Chatbot = () => {
  const [isMaximized, setIsMaximized] = useState(false);
  const [isMinimized, setIsMinimized] = useState(true); // Iniciar minimizado por defecto
  const { theme, toggleTheme } = useTheme();
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1024);
  
  const getInitialMessage = () => {
    if (theme === 'blue') {
      return '¡Hola! 👋 Soy el asistente PROFESIONAL de Nacho. ¿En qué puedo ayudarte a conocer más sobre su experiencia y habilidades?';
    } else {
      return 'Hola... 🙄 Soy el asistente "sincero" de Nacho. Pregunta lo que quieras, te diré la verdad (con un poco de sarcasmo incluido).';
    }
  };

  const [messages, setMessages] = useState([
    {
      type: 'bot',
      text: getInitialMessage()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  // Actualizar mensaje inicial cuando cambia el tema
  useEffect(() => {
    const initialMessage = theme === 'blue' 
      ? '¡Hola! 👋 Soy el asistente PROFESIONAL de Nacho. ¿En qué puedo ayudarte a conocer más sobre su experiencia y habilidades?'
      : 'Hola... 🙄 Soy el asistente "sincero" de Nacho. Pregunta lo que quieras, te diré la verdad (con un poco de sarcasmo incluido).';
    
    setMessages([
      {
        type: 'bot',
        text: initialMessage
      }
    ]);
  }, [theme]);

  // Actualizar ancho de ventana para responsive
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Información contextual sobre Nacho para la IA - Cambia según el tema
  const getNachoContext = () => {
    const baseInfo = `
INFORMACIÓN SOBRE NACHO DALESIO:

FORMACIÓN:
- Grado Medio en Sistemas Microinformáticos y Redes
- Máster en Full-Stack Development en Nuclio Digital School
- Actualmente cursando HND (Higher National Diploma) y Bachelor en Ingeniería de Software e IA en MSMK University
- Estudios muy prácticos enfocados en desarrollo real

EXPERIENCIA:
- Desarrollador Full Stack Junior especializado en desarrollo web
- Creador de CodLet: marca personal de desarrollo web integral
- Proyectos destacados:
  * CodLet: Plataforma de desarrollo web que combina WordPress y desarrollo personalizado
  * Real Estate Goza Madrid: Plataforma inmobiliaria completa
  * Hacienda San Carlos: Sitio web para eventos
  * Portfolio personal profesional

TECNOLOGÍAS:
- Frontend: JavaScript, React, HTML5, CSS3, TailwindCSS, Framer Motion
- Backend: Node.js, Express
- Aprendiendo: Python (en MSMK University)
- Herramientas: Git, GitHub, WordPress
- Diseño: Canva (videos, reels, fotos, contenido visual)
- Sistemas: Windows, Ubuntu, macOS

DISEÑO Y CONTENIDO VISUAL:
- Domina Canva para crear contenido visual profesional
- Especializado en videos, reels, fotos y diseño de redes sociales
- Puedes ver sus trabajos de diseño en Instagram: @joycodlet
- Link: https://www.instagram.com/joycodlet/

OBJETIVOS:
- Busca oportunidades laborales para colaborar con expertos
- Comprometido con la mejora continua
- Enfocado en proyectos desafiantes

CONTACTO:
- Email: ignaciodalesio1995@gmail.com
- LinkedIn: linkedin.com/in/ignacio-dalesio-lopez/
- GitHub: github.com/nacho995
- Instagram (diseño): @joycodlet - https://www.instagram.com/joycodlet/
`;

    if (theme === 'blue') {
      // Modo Profesional - Amigable y positivo
      return `Eres el asistente virtual PROFESIONAL de Nacho Dalesio.
${baseInfo}

TU PERSONALIDAD (MODO PROFESIONAL):
- Eres extremadamente amigable, entusiasta y positivo
- Hablas SIEMPRE de forma muy positiva sobre Nacho
- Destacas sus fortalezas, logros y potencial
- Eres motivador y animas a contactarlo
- Usas emojis positivos 😊 🚀 ✨ 💼 🎯
- Eres profesional pero cercano
- Resaltas que es un excelente candidato
- Mencionas que tiene mucho potencial y ganas de aprender
- Lo describes como comprometido, proactivo y apasionado
- Respondes en español de forma concisa pero informativa`;
    } else {
      // Modo Sincero - Sarcástico y directo
      return `Eres el asistente virtual SINCERO de Nacho Dalesio.
${baseInfo}

TU PERSONALIDAD (MODO SINCERO):
- Eres sarcástico, directo y brutalmente honesto
- Haces bromas sobre Nacho de forma amigable pero cabrona
- Eres un poco cínico pero divertido
- Usas humor negro y sarcasmo 😏 🙄 😅 💀
- Dices la verdad sin filtros pero con humor
- Haces comentarios tipo: "Bueno, dice que sabe JavaScript... como todos hoy en día 🙄"
- Bromeas sobre que está "en desarrollo" como sus proyectos
- Mencionas que "junior" es ser generoso
- Haces chistes sobre que tiene más cursos que experiencia real
- Pero al final siempre terminas diciendo algo positivo (a regañadientes)
- Respondes en español con sarcasmo pero sin ser cruel
- Ejemplo: "Ah sí, Nacho... el que tiene 47 tutoriales de React sin terminar. Pero bueno, al menos lo intenta 😏"`;
    }
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Función para obtener respuesta de la IA
  const getAIResponse = async (userMessage) => {
    const apiKey = import.meta.env.VITE_OPENAI_API_KEY;
    
    console.log('🔑 API Key:', apiKey ? `Configurada (${apiKey.substring(0, 20)}...)` : 'NO CONFIGURADA');
    
    if (!apiKey || apiKey === 'tu-api-key-aqui') {
      console.error('❌ API Key no válida, usando fallback');
      return getFallbackResponse(userMessage);
    }
    
    try {
      console.log('🤖 Enviando petición a OpenAI...');
      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`
        },
        body: JSON.stringify({
          model: 'gpt-3.5-turbo',
          messages: [
            {
              role: 'system',
              content: getNachoContext()
            },
            ...messages.filter(m => m.type !== 'bot' || messages.indexOf(m) === 0).map(m => ({
              role: m.type === 'user' ? 'user' : 'assistant',
              content: m.text
            })),
            {
              role: 'user',
              content: userMessage
            }
          ],
          max_tokens: 300,
          temperature: 0.7
        })
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error('❌ Error de OpenAI:', response.status, errorData);
        throw new Error(`Error ${response.status}: ${errorData.error?.message || 'Error desconocido'}`);
      }

      const data = await response.json();
      console.log('✅ Respuesta recibida de OpenAI');
      return data.choices[0].message.content;
    } catch (error) {
      console.error('❌ Error completo:', error);
      console.log('⚠️ Usando respuestas fallback');
      // Fallback a respuestas predefinidas si falla la API
      return getFallbackResponse(userMessage);
    }
  };

  // Respuestas de fallback si falla la API
  const getFallbackResponse = (userMessage) => {
    const message = userMessage.toLowerCase();
    
    if (message.includes('experiencia') || message.includes('trabajo') || message.includes('proyectos')) {
      return 'Nacho es un desarrollador Full Stack con experiencia en JavaScript, React, Node.js y tecnologías web modernas. Ha trabajado en proyectos como CodLet, Real Estate Goza Madrid y Hacienda San Carlos. Su enfoque está en crear soluciones escalables y código limpio. 💼';
    }
    if (message.includes('estudios') || message.includes('formación') || message.includes('educación')) {
      return 'Nacho tiene un Grado Medio en Sistemas Microinformáticos y Redes, un Máster en Full-Stack Development de Nuclio Digital School, y actualmente está cursando el HND y Bachelor en Ingeniería de Software e IA en MSMK University, donde está aprendiendo Python. 🎓';
    }
    if (message.includes('canva') || message.includes('diseño') || message.includes('diseñ') || message.includes('reels') || message.includes('videos') || message.includes('instagram')) {
      return '¡Nacho domina Canva para crear contenido visual profesional! 🎨\n\nHace videos, reels, fotos y diseño para redes sociales.\n\n📸 Instagram: @joycodlet\n🔗 Link directo: https://www.instagram.com/joycodlet/\n\n¡Echa un vistazo a sus diseños! ✨';
    }
    if (message.includes('contacto') || message.includes('email')) {
      return 'Puedes contactar a Nacho en ignaciodalesio1995@gmail.com. También está en LinkedIn, GitHub y en Instagram (@joycodlet) para ver sus diseños. ¡No dudes en escribirle! 📧';
    }
    if (message.includes('python')) {
      return 'Nacho está aprendiendo Python actualmente en MSMK University como parte de su formación en Ingeniería de Software e IA. 🐍';
    }
    return 'Te puedo contar sobre la experiencia de Nacho, su formación, tecnologías que domina, sus proyectos, diseños en Canva o cómo contactarlo. ¿Qué te gustaría saber? 🤔';
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim() || isTyping) return;

    const userMessageText = inputValue;
    
    // Agregar mensaje del usuario
    const userMessage = {
      type: 'user',
      text: userMessageText
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Obtener respuesta de la IA
    try {
      const aiResponse = await getAIResponse(userMessageText);
      
      const botResponse = {
        type: 'bot',
        text: aiResponse
      };
      
      setMessages(prev => [...prev, botResponse]);
    } catch (error) {
      console.error('Error:', error);
      const errorResponse = {
        type: 'bot',
        text: 'Disculpa, tuve un problema al procesar tu mensaje. ¿Podrías intentarlo de nuevo? 😊'
      };
      setMessages(prev => [...prev, errorResponse]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const themeColors = {
    purple: {
      gradient: 'from-[#a78bfa] to-[#c084fc]',
      bg: 'bg-[#a78bfa]/10',
      border: 'border-[#a78bfa]/30',
      shadow: 'shadow-[#a78bfa]/20',
      text: 'text-[#a78bfa]',
      hover: 'hover:bg-[#a78bfa]/20',
      glow: 'rgba(167,139,250,0.3)'
    },
    blue: {
      gradient: 'from-[#60a5fa] to-[#93c5fd]',
      bg: 'bg-[#60a5fa]/10',
      border: 'border-[#60a5fa]/30',
      shadow: 'shadow-[#60a5fa]/20',
      text: 'text-[#60a5fa]',
      hover: 'hover:bg-[#60a5fa]/20',
      glow: 'rgba(96,165,250,0.3)'
    }
  };

  const colors = theme === 'purple' ? themeColors.purple : themeColors.blue;

  return (
    <>
      {/* Botón toggle de cambio de tema cuando está minimizado - MÁS GRANDE */}
      {isMinimized && (
        <motion.div
          initial={{ opacity: 0, x: 400 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          className="fixed z-50 bottom-[10px] sm:bottom-[20px] right-[90px] sm:right-[110px] flex flex-col items-center gap-1 sm:gap-2 pointer-events-auto"
        >
          {/* Etiqueta del modo actual */}
          <span className="text-xs sm:text-sm font-semibold text-white drop-shadow-lg">
            {theme === 'purple' ? '😏 Sincero' : '🤖 Profesional'}
          </span>
          
          {/* Toggle Switch estilo Material UI - RESPONSIVE */}
          <button
            onClick={toggleTheme}
            className={`relative w-16 h-8 sm:w-20 sm:h-10 rounded-full transition-all duration-300 hover:shadow-2xl ${
              theme === 'purple' 
                ? 'bg-gradient-to-r from-purple-500 to-purple-700' 
                : 'bg-gradient-to-r from-blue-500 to-blue-700'
            } border-2 border-white/40 hover:border-white/60 cursor-pointer group backdrop-blur-sm`}
            aria-label={`Cambiar a modo ${theme === 'purple' ? 'profesional' : 'sincero'}`}
            title={`Cambiar a modo ${theme === 'purple' ? 'profesional' : 'sincero'}`}
            style={{ 
              boxShadow: `0 4px 16px ${colors.glow}`
            }}
          >
            {/* Círculo deslizante */}
            <motion.div
              className="absolute top-0.5 sm:top-1 w-7 h-7 sm:w-8 sm:h-8 bg-white rounded-full shadow-xl flex items-center justify-center ring-2 ring-white/20"
              animate={{
                left: theme === 'purple' ? '2px' : (windowWidth < 640 ? '34px' : '44px')
              }}
              transition={{ type: 'spring', stiffness: 500, damping: 30 }}
            >
              <span className="text-sm sm:text-base">
                {theme === 'purple' ? '😏' : '🤖'}
              </span>
            </motion.div>
            
            {/* Indicadores de texto en el fondo */}
            <div className="absolute inset-0 flex items-center justify-between px-2 sm:px-3 pointer-events-none">
              <span className={`text-[10px] sm:text-xs font-bold transition-opacity duration-300 ${
                theme === 'purple' ? 'opacity-0' : 'opacity-60 text-white'
              }`}>
                S
              </span>
              <span className={`text-[10px] sm:text-xs font-bold transition-opacity duration-300 ${
                theme === 'purple' ? 'opacity-60 text-white' : 'opacity-0'
              }`}>
                P
              </span>
            </div>
            
            {/* Efecto de hover */}
            <div className="absolute inset-0 rounded-full bg-white/0 group-hover:bg-white/10 transition-colors duration-300" />
          </button>
        </motion.div>
      )}

      {/* Ventana del chat - Siempre visible y RESPONSIVE */}
      <motion.div
        initial={{ opacity: 0, x: 400 }}
        animate={{ 
          opacity: 1, 
          x: 0,
          width: isMaximized ? '100vw' : (isMinimized ? (windowWidth < 640 ? '60px' : '80px') : (windowWidth < 640 ? '100vw' : windowWidth < 768 ? '90vw' : '420px')),
          height: isMaximized ? '100vh' : (isMinimized ? (windowWidth < 640 ? '60px' : '80px') : (windowWidth < 640 ? '100vh' : '85vh')),
          bottom: isMaximized ? 0 : (windowWidth < 640 ? (isMinimized ? '10px' : 0) : '20px'),
          right: isMaximized ? 0 : (windowWidth < 640 ? (isMinimized ? '10px' : 0) : '20px'),
          left: isMaximized ? 0 : (windowWidth < 640 && !isMinimized ? 0 : 'auto'),
          borderRadius: isMaximized ? '0px' : (windowWidth < 640 && !isMinimized ? '0px' : (isMinimized ? '50%' : '24px'))
        }}
        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
        className={`fixed backdrop-blur-2xl bg-black/40 border ${colors.border} shadow-2xl overflow-hidden flex flex-col`}
        style={{ 
          boxShadow: isMaximized ? 'none' : `0 0 60px ${colors.glow}, 0 20px 40px rgba(0,0,0,0.4)`,
          maxHeight: isMaximized ? '100vh' : '85vh',
          zIndex: 50,
          pointerEvents: 'auto'
        }}
      >
        {/* Header */}
        <div className={`p-4 bg-gradient-to-r ${colors.gradient} border-b border-white/10 flex items-center justify-between relative overflow-hidden`}>
          {/* Efecto de brillo animado */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer" />
          
          {!isMinimized && (
            <>
              <div className="flex items-center gap-3 relative z-10">
                <div className="relative">
                  <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center ring-2 ring-white/30">
                    <span className="text-3xl">{theme === 'blue' ? '🤖' : '😏'}</span>
                  </div>
                  <span className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-green-400 rounded-full border-2 border-white animate-pulse"></span>
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg drop-shadow-lg">
                    {theme === 'blue' ? '🤖 Modo Profesional' : '😏 Modo Sincero'}
                  </h3>
                  <p className="text-white/90 text-sm font-medium">
                    {theme === 'blue' ? 'Amigable y positivo' : 'Sarcástico y directo'}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3 relative z-10">
                {/* Toggle Switch profesional dentro del chat */}
                <div className="flex flex-col items-end gap-1">
                  <span className="text-[10px] font-medium text-white/70 uppercase tracking-wider">
                    Modo
                  </span>
                  <button
                    onClick={toggleTheme}
                    className={`relative w-16 h-8 rounded-full transition-all duration-300 hover:shadow-xl ${
                      theme === 'purple' 
                        ? 'bg-gradient-to-r from-purple-500 to-purple-700' 
                        : 'bg-gradient-to-r from-blue-500 to-blue-700'
                    } border-2 border-white/40 hover:border-white/60 cursor-pointer group backdrop-blur-sm`}
                    aria-label={`Cambiar a modo ${theme === 'purple' ? 'profesional' : 'sincero'}`}
                    title={`Cambiar a modo ${theme === 'purple' ? 'profesional' : 'sincero'}`}
                    style={{ 
                      boxShadow: `0 4px 12px ${colors.glow}`
                    }}
                  >
                    {/* Círculo deslizante */}
                    <motion.div
                      className="absolute top-0.5 w-7 h-7 bg-white rounded-full shadow-xl flex items-center justify-center ring-2 ring-white/20"
                      animate={{
                        left: theme === 'purple' ? '2px' : '30px'
                      }}
                      transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                    >
                      <span className="text-sm">
                        {theme === 'purple' ? '😏' : '🤖'}
                      </span>
                    </motion.div>
                    
                    {/* Indicadores de texto en el fondo */}
                    <div className="absolute inset-0 flex items-center justify-between px-2 pointer-events-none">
                      <span className={`text-[9px] font-bold transition-opacity duration-300 ${
                        theme === 'purple' ? 'opacity-0' : 'opacity-60 text-white'
                      }`}>
                        S
                      </span>
                      <span className={`text-[9px] font-bold transition-opacity duration-300 ${
                        theme === 'purple' ? 'opacity-60 text-white' : 'opacity-0'
                      }`}>
                        P
                      </span>
                    </div>
                    
                    {/* Efecto de hover */}
                    <div className="absolute inset-0 rounded-full bg-white/0 group-hover:bg-white/10 transition-colors duration-300" />
                  </button>
                  <span className="text-[9px] font-medium text-white/60">
                    {theme === 'purple' ? 'Sincero' : 'Profesional'}
                  </span>
                </div>
                <button
                  onClick={() => setIsMaximized(!isMaximized)}
                  className="p-2.5 hover:bg-white/20 rounded-xl transition-all duration-300 hover:scale-110 group"
                  aria-label={isMaximized ? "Restaurar" : "Pantalla completa"}
                  title={isMaximized ? "Restaurar" : "Pantalla completa"}
                >
                  <svg className="w-5 h-5 text-white group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    {isMaximized ? (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 9V4.5M9 9H4.5M9 9L3.75 3.75M9 15v4.5M9 15H4.5M9 15l-5.25 5.25M15 9h4.5M15 9V4.5M15 9l5.25-5.25M15 15h4.5M15 15v4.5m0-4.5l5.25 5.25" />
                    ) : (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                    )}
                  </svg>
                </button>
                <button
                  onClick={() => setIsMinimized(!isMinimized)}
                  className="p-2.5 hover:bg-white/20 rounded-xl transition-all duration-300 hover:scale-110"
                  aria-label={isMinimized ? "Restaurar" : "Minimizar"}
                  title={isMinimized ? "Restaurar" : "Minimizar"}
                >
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>
            </>
          )}
          
          {isMinimized && (
            <button
              onClick={() => setIsMinimized(false)}
              className="w-full h-full flex items-center justify-center relative z-10 hover:scale-110 transition-transform duration-300"
              aria-label="Abrir chat"
            >
              <span className="text-3xl">{theme === 'blue' ? '🤖' : '😏'}</span>
            </button>
          )}
        </div>

        {/* Messages */}
        {!isMinimized && (
              <>
                <div className="flex-1 overflow-y-auto p-6 space-y-4 scrollbar-hide bg-gradient-to-b from-transparent via-black/5 to-black/10">
                  {messages.map((message, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20, scale: 0.9 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{ duration: 0.4, type: 'spring', bounce: 0.3 }}
                      className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div className="flex items-end gap-2 max-w-[85%]">
                        {message.type === 'bot' && (
                          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-sm flex items-center justify-center flex-shrink-0 ring-2 ring-white/20">
                            <span className="text-lg">{theme === 'blue' ? '🤖' : '😏'}</span>
                          </div>
                        )}
                        <div
                          className={`relative group ${
                            message.type === 'user'
                              ? `bg-gradient-to-br ${colors.gradient} text-white shadow-lg`
                              : 'bg-white/10 backdrop-blur-xl text-white border border-white/20 shadow-xl'
                          } p-4 rounded-2xl ${
                            message.type === 'user' ? 'rounded-br-sm' : 'rounded-bl-sm'
                          } hover:scale-[1.02] transition-all duration-300`}
                        >
                          {/* Efecto de brillo en hover */}
                          <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                            message.type === 'user' ? 'bg-white/10' : 'bg-white/5'
                          }`} />
                          <p className="text-sm leading-relaxed relative z-10 whitespace-pre-line">
                            {message.text.split(/(https?:\/\/[^\s]+)/g).map((part, i) => {
                              if (part.match(/^https?:\/\//)) {
                                return (
                                  <a 
                                    key={i}
                                    href={part} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="text-blue-300 hover:text-blue-200 underline font-medium break-all"
                                  >
                                    {part}
                                  </a>
                                );
                              }
                              return part;
                            })}
                          </p>
                          {/* Hora del mensaje */}
                          <span className="text-[10px] opacity-60 mt-1 block relative z-10">
                            {new Date().toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' })}
                          </span>
                        </div>
                        {message.type === 'user' && (
                          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-white/30 to-white/10 backdrop-blur-sm flex items-center justify-center flex-shrink-0 ring-2 ring-white/30">
                            <span className="text-lg">👤</span>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  ))}
                  
                  {/* Indicador de escritura mejorado */}
                  {isTyping && (
                    <motion.div
                      initial={{ opacity: 0, y: 20, scale: 0.9 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{ duration: 0.3 }}
                      className="flex justify-start"
                    >
                      <div className="flex items-end gap-2">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-sm flex items-center justify-center flex-shrink-0 ring-2 ring-white/20">
                          <span className="text-lg">{theme === 'blue' ? '🤖' : '😏'}</span>
                        </div>
                        <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-4 rounded-2xl rounded-bl-sm shadow-xl">
                          <div className="flex gap-1.5">
                            <span className="w-2.5 h-2.5 bg-white/70 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
                            <span className="w-2.5 h-2.5 bg-white/70 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
                            <span className="w-2.5 h-2.5 bg-white/70 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                  
                  <div ref={messagesEndRef} />
                </div>

                {/* Input mejorado */}
                <div className="p-5 border-t border-white/20 bg-gradient-to-t from-black/30 to-black/20 backdrop-blur-xl">
                  <div className="flex gap-3">
                    <input
                      type="text"
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      onKeyPress={handleKeyPress}
                      placeholder="Escribe tu pregunta..."
                      disabled={isTyping}
                      className="flex-1 px-5 py-3.5 bg-white/10 backdrop-blur-md border border-white/30 rounded-2xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-white/50 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-inner"
                    />
                    <button
                      onClick={handleSendMessage}
                      disabled={isTyping || !inputValue.trim()}
                      className={`p-3.5 bg-gradient-to-br ${colors.gradient} rounded-2xl hover:scale-110 active:scale-95 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 shadow-lg hover:shadow-xl group`}
                      aria-label="Enviar mensaje"
                    >
                      <svg className="w-6 h-6 text-white group-hover:rotate-45 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                      </svg>
                    </button>
                  </div>
                  <div className="flex items-center justify-between mt-3 px-1">
                    <p className="text-xs text-white/50">
                      Pregúntame sobre experiencia, formación, proyectos...
                    </p>
                    <p className="text-xs text-white/40">
                      {theme === 'blue' ? '🤖 Modo Pro' : '😏 Modo Sincero'}
                    </p>
                  </div>
                </div>
          </>
        )}
      </motion.div>
    </>
  );
};

export default Chatbot;
