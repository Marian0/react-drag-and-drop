import React from 'react'
import {
  UploadContainer,
  UploadWrapper,
  UploadHeader,
  UploadTitle,
  UploadHint
} from './upload.styles'
import DragAndDrop from '../drag-and-drop/drag-and-drop.component'

const Upload = () => {
  return (
    <UploadWrapper>
      <UploadContainer>
        <UploadHeader>
          <div>
            <UploadTitle>Company Logo</UploadTitle>
            <UploadHint>
              Logo should be square, 100px size and in png, jpeg file format.
            </UploadHint>
          </div>
        </UploadHeader>
        <DragAndDrop />
      </UploadContainer>
    </UploadWrapper>
  )
}

export default Upload
