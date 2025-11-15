import { useCallback, useEffect, useMemo, useState } from 'react'
import { getRatingStars, postStars } from '../../service/api'
import { PROJECT_IDS } from './projectsCatalog'

const createStateMap = () =>
  PROJECT_IDS.reduce((acc, id) => {
    acc[id] = 0
    return acc
  }, {})

const buildStateFromResponses = (responses, key) =>
  responses.reduce((acc, { id, data }) => {
    acc[id] = data?.[key] || 0
    return acc
  }, {})

const notifyRatingError = (message) => {
  if (typeof window !== 'undefined' && typeof window.alert === 'function') {
    window.alert(message)
  } else {
    console.warn(message)
  }
}

export function useProjectRatings() {
  const [tempRatings, setTempRatings] = useState(createStateMap)
  const [ratings, setRatings] = useState(createStateMap)
  const [averageRatings, setAverageRatings] = useState(createStateMap)
  const [totalRatings, setTotalRatings] = useState(createStateMap)

  useEffect(() => {
    const fetchRatings = async () => {
      try {
        const responses = await Promise.all(
          PROJECT_IDS.map(async (id) => {
            const data = await getRatingStars(id)
            console.log(`Datos cargados para ${id}:`, data)
            return { id, data }
          })
        )

        setAverageRatings(buildStateFromResponses(responses, 'averageRating'))
        setTotalRatings(buildStateFromResponses(responses, 'totalRatings'))
        const userRatings = buildStateFromResponses(responses, 'userRating')
        setRatings(userRatings)
        setTempRatings(userRatings)
      } catch (error) {
        console.error('Error al cargar valoraciones:', error)
      }
    }

    fetchRatings()
  }, [])

  const handleTempRating = useCallback((stars, projectId) => {
    setTempRatings((prev) => ({
      ...prev,
      [projectId]: stars
    }))
  }, [])

  const handleSubmitRating = useCallback(
    async (projectId) => {
      if (tempRatings[projectId] === 0 || tempRatings[projectId] === ratings[projectId]) {
        return
      }

      try {
        const response = await postStars(tempRatings[projectId], projectId)

        if (response && response.success) {
          setRatings((prev) => ({
            ...prev,
            [projectId]: tempRatings[projectId]
          }))

          setTotalRatings((prev) => ({
            ...prev,
            [projectId]: response.totalRatings || prev[projectId]
          }))

          setAverageRatings((prev) => ({
            ...prev,
            [projectId]: response.averageRating || prev[projectId]
          }))
        } else {
          console.error(`Error en la respuesta al valorar ${projectId}:`, response)
          notifyRatingError(`No se pudo guardar la valoración para ${projectId}. Por favor, intenta de nuevo.`)
        }
      } catch (error) {
        console.error(`Error al enviar valoración para ${projectId}:`, error)
        notifyRatingError(`Error al guardar la valoración para ${projectId}. Por favor, intenta de nuevo.`)
      }
    },
    [ratings, tempRatings]
  )

  return useMemo(
    () => ({
      tempRatings,
      ratings,
      averageRatings,
      totalRatings,
      handleTempRating,
      handleSubmitRating
    }),
    [tempRatings, ratings, averageRatings, totalRatings, handleTempRating, handleSubmitRating]
  )
}

