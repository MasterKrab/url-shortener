const responseIsJson = async (response: Response) => {
  const text = await response.text()
  try {
    const json = JSON.parse(text)
    return json
  } catch {
    return null
  }
}

export default responseIsJson
