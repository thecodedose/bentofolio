"use client"
import { useState } from "react"
import { GRIDS } from "./constants"
import { useTransition } from "@react-spring/web"

export default function Home() {
  const [currentGrid, setCurrentGrid] = useState(GRIDS[0])

  const transitions = useTransition(currentGrid, {
    enter: { scale: 1 },
    leave: { scale: 0 },
    config: { duration: 300 },
  })

  return transitions((style, item) => {
    const Grid = item.Component
    return <Grid setCurrentGrid={setCurrentGrid} animatedStyles={style} />
  })
}
