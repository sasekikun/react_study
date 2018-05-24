import React from 'react';

const createObjectURL = (window.URL || window.webkitURL).createObjectURL || window.createObjectURL;

class PositionedSnackbar extends React.Component {
  state = {
    image_src: ""
  }

  handleChangeFile = e => {
      var files = e.target.files
      var image_url = createObjectURL(files[0])
      this.setState({image_src: image_url})
  }

  render() {
    return (
      <div>
        <input type="file" ref="file" onChange={this.handleChangeFile} />
        <br />
        <img src={this.state.image_src} alt={this.state.image_src} style={{width: '200px', height:'auto'}} />
      </div>
    )
  }
}

export default PositionedSnackbar
