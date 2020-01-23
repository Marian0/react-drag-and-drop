import React, { Component } from 'react'
import FileUploaderPresentationalComponent from './drag-and-drop-presentational.component'
import { HiddenInputFile } from './drag-and-drop.styles'
import axios from 'axios'

type Props = {}

type State = {
  dragging: boolean
  file: File | null
  url: string | null
  progress: number
}

class DragAndDrop extends Component<Props, State> {
  fileUploaderInput: HTMLElement | null = null
  dragEventCounter = 0

  constructor(props: Props) {
    super(props)
    this.state = { dragging: false, file: null, url: '', progress: -1 }
  }

  componentDidMount() {
    window.addEventListener('dragover', (event: Event) => {
      this.overrideEventDefaults(event)
    })
    window.addEventListener('drop', (event: Event) => {
      this.overrideEventDefaults(event)
    })
  }

  componentWillUnmount() {
    window.removeEventListener('dragover', this.overrideEventDefaults)
    window.removeEventListener('drop', this.overrideEventDefaults)
  }

  overrideEventDefaults = (event: Event | React.DragEvent<HTMLDivElement>) => {
    event.preventDefault()
    event.stopPropagation()
  }

  dragenterListener = (event: React.DragEvent<HTMLDivElement>) => {
    this.overrideEventDefaults(event)
    this.dragEventCounter++
    if (event.dataTransfer.items && event.dataTransfer.items[0]) {
      this.setState({ dragging: true })
    }
  }

  dragleaveListener = (event: React.DragEvent<HTMLDivElement>) => {
    this.overrideEventDefaults(event)
    this.dragEventCounter--

    if (this.dragEventCounter === 0) {
      this.setState({ dragging: false })
    }
  }

  dropListener = (event: React.DragEvent<HTMLDivElement>) => {
    this.overrideEventDefaults(event)
    this.dragEventCounter = 0
    this.setState({ dragging: false })

    if (event.dataTransfer.files && event.dataTransfer.files[0]) {
      this.setState({ file: event.dataTransfer.files[0] }, this.startUploading)
    }
  }

  onSelectFileClick = () => {
    this.fileUploaderInput && this.fileUploaderInput.click()
  }

  onFileChanged = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      this.setState({ file: event.target.files[0] }, this.startUploading)
    }
  }

  startUploading = async () => {
    if (!this.state.file) {
      return
    }
    const data = new FormData()
    data.append('file', this.state.file)
    axios
      .post('http://localhost/test-uploads/upload.php', data, {
        onUploadProgress: (ProgressEvent) => {
          this.setState({
            progress: (ProgressEvent.loaded / ProgressEvent.total) * 100
          })
        }
      })
      .then((res) => res.data)
      .then((data) => {
        console.log('Data: ', data)
        this.setState({
          progress: -1,
          file: null,
          url: data.url
        })
      })
      .catch((err: Error) => {
        console.log('upload fail', err)
      })
  }

  render() {
    return (
      <FileUploaderPresentationalComponent
        dragging={this.state.dragging}
        progress={this.state.progress}
        url={this.state.url}
        onSelectFileClick={this.onSelectFileClick}
        onDrag={this.overrideEventDefaults}
        onDragStart={this.overrideEventDefaults}
        onDragEnd={this.overrideEventDefaults}
        onDragOver={this.overrideEventDefaults}
        onDragEnter={this.dragenterListener}
        onDragLeave={this.dragleaveListener}
        onDrop={this.dropListener}
      >
        <HiddenInputFile
          ref={(el) => (this.fileUploaderInput = el)}
          type="file"
          onChange={this.onFileChanged}
        />
      </FileUploaderPresentationalComponent>
    )
  }
}

export default DragAndDrop
