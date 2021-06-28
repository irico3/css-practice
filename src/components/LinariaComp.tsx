import React, { FC } from 'react'
import { styled } from '@linaria/react'
import { css } from '@linaria/core'

export const LinariaComp = () => (
  <section className={charaSectionCss}>
    <ul className={listCss}>
      <Card charaName="kirby" color="violet" />
      <Card charaName="waddleDee" color="yellow" />
      <Card charaName="dedede" color="rgb(104, 104, 248)" />
      <Card charaName="metaKnight" color="purple" />
    </ul>
  </section>
)

type CardProps = {
  charaName: 'kirby' | 'waddleDee' | 'metaKnight' | 'dedede'
  color: string
}

const Card: FC<CardProps> = ({ charaName, color }) => (
  <li className={itemCss}>
    <Inner href="/" color={color}>
      <span className={nameCss}>{charaName}</span>
    </Inner>
  </li >
)

const charaSectionCss = css`
  padding: 30px;
  background: pink;
`

const listCss = css`
  display: flex;
  justify-content: center;
  margin: 0 auto;
  max-width: 1000px;
`

const itemCss = css`
  position: relative;
  margin-right: 30px;
  padding-top: calc((100% - (30px * 3) ) / 4);
  width: calc((100% - (30px * 3) ) / 4);
  &:last-of-type {
    margin-right: 0;
  }
`

// TODO: tsエラー
const Inner = styled.a<{ color: string }>`
  position: absolute;
  inset: 0;
  display: block;
  width: 100%;
  border-radius: 10px;
  box-shadow: 5px 5px 0 0 rgb(0 0 0 / 15%);
  background: ${({ color }: { color: string }) => color};
`

const nameCss = css`
color: #000;
`