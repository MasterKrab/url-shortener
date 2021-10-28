import { useState, ChangeEvent } from 'react'

interface Parameters {
  type: string
  name: string
}

const useField = ({ type, name }: Parameters) => {
  const [value, setValue] = useState<string>('')

  const onChange = ({ target }: ChangeEvent<HTMLInputElement>) =>
    setValue(target.value)

  const reset = () => setValue('')

  return { type, name, value, setValue, onChange, reset }
}

export default useField
