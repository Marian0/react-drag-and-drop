import styled from 'styled-components'

export const UploadWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`

export const UploadContainer = styled.div`
  background: #ffffff;
  border: 1px solid #e8f1fb;
  box-sizing: border-box;

  display: flex;
  flex-direction: column;

  width: 40vw;
  max-width: 600px;
  height: 80vh;
`

export const UploadHeader = styled.div`
  height: 100px;
  border-bottom: 1px solid #e8f1fb;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const UploadTitle = styled.h1`
  font-family: proxima-nova;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 20px;
  color: #1a2533;
`

export const UploadHint = styled.p`
  font-family: proxima-nova;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 12px;
  color: #6b85a3;
  padding-top: 5px;
`
