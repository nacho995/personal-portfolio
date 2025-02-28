const API_URL = import.meta.env.VITE_PUBLIC_API_URL || 'http://localhost:3000'


export async function getRatingStars(projectId) {
    const response = await fetch(`${API_URL}/ratings/${projectId}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
    }

    const contentType = response.headers.get('content-type');
    if (contentType && contentType.includes('application/json')) {
        return await response.json()
    } else {
        throw new Error('Response is not JSON');
    }
}

export async function postStars(rating, projectId) {
    try {
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
            const errorData = await response.json();
            throw new Error(errorData.message || 'Error en la respuesta del servidor');
        }

        return await response.json();
    } catch (error) {
        console.error('Error al enviar la calificación:', error);
        throw error;
    }
}