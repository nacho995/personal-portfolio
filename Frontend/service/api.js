// Obtener valoraciones para un proyecto específico
export const getRatingStars = async (projectId) => {
  try {
    // Asegúrate de que la URL incluya el ID del proyecto correctamente
    const response = await fetch(`/api/ratings/${encodeURIComponent(projectId)}`);
    
    if (!response.ok) {
      throw new Error(`Error al obtener valoraciones: ${response.statusText}`);
    }
    
    const data = await response.json();
    console.log(`Datos recibidos para ${projectId}:`, data);
    
    // Asegúrate de que la respuesta tenga la estructura esperada
    return {
      averageRating: data.averageRating || 0,
      totalRatings: data.totalRatings || 0,
      userRating: data.userRating || 0,
      success: true
    };
  } catch (error) {
    console.error(`Error al obtener valoraciones para ${projectId}:`, error);
    // Devuelve valores por defecto en caso de error
    return {
      averageRating: 0,
      totalRatings: 0,
      userRating: 0,
      success: false
    };
  }
};

// Enviar una valoración para un proyecto específico
export const postStars = async (rating, projectId) => {
  try {
    console.log(`Enviando valoración para ${projectId}: ${rating} estrellas`);
    
    // Asegúrate de enviar tanto la valoración como el ID del proyecto
    const response = await fetch('/api/ratings', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        rating,
        projectId
      }),
    });
    
    if (!response.ok) {
      throw new Error(`Error al enviar valoración: ${response.statusText}`);
    }
    
    const data = await response.json();
    console.log(`Respuesta para valoración de ${projectId}:`, data);
    
    // Devuelve todos los datos actualizados
    return {
      success: true,
      averageRating: data.averageRating,
      totalRatings: data.totalRatings,
      rating: rating
    };
  } catch (error) {
    console.error(`Error al enviar valoración para ${projectId}:`, error);
    return {
      success: false
    };
  }
}; 