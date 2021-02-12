import React from 'react'

class Collapser extends React.Component {
  constructor(props){
  super(props);
  this.state = {
  open: false
  }
  this.togglePanel = this.togglePanel.bind(this);
  }
  
  togglePanel(){
  this.setState({open: !this.state.open})
  }
  
  render() {
    return (
      <div>
        <div onClick={() => this.togglePanel()}>

        {this.props.title}

        </div>

        {this.state.open ? (
          <div>
            {this.props.children}
          </div>
        ) : null}
      </div>);
    }
  }

export default Collapser;