import React from 'react'
import {
  UploadBody,
  UploadText,
  UploadLink,
  RoundedImg
} from './drag-and-drop.styles'
import DefaultCompanyLogo from '../shared/default-company-logo'

type PresentationalProps = {
  dragging: boolean
  progress: number | null
  url: string | null
  onSelectFileClick: () => void
  onDrag: (event: React.DragEvent<HTMLDivElement>) => void
  onDragStart: (event: React.DragEvent<HTMLDivElement>) => void
  onDragEnd: (event: React.DragEvent<HTMLDivElement>) => void
  onDragOver: (event: React.DragEvent<HTMLDivElement>) => void
  onDragEnter: (event: React.DragEvent<HTMLDivElement>) => void
  onDragLeave: (event: React.DragEvent<HTMLDivElement>) => void
  onDrop: (event: React.DragEvent<HTMLDivElement>) => void
}

export const FileUploaderPresentationalComponent: React.SFC<PresentationalProps> = (
  props
) => {
  const {
    dragging,
    progress,
    url,
    onSelectFileClick,
    onDrag,
    onDragStart,
    onDragEnd,
    onDragOver,
    onDragEnter,
    onDragLeave,
    onDrop
  } = props

  return (
    <UploadBody
      isDragging={dragging}
      onDrag={onDrag}
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
      onDragOver={onDragOver}
      onDragEnter={onDragEnter}
      onDragLeave={onDragLeave}
      onDrop={onDrop}
    >
      {url ? <RoundedImg src={url} /> : <DefaultCompanyLogo />}
      <UploadText>Drag & drop here</UploadText>
      <p>- or -</p>
      <UploadLink onClick={onSelectFileClick}>Select file to upload</UploadLink>
      {progress ? <p>Progress {progress}</p> : null}
      {props.children}
    </UploadBody>
  )
}

export default FileUploaderPresentationalComponent
