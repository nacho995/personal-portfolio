const API_URL = import.meta.env.VITE_PUBLIC_API_URL || 'http://localhost:3000'


export const getRatingStars = async (projectId) => {
    try {
        const response = await fetch(`${API_URL}/ratings/${projectId}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error(`Error al obtener valoraciones: ${response.statusText}`);
        }

        const data = await response.json();
        console.log(`Datos de valoraciones recibidos para ${projectId}:`, data);
        
        return {
            averageRating: data.averageRating || 0,
            totalRatings: data.totalRatings || 0,
            userRating: data.userRating || 0,
            success: true
        };
    } catch (error) {
        console.error(`Error al obtener valoraciones para ${projectId}:`, error);
        return {
            averageRating: 0,
            totalRatings: 0,
            userRating: 0,
            success: false
        };
    }
};

export const postStars = async (rating, projectId) => {
    try {
        console.log(`Enviando valoración: ${rating} estrellas para proyecto ${projectId}`);
        
        const response = await fetch(`${API_URL}/ratings`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                rating,
                projectId
            })
        });
        
        if (!response.ok) {
            throw new Error(`Error al enviar valoración: ${response.statusText}`);
        }
        
        const data = await response.json();
        console.log(`Respuesta al valorar ${projectId}:`, data);
        
        return {
            success: true,
            averageRating: data.averageRating || 0,
            totalRatings: data.totalRatings || 0,
            rating: rating
        };
    } catch (error) {
        console.error(`Error al enviar valoración para ${projectId}:`, error);
        return {
            success: false
        };
    }
};