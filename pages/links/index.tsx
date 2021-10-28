import { useState, useEffect } from 'react'
import type { NextPage } from 'next'
import { getUserUrls, deleteUrl } from 'utils/api/urlApi'
import { UrlModel } from 'models/Url'
import {
  Section,
  Header,
  Title,
  List,
  Item,
  Text,
  Span,
  Bold,
  Link,
  Buttons,
  Button,
} from 'styles/pages/links.styles'
import Spinner from 'components/Spinner'

const User: NextPage = () => {
  const [urls, setUrls] = useState<UrlModel[] | null>(null)

  const refreshUser = () => {
    getUserUrls().then(setUrls)
  }

  const refresh = () => {
    setUrls(null)
    refreshUser()
  }

  const handleDelete = (id: string) => () => {
    deleteUrl(id).then(refreshUser)
  }

  useEffect(refreshUser, [])

  return (
    <Section>
      <Header>
        <Title>Links</Title>

        <button
          onClick={refresh}
        >
          Refresh
        </button>
      </Header>
      <List aria-live="polite">
        {urls && urls.length ? (
          urls.map(({ url, shortUrl, visits }) => (
            <Item key={shortUrl}>
              <Text>
                <Span>
                  <Bold>URL: </Bold>
                  {url}
                </Span>
              </Text>
              <Text>
                <Span>
                  <Bold>Short: </Bold>
                  <Link href={`/${shortUrl}`} target="_blank" rel="noreferrer">
                    {shortUrl}
                  </Link>
                </Span>
              </Text>
              <Text>
                <Span>
                  <Bold>Visits: </Bold>

                  {visits}
                </Span>
              </Text>
              <Buttons>
                <Button
                  onClick={() => {
                    navigator.clipboard.writeText(
                      `${window.location.origin}/${shortUrl}`
                    )
                  }}
                >
                  Copy
                </Button>
                <Button
                  onClick={handleDelete(shortUrl)}
                  aria-label={`Delete url ${url} with short url ${shortUrl}`}
                >
                  Delete
                </Button>
              </Buttons>
            </Item>
          ))
        ) : urls === null ? (
          <Spinner />
        ) : (
          <Item>There are no links.</Item>
        )}
      </List>
    </Section>
  )
}

export default User
