import { AnimatePresence, motion } from 'framer-motion'
import PropTypes from 'prop-types'

const letterLayoutConfig = {
  PERFIL: { arcLength: 40, startAngleOffset: -30 },
  PROYECTOS: { arcLength: 40, startAngleOffset: -30 },
  GITHUB: { arcLength: 35, startAngleOffset: -30 },
  LINKEDIN: { arcLength: 40, startAngleOffset: -30 },
  'CERRAR MENÚ': { arcLength: 90, startAngleOffset: -1 },
}

const getLetterRadius = (baseRadius) => {
  if (typeof window === 'undefined') return baseRadius / 2

  if (window.innerWidth < 640) return baseRadius / 2 - 35
  if (window.innerWidth < 768) return baseRadius / 2 - 45
  if (window.innerWidth < 1024) return baseRadius / 2 - 50

  return baseRadius / 2 - 60
}

export function CircularMenu({
  isOpen,
  menuItems,
  menuContainerSize,
  circleVariants,
  onSelectItem
}) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div
          className="fixed top-0 right-0 z-[100] overflow-hidden pointer-events-none"
          style={{
            width: `${menuContainerSize.width}px`,
            height: `${menuContainerSize.height}px`
          }}
          role="navigation"
          aria-label="Menú principal circular"
          data-cursor-label="Flow radial de navegación · React + Node"
          data-cursor-intent="skill"
        >
          {menuItems.map((item, index) => (
            <motion.div
              key={`${item[0].text}-${index}`}
              custom={index}
              variants={circleVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="absolute top-0 right-0 origin-top-right cursor-pointer pointer-events-auto"
              style={{
                width: `${item[0].radius}px`,
                height: `${item[0].radius}px`,
                zIndex: 100 - index,
                clipPath: 'circle(51% at top right)'
              }}
              onClick={() => onSelectItem(item[0])}
            >
              <div
                className={`absolute inset-0 rounded-bl-full bg-gradient-to-br ${item[0].color} backdrop-blur-md cursor-pointer hover:scale-[1.02] hover:brightness-110 transition-all duration-300 shadow-[0_8px_32px_rgba(0,0,0,0.3)] group active:scale-95`}
                style={{
                  width: `${item[0].radius}px`,
                  height: `${item[0].radius}px`,
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:backdrop-blur-lg" />
                <div className="absolute inset-0 border-l border-t border-white/20 rounded-bl-full shadow-inner" />

                <div className="absolute inset-0 w-full h-full z-0">
                  {(() => {
                    const config = letterLayoutConfig[item[0].text] ?? letterLayoutConfig.PERFIL
                    
                    // Si es el ícono de hamburguesa con texto en arco
                    if (item[0].isBurgerIcon) {
                      const radius = getLetterRadius(item[0].radius)
                      
                      return (
                        <>
                          {/* Ícono de hamburguesa más a la izquierda */}
                          <motion.div
                            className="absolute text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white/95 group-hover:text-white transition-all duration-500 select-none"
                            style={{
                              right: `${radius * 0.3}px`,
                              top: `${radius * 0.3}px`,
                              textShadow: '0 0 15px rgba(255,255,255,0.4), 0 2px 5px rgba(0,0,0,0.5)'
                            }}
                            animate={{
                              rotate: 360
                            }}
                            transition={{
                              duration: 0.4,
                              ease: "easeInOut"
                            }}
                          >
                            ☰
                          </motion.div>
                          
                          {/* Letras en arco con espaciado correcto */}
                          {item[0].text.split('').map((letter, letterIndex) => {
                            // Filtrar espacios para el conteo pero mantenerlos en la renderización
                            const letters = item[0].text.split('')
                            const nonSpaceLetters = letters.filter(l => l !== ' ')
                            const totalLetters = nonSpaceLetters.length
                            
                            // Si es un espacio, no renderizarlo pero contar su posición
                            if (letter === ' ') {
                              return null
                            }
                            
                            // Calcular el índice sin espacios
                            const lettersUpToNow = item[0].text.substring(0, letterIndex).split('').filter(l => l !== ' ').length
                            const angleStep = config.arcLength / (totalLetters - 1)
                            const currentAngle = item[0].startAngle + config.startAngleOffset - lettersUpToNow * angleStep
                            const angleInRadians = currentAngle * (Math.PI / 180)

                            return (
                              <div
                                key={`${letter}-${letterIndex}`}
                                className="absolute text-[10px] xs:text-[11px] sm:text-sm md:text-[13px] lg:text-base font-bold tracking-normal text-white/95 group-hover:text-white transition-all duration-500 select-none"
                                style={{
                                  left: 'calc(100% - 20px)',
                                  top: '20px',
                                  transform: `
                                    translate(${radius * Math.cos(angleInRadians)}px, 
                                            ${radius * Math.sin(angleInRadians)}px)
                                    rotate(${currentAngle - 90}deg)
                                  `,
                                  transformOrigin: 'top right',
                                  textShadow: '0 0 15px rgba(255,255,255,0.4), 0 2px 5px rgba(0,0,0,0.5)'
                                }}
                              >
                                {letter}
                              </div>
                            )
                          })}
                        </>
                      )
                    }
                    
                    // Para el resto de items, mantener el comportamiento original
                    return item[0].text.split('').map((letter, letterIndex) => {
                      const totalLetters = item[0].text.length
                      const angleStep = config.arcLength / totalLetters
                      const currentAngle = item[0].startAngle + config.startAngleOffset - letterIndex * angleStep
                      const radius = getLetterRadius(item[0].radius)
                      const angleInRadians = currentAngle * (Math.PI / 180)

                      return (
                        <div
                          key={`${letter}-${letterIndex}`}
                          className="absolute text-[10px] xs:text-[11px] sm:text-sm md:text-[13px] lg:text-base font-bold tracking-normal text-white/95 group-hover:text-white transition-all duration-500 select-none"
                          style={{
                            left: 'calc(100% - 20px)',
                            top: '20px',
                            transform: `
                              translate(${radius * Math.cos(angleInRadians)}px, 
                                      ${radius * Math.sin(angleInRadians)}px)
                              rotate(${currentAngle - 90}deg)
                            `,
                            transformOrigin: 'top right',
                            textShadow: '0 0 15px rgba(255,255,255,0.4), 0 2px 5px rgba(0,0,0,0.5)'
                          }}
                        >
                          {letter}
                        </div>
                      )
                    })
                  })()}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </AnimatePresence>
  )
}

CircularMenu.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  menuItems: PropTypes.arrayOf(PropTypes.array).isRequired,
  menuContainerSize: PropTypes.shape({
    width: PropTypes.number,
    height: PropTypes.number
  }).isRequired,
  circleVariants: PropTypes.object.isRequired,
  onSelectItem: PropTypes.func.isRequired
}

export default CircularMenu

