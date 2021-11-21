export async function GET(api)  {
  return (await fetch(`/.netlify/functions/${api}`)).json()
}

export async function POST(api, body) {
  return (await fetch(`/.netlify/functions/${api}`, {
    method: 'PUT',
    body: JSON.stringify(body)
  })).json()
}