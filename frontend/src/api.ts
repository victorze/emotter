const API_URL = 'http://localhost:3000'

export const storeEmot = async (content: string) => {
  const response = await fetch(API_URL + '/api/emots', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ content }),
  })

  return response.json()
}
