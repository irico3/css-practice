import React, { FC } from 'react'

export const BemComp = () => (
  <section className="charaSection">
    <ul className="charaSection__list">
      <Card charaName="kirby" />
      <Card charaName="waddleDee" />
      <Card charaName="dedede" />
      <Card charaName="metaKnight" />
    </ul>
  </section>
)

type CardProps = {
  charaName: 'kirby' | 'waddleDee' | 'metaKnight' | 'dedede'
}

const Card: FC<CardProps> = ({ charaName }) => (
  <li className="charaSection__list__item">
    <a href="/" className={`charaSection__list__item__inner--${charaName}`}>
      <span className="charaSection__list__item__inner__name">{charaName}</span>
    </a>
  </li>
)