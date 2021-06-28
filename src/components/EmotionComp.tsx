/** @jsxRuntime classic */
/** @jsx jsx */
import { FC } from 'react'
import { css, jsx } from '@emotion/react'

export const EmotionComp = () => (
  <section css={charaSectionCss}>
    <ul css={listCss}>
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
  <li css={itemCss}>
    <a href="/" css={innerCss(color)}>
      <span css={nameCss}>{charaName}</span>
    </a>
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

const innerCss = (color: string) => css`
  position: absolute;
  inset: 0;
  display: block;
  width: 100%;
  border-radius: 10px;
  box-shadow: 5px 5px 0 0 rgb(0 0 0 / 15%);
  background: ${color};
`

const nameCss = css`
  color: #000;
`