import { motion } from 'framer-motion';

const GozaMadridProject = ({ 
  project, 
  tempRating, 
  rating, 
  averageRating, 
  totalRatings, 
  onTempRatingChange, 
  onSubmitRating 
}) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="group relative bg-white/[0.03] border border-white/[0.05] rounded-2xl overflow-hidden hover:border-white/20 transition-all duration-500"
    >
      {/* Preview Image */}
      <div className="relative aspect-video overflow-hidden">
        <img 
          src={project.image}
          alt={`${project.title} Preview`}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Contenido de la card */}
      <div className="p-6 sm:p-8">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl sm:text-2xl font-bold text-white/90">{project.title}</h3>
          
          {/* Enlace a GitHub */}
          <a 
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-white/10 hover:bg-white/20 rounded-full transition-all duration-300"
            title="Ver código en GitHub"
          >
            <img src="/github.png" alt="GitHub" className="w-5 h-5" />
          </a>
        </div>
        
        <p className="text-white/70 text-sm sm:text-base mb-6">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          <span className="px-3 py-1 text-xs sm:text-sm bg-white/10 text-white/90 rounded-full flex items-center gap-1.5">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M11.5725 0c-.1763 0-.3098.0013-.3584.0067-.0516.0053-.2159.021-.3636.0328-3.4088.3073-6.6017 2.1463-8.624 4.9728C1.1004 6.584.3802 8.3666.1082 10.255c-.0962.659-.108.8537-.108 1.7474s.012 1.0884.108 1.7476c.652 4.506 3.8591 8.2919 8.2087 9.6945.7789.2511 1.6.4223 2.5337.5255.3636.04 1.9354.04 2.299 0 1.6117-.1783 2.9772-.577 4.3237-1.2643.2065-.1056.2464-.1337.2183-.1573-.0188-.0139-.8987-1.1938-1.9543-2.62l-1.919-2.592-2.4047-3.5583c-1.3231-1.9564-2.4128-3.556-2.422-3.556-.0094-.0026-.0187 1.5787-.0235 3.509-.0067 3.3802-.0093 3.5162-.0516 3.596-.061.115-.108.1618-.2064.2134-.075.0374-.1408.0445-.495.0445h-.406l-.1078-.068a.4383.4383 0 01-.1572-.1712l-.0493-.1056.0053-4.703.0067-4.7054.0726-.0915c.0376-.0493.1174-.1125.1736-.143.0962-.0493.1338-.054.5396-.054h.4361l.1042.0567c.0567.035.1174.0915.1432.143l.0493.0985L9.16 9.3302c.0094.0492.0661.3814.1268.7349.061.3532.1235.7131.1383.7975.0188.1091.0329.1369.0781.1792.0614.0565.1042.0674.2591.0674h.1844l.0746-.0248c.0427-.0139.1174-.0567.1736-.0956.0985-.0674.1042-.0726.4763-.4827.2136-.233 1.0722-1.1673 1.9116-2.0763C14.2857 5.9721 16.4219 3.556 16.6896 3.2644 16.7163 3.2347 16.7521 3.2182 16.7694 3.2262c.0253.0139.4657.6458 1.1353 1.6361.6554.9461 1.7578 2.5356 2.4504 3.5316l1.2536 1.8105.0413.3053c.0242.1658.0598.5514.0829.8435.0316.3694.0414.6901.035 1.1552-.1711 9.2594-8.4973 16.3239-17.7351 14.9906C-1.6644 25.3031-6.5641 18.7681-6.0874 9.5287c.3724-7.1752 5.9416-13.0312 12.8591-13.4876 1.3443-.0881 2.7797.0427 4.0417.3639.4918.1253.9642.2634 1.021.2979.0445.0266.0507.017.0177-.0228-.0177-.0228-1.4748-1.6708-1.6675-1.8736C10.3573.4111 9.6513 0 9.5023 0c-.0148 0-.0822.0139-.1634.0305-.6223.1338-1.3443.3829-2.113.7304-.6697.3041-1.1507.5779-2.1675 1.2397C3.5024 3.1569 2.344 4.1284 1.5164 4.9437.8254 5.6358.3512 6.157.1783 6.3769L0 6.595l.4511.612c.4247.5794.5921.8214.6697.974.035.0776.0428.0582.094-.208.1972-1.0393.6513-2.5031 1.1904-3.8157l.3172-.774.2845-.2082c.9736-.7208 2.0195-1.3526 3.1537-1.9016.5695-.275 1.6487-.7148 2.176-.8887.863-.2819 2.0299-.5432 2.9676-.6628.4983-.0643 2.0039-.0832 2.5581-.032 1.6487.1523 3.0312.5175 4.476 1.1838 1.3779.6368 2.6255 1.5017 3.7288 2.5869a13.1753 13.1753 0 012.2238 2.8001c.3124.5337.7578 1.4497.995 2.0413.2374.5993.5094 1.4923.6513 2.1453.1178.5414.2725 1.5923.3323 2.2644.0229.2541.0229 1.8623 0 2.1164-.0871 1.0038-.1972 1.6802-.4127 2.5452-.1417.5716-.3206 1.1783-.5411 1.8385-.1177.352-.2135.6488-.2135.6651 0 .0164.4361.0295.9736.0295h.9769l.0429-.2242c.0241-.1242.0724-.3881.1096-.5929.1807-.9877.2581-1.7807.2725-2.7757.0067-.3347.0053-.719-.0027-.8537-.0134-.2498-.0546-.7897-.0905-1.1912-.1484-1.6513-.5223-3.3052-1.0855-4.8092-.7537-2.0139-1.782-3.7913-3.1326-5.4466-2.7208-3.3344-6.3637-5.468-10.4478-6.1151-.7272-.1152-1.2818-.1643-2.1922-.1985-.4385-.017-.6303-.0173-.726 0z" />
            </svg>
            <span>Next.js</span>
          </span>
          <span className="px-3 py-1 text-xs sm:text-sm bg-[#38BDF8]/20 text-[#38BDF8] rounded-full flex items-center gap-1.5">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z" />
            </svg>
            <span>TailwindCSS</span>
          </span>
          <span className="px-3 py-1 text-xs sm:text-sm bg-[#68A063]/20 text-[#68A063] rounded-full flex items-center gap-1.5">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M11.998,24c-0.321,0-0.641-0.084-0.922-0.247l-2.936-1.737c-0.438-0.245-0.224-0.332-0.08-0.383 c0.585-0.203,0.703-0.25,1.328-0.604c0.065-0.037,0.151-0.023,0.218,0.017l2.256,1.339c0.082,0.045,0.197,0.045,0.272,0l8.795-5.076 c0.082-0.047,0.134-0.141,0.134-0.238V6.921c0-0.099-0.053-0.192-0.137-0.242l-8.791-5.072c-0.081-0.047-0.189-0.047-0.271,0 L3.075,6.68C2.99,6.729,2.936,6.825,2.936,6.921v10.15c0,0.097,0.054,0.189,0.139,0.235l2.409,1.392 c1.307,0.654,2.108-0.116,2.108-0.89V7.787c0-0.142,0.114-0.253,0.256-0.253h1.115c0.139,0,0.255,0.112,0.255,0.253v10.021 c0,1.745-0.95,2.745-2.604,2.745c-0.508,0-0.909,0-2.026-0.551L2.28,18.675c-0.57-0.329-0.922-0.945-0.922-1.604V6.921 c0-0.659,0.353-1.275,0.922-1.603l8.795-5.082c0.557-0.315,1.296-0.315,1.848,0l8.794,5.082c0.57,0.329,0.924,0.944,0.924,1.603 v10.15c0,0.659-0.354,1.273-0.924,1.604l-8.794,5.078C12.643,23.916,12.324,24,11.998,24z" />
            </svg>
            <span>Node.js</span>
          </span>
        </div>

        {/* Sistema de Rating */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-4">
          <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center gap-4 p-3 rounded-xl bg-black/20 backdrop-blur-sm">
            <div className="flex items-center gap-3">
              <div className="flex items-center">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    onClick={(e) => {
                      e.preventDefault();
                      onTempRatingChange(star);
                    }}
                    className="p-1 transition-all duration-300 hover:scale-110 cursor-pointer"
                  >
                    <svg 
                      className={`w-5 h-5 ${
                        star <= (tempRating || rating)
                          ? 'text-yellow-400'
                          : 'text-white/20 hover:text-yellow-400/50'
                      } transition-colors duration-300`} 
                      fill="currentColor" 
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </button>
                ))}
              </div>

              {/* Botón de valorar */}
              <button
                onClick={(e) => {
                  e.preventDefault();
                  onSubmitRating();
                }}
                className={`px-4 py-1.5 rounded-lg transition-all duration-300 ${
                  tempRating > 0 && tempRating !== rating
                    ? 'bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-medium hover:from-yellow-500 hover:to-yellow-600'
                    : 'bg-white/10 text-white/60 cursor-not-allowed'
                }`}
                disabled={tempRating === 0 || tempRating === rating}
              >
                {tempRating === rating ? 'Valorado' : 'Valorar'}
              </button>
            </div>
            
            {/* Mostrar promedio */}
            <div className="flex items-center gap-2 text-white/80">
              <span className="font-medium text-sm">
                {averageRating > 0 
                  ? `${parseFloat(averageRating).toFixed(1)} / 5`
                  : "Sin valoraciones"
                }
              </span>
              {totalRatings > 0 && (
                <span className="text-white/50 text-xs">
                  ({totalRatings} {totalRatings === 1 ? 'valoración' : 'valoraciones'})
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Botones */}
        <div className="flex flex-wrap gap-4 mt-6">
          <a 
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 bg-white/10 hover:bg-white/20 text-white/90 rounded-xl transition-all duration-300"
          >
            Visitar Sitio
          </a>
          
          {/* Botón específico para Goza Madrid */}
          <a 
            href="https://github.com/nacho995/nextjs-gozamadrid"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 bg-white/5 hover:bg-white/15 text-white/80 rounded-xl transition-all duration-300 flex items-center gap-2"
          >
            <img src="/github.png" alt="GitHub" className="w-4 h-4" />
            <span>Ver Código</span>
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default GozaMadridProject; 