import React from 'react'
import StickyBox from 'react-sticky-box'

import List from '../List'
import FollowSuggestion from '../FollowSuggestion'
import News from '../News'

import {
  Container,
  SearchWrapper,
  SearchInput,
  SearchIcon,
  Body
} from './styles'

function SideBar(): React.ReactElement {
  return (
    <Container>
      <SearchWrapper>
        <SearchInput placeholder="Buscar no Twitter" />
        <SearchIcon />
      </SearchWrapper>

      <StickyBox>
      <Body>
        <List
          title="Talvez você curta"
          elements={[
            <FollowSuggestion
              name="Petrúquio Charles"
              nickname="@pcharles"
            />,
            <FollowSuggestion
              name="Bronhilson"
              nickname="@bronfilson"
            />,
            <FollowSuggestion
              name="Djondi Macarroni"
              nickname="@djondimcrn"
            />
          ]}
        />
        <List
          title="Talvez você curta"
          elements={[
            <News />,
            <News />,
            <News />
          ]}
        />
        <List
          title="Talvez você curta"
          elements={[
            <News />,
            <News />,
            <News />
          ]}
        />
        <List
          title="Talvez você curta"
          elements={[
            <News />,
            <News />,
            <News />
          ]}
        />
      </Body>
      </StickyBox>
    </Container>
  )
}

export default SideBar