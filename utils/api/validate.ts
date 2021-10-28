const validate = (Schema: any, value: object | string) => {
  try {
    const { error } = Schema.validate(value)

    if (error) throw new Error('InvalidFields')
  } catch (error) {
    throw new Error('InvalidFields')
  }
}

export default validate
