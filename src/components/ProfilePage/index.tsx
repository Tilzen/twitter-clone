import React from 'react'

import Feed from '../Feed'

import {
  Container,
  Banner,
  Avatar,
  ProfileData,
  EditButton,
  LocationIcon,
  CakeIcon,
  Followage
} from './styles'

function ProfilePage(): React.ReactElement {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>

      <ProfileData>
        <EditButton outlined>Editar Perfil</EditButton>

        <h1>Jubileu Flonders</h1>
        <h2>@jubileu_flonders</h2>

        <p>Especulador Florestal</p>

        <ul>
          <li>
            <LocationIcon />
            São Paulo, Brasil
          </li>
          <li>
            <CakeIcon />
            Nascido(a) em 14 Janeiro de 2001
          </li>
        </ul>

        <Followage>
          <span>
            seguindo <strong>0</strong>
          </span>
          <span>
            <strong>8.001 </strong> seguidores
          </span>
        </Followage>
      </ProfileData>
      <Feed />
    </Container>
  )
}

export default ProfilePage