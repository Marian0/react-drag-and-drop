import styled, { css } from 'styled-components'

interface Props {
  isDragging: boolean
}

const dragInCss = css`
  background: #f5f9ff;
  border: 1px dashed #4991e5;
  box-sizing: border-box;
`

export const UploadBody = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  flex-direction: column;

  ${(p: Props) => (p.isDragging ? dragInCss : '')};
`

export const UploadText = styled.p`
  margin-top: 5px;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 12px;
  text-align: center;
  color: #324964;
`
export const UploadLink = styled.span`
  color: #4991e5;
  cursor: pointer;
`
export const HiddenInputFile = styled.input`
  display: none;
`

export const RoundedImg = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
`
