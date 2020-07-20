import React from 'react'

import Button from '../Button'

import {
  Container,
  TopSide,
  Logo,
  MenuButton,
  HomeIcon,
  BellIcon,
  EmailIcon,
  FavoriteIcon,
  ProfileIcon,
  BotSide,
  Avatar,
  ProfileData,
  ExitIcon
} from './styles'

function MenuBar(): React.ReactElement {
  return (
    <Container>
      <TopSide>
        <Logo />

        <MenuButton>
         <HomeIcon />
         <span>Página Inicial</span> 
        </MenuButton>

        <MenuButton>
         <BellIcon />
         <span>Notificações</span> 
        </MenuButton>

        <MenuButton>
         <EmailIcon />
         <span>Mensagens</span> 
        </MenuButton>

        <MenuButton>
         <FavoriteIcon />
         <span>Favoritados</span> 
        </MenuButton>

        <MenuButton className="active">
         <ProfileIcon />
         <span>Perfil</span> 
        </MenuButton>

        <Button>
          <span>Tweetar</span>
          <span>+</span>
        </Button>
      </TopSide>

      <BotSide>
        <Avatar />

        <ProfileData>
          <strong>Jubileu Flonders</strong>
          <span>@jubileu_flonders</span>
        </ProfileData>

        <ExitIcon />
      </BotSide>
    </Container>
  )
}

export default MenuBar