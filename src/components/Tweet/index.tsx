import React from 'react'

import {
  Container,
  Retweeted,
  TwitterIcon,
  Body,
  Avatar,
  Content,
  Header,
  Dot,
  Description,
  ImageContent,
  Icons,
  Status,
  CommentIcon,
  RetweetIcon,
  LikeIcon
} from './styles'


function Tweet(): React.ReactElement {
  return (
    <Container>
      <Retweeted>
        <TwitterIcon />
        Você retweetou
      </Retweeted>

      <Body>
        <Avatar />

        <Content>
          <Header>
            <strong>Dougras</strong>
            <span>@odougras</span>
            <Dot />
            <time>20 de jun</time>
          </Header>

          <Description>Que vontade de tomar uma coquinha gelada.</Description>

          <ImageContent />

          <Icons>
            <Status>
              <CommentIcon />
              987
            </Status>

            <Status>
              <RetweetIcon />
              785
            </Status>

            <Status>
              <LikeIcon />
              999
            </Status>
          </Icons>
        </Content>
      </Body>
    </Container>
  )
}

export default Tweet