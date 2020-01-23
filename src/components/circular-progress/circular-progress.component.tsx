import React from 'react'
import './circular-progress.styles.scss'

type Props = {
  progress: number
}

const CircularProgress = (props: Props) => {
  const { progress } = props
  const roundedProgress = Math.ceil(progress / 10) * 10
  return (
    <div className={`radialProgressBar progress-${roundedProgress}`}>
      <div className="overlay">{Math.ceil(progress)}%</div>
    </div>
  )
}

export default CircularProgress
