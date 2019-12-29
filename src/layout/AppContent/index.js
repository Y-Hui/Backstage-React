import React from 'react';
import './index.scss';

class AppContent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      
    }
  }
  render() {
    return (
      <main className="app-content">
        {
          this.props.children
          // Array.isArray(this.props.children) ?
          //   this.props.children.map((child) => {
          //     return child
          //   }) : this.props.children
        }
      </main>
    )
  }
}

export default AppContent
