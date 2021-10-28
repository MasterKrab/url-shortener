import type { NextPage } from 'next'
import { useState, FormEvent } from 'react'
import useField from 'hooks/useField'
import validateUrl from 'utils/validateUrl'
import { shortUrl } from 'utils/api/urlApi'
import {
  Container,
  Title,
  FormBody,
  Input,
  HashInput,
  Button,
  OutputTitle,
  Output,
  Error,
} from 'styles/pages/short.styles'

interface Result {
  url: string
  shortUrl: string
}

const Short: NextPage = () => {
  const url = useField({ type: 'text', name: 'url' })
  const hash = useField({ type: 'text', name: 'hash' })
  const [result, setResult] = useState<Result | null>()
  const [error, setError] = useState<string>('')

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    setResult(null)
    setError('')

    const urlValue = url.value.trim()

    if (!urlValue) return setError('The link to short is required')

    if (!validateUrl(urlValue)) return setError('Please provide a valid url')

    shortUrl(url.value, hash.value.trim())
      .then(setResult)
      .catch(({ message }) => {
        setError(
          message === 'Error: Hash id already used'
            ? 'Hash is already used'
            : 'There was an error, try again later'
        )
      })
  }

  return (
    <Container>
      <Title>Short link</Title>
      <form onSubmit={handleSubmit}>
        <FormBody>
          <Input
            {...url}
            id="url"
            aria-label="Link to short"
            placeholder="Link to short..."
            aria-required="true"
            autoComplete="off"
            aria-invalid={!!error}
          />
          <HashInput
            {...hash}
            id="hash"
            aria-label="Custom hash (optional)"
            placeholder="Custom hash (optional)"
            autoComplete="off"
          />
          <Button>Short</Button>
        </FormBody>
        {result && (
          <>
            <OutputTitle>Shorted Link: </OutputTitle>
            <Output htmlFor="url">
              {window.location.origin}/{result.shortUrl}
            </Output>
          </>
        )}
        {error && <Error role="alert">{error}</Error>}
      </form>
    </Container>
  )
}

export default Short
