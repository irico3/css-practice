import React, { FC } from 'react'
import styled from 'styled-components'

export const StyledComp = () => (
  <CharaSection>
    <List>
      <Card charaName="kirby" color="violet" />
      <Card charaName="waddleDee" color="yellow" />
      <Card charaName="dedede" color="rgb(104, 104, 248)" />
      <Card charaName="metaKnight" color="purple" />
    </List>
  </CharaSection>
)

type CardProps = {
  charaName: 'kirby' | 'waddleDee' | 'metaKnight' | 'dedede'
  color: string
}

const Card: FC<CardProps> = ({ charaName, color }) => (
  <Item>
    <Inner color={color} href="/">
      <Name>{charaName}</Name>
    </Inner>
  </Item >
)

const CharaSection = styled.section`
  padding: 30px;
  background: pink;
`
const List = styled.ul`
  display: flex;
  justify-content: center;
  margin: 0 auto;
  max-width: 1000px;
`

const Item = styled.li`
  position: relative;
  margin-right: 30px;
  padding-top: calc((100% - (30px * 3) ) / 4);
  width: calc((100% - (30px * 3) ) / 4);
  &:last-of-type {
    margin-right: 0;
  }
`

const Inner = styled.a`
  position: absolute;
  inset: 0;
  display: block;
  width: 100%;
  border-radius: 10px;
  box-shadow: 5px 5px 0 0 rgb(0 0 0 / 15%);
  background: ${({ color }) => color};
`

const Name = styled.span`
  color: #000;
`