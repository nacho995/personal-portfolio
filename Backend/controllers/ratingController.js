const Rating = require('../models/Rating');

// Obtener valoración de un proyecto
const getRating = async (req, res) => {
  try {
    const { projectId } = req.params;
    
    let rating = await Rating.findOne({ projectId });
    
    if (!rating) {
      rating = {
        projectId,
        rating: 0,
        totalRatings: 0,
        averageRating: 0
      };
    }

    res.json(rating);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Añadir o actualizar valoración
const updateRating = async (req, res) => {
  try {
    const { rating: newRating, projectId } = req.body;

    let ratingDoc = await Rating.findOne({ projectId });

    if (ratingDoc) {
      // Actualizar valoración existente
      const totalPoints = (ratingDoc.averageRating * ratingDoc.totalRatings);
      const newTotal = ratingDoc.totalRatings + 1;
      // Calcular nuevo promedio incluyendo la nueva valoración
      const newAverage = Math.round((totalPoints + newRating) / newTotal);

      ratingDoc = await Rating.findOneAndUpdate(
        { projectId },
        {
          $set: {
            rating: newRating,
            totalRatings: newTotal,
            averageRating: newAverage
          }
        },
        { new: true }
      );
    } else {
      // Primera valoración del proyecto
      ratingDoc = await Rating.create({
        projectId,
        rating: newRating,
        totalRatings: 1,
        averageRating: newRating // Primera valoración = promedio
      });
    }

    res.json(ratingDoc);
  } catch (error) {
    console.error('Error al actualizar valoración:', error);
    res.status(500).json({ 
      message: 'Error al procesar la valoración',
      error: error.message 
    });
  }
};

module.exports = {
  getRating,
  updateRating
}; 