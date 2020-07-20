import React from 'react'

import MenuBar from '../MenuBar'
import Main from '../Main'
import SideBar from '../SideBar'

import { MainContainer, Wrapper } from './styles'

function Layout(): React.ReactElement {
  return (
      <MainContainer>
        <Wrapper>
          <MenuBar />
          <Main />
          <SideBar />
        </Wrapper>
      </MainContainer>
  )
}

export default Layout