import { Variables } from 'relay-runtime'

export const fetchGraphQL = async (text: string, variables?: any) => {
  const response = await fetch('http://localhost:3333/', {
    method: 'POST',
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: text,
      variables,
    }),
  })

  const data = await response.json()

  return data
}
