const responseHandler = async (response: Response): Promise<any> => {
  const result = await response.json()

  if (!response.ok) throw new Error(result.message)

  return result
}

export default responseHandler
