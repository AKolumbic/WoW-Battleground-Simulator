import React, { useState } from 'react'
import { getBattleData } from '../server/index'

export const Battleground = () => {
  const bg = getBattleData()

  return(
    <div>
      <div>{bg.Battleground}</div>
      <div>{bg.Winner}</div>
      <div>{bg.VictoryText}</div>
      <div>{bg.Bracket}</div>
    </div>
  )

}