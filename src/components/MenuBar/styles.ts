import styled, { css } from 'styled-components'

import {
  Home,
  Notifications,
  Email,
  FavoriteBorder,
  Person,
  ExitToApp,
  Twitter
} from '../../styles/Icons'

export const Container = styled.div`
  display: none;

  @media (min-width: 500px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: sticky;
    top: 0;
    left: 0;
    padding: 10px 20px;
    max-height: 100vh;
    overflow-y: auto;
  }
`

export const TopSide = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 1280px) {
    align-items: flex-start;
  }
`

export const Logo = styled(Twitter)`
  width: 40px;
  height: 40px;

  > path {
    fill: var(--twitter);
  }

  margin-bottom: 20px;
`

export const MenuButton = styled.button`
  display: flex;
  align-items: center;
  flex-shrink: 0;
  width: 100%;

  > span {
    display: none;
  }

  @media (min-width: 1280px) {
    > span {
      display: inline;
      margin-left: 20px;
      font-weight: 400;
      font-size: 16px;
    }

    padding-right: 15px;
  }

  padding: 8.25px 0;
  outline: 0;

  & + button {
    margin-top: 16px;
  }

  & + button:last-child {
    transition: 0.6s;
    margin-top: 33px;
    width: 50px;
    height: 50px;
    /* padding: 7.5px; */

    > span {
      display: none;
    }

    > span + span {
      display: flex;
      line-height: 0;
      font-size: 40px;
      font-weight: 300;
      color: var(--white);
    }

    @media (min-width: 1280px) {
      width: 100%;
      height: unset;

      > span {
        display: inline;
      }

      > span + span {
        display: none;
      }
    }
  }

  cursor: pointer;
  border-radius: 25px;

  &:hover {
    transition: 0.5s;
    background: var(--twitter-dark-hover);
  }

  &:hover, &.active {
    > span, svg {
      color: var(--twitter);
      fill: var(--twitter);
    }
  }
`

const iconCSS = css`
  flex-shrink: 0;
  width: 30px;
  height: 30px;
  color: var(--white);
`

export const HomeIcon = styled(Home)`${iconCSS}`
export const BellIcon = styled(Notifications)`${iconCSS}`
export const EmailIcon = styled(Email)`${iconCSS}`
export const FavoriteIcon = styled(FavoriteBorder)`${iconCSS}`
export const ProfileIcon = styled(Person)`${iconCSS}`

export const BotSide = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: center;
`

export const Avatar = styled.div`
  width: 40px;
  height: 40px;
  flex-shrink: 0;
  border-radius: 50%;
  background: var(--gray);
`

export const ProfileData = styled.div`
  display: none;

  @media (min-width: 1280px) {
    display: flex;
    flex-direction: column;
    margin-left: 10px;
    font-size: 14px;

    > span {
      color: var(--gray);
    }
  }
`

export const ExitIcon = styled(ExitToApp)`
  display: none;

  @media (min-width: 1280px) {
    display: inline-block;
    width: 25px;
    height: 25px;
    color: var(--white);
    margin-left: 30px;
    cursor: pointer;

    &:hover {
      > path {
        color: var(--like);
      }
    }
  }
`