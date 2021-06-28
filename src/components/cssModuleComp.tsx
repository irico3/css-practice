import React, { FC } from 'react'
const styles = require('./comp.module.css') //ts対策

export const CssModuleComp = () => (
  <section className={styles.charaSection}>
    <ul className={styles.list}>
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
  <li className={styles.item}>
    <a href="/" className={styles[`inner--${charaName}`]}>
      <span className={styles.name}>{charaName}</span>
    </a>
  </li >
)