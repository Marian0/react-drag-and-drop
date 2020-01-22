import React from 'react'
import {
  UploadContainer,
  UploadWrapper,
  UploadHeader,
  UploadTitle,
  UploadHint,
  UploadBody,
  UploadText,
  UploadLink
} from './upload.styles'
import DefaultCompanyLogo from '../shared/default-company-logo'

const Upload = () => (
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
      <UploadBody>
        <DefaultCompanyLogo />
        <UploadText>Drag & drop here</UploadText>
        <p>- or -</p>
        <UploadLink href="">Select file to upload</UploadLink>
      </UploadBody>
    </UploadContainer>
  </UploadWrapper>
)

export default Upload
