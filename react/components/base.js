import React from 'react';
import Sidebar from 'react-sidebar';

const mql = window.matchMedia(`(min-width: 800px)`);

export default class Base extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      mql: mql,
      docked: props.docked,
      open: props.open
    }

    this.mediaQueryChanged = this.mediaQueryChanged.bind(this);
    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
  }

  onSetSidebarOpen(open) {
    this.setState({sidebarOpen: open});
  }

  componentWillMount() {
    mql.addListener(this.mediaQueryChanged);
    this.setState({mql: mql, sidebarDocked: mql.matches});
  }

  componentWillUnmount() {
    this.state.mql.removeListener(this.mediaQueryChanged);
  }

  mediaQueryChanged() {
    this.setState({sidebarDocked: this.state.mql.matches});
  }

  render() {
    var sidebarItemStyle = {
      display: 'block', 
      padding: '16px 0px', 
      textDecoration: 'none', 
      fontFamily:'Inconsolata, monospace', 
      color: 'white'
    };

    var sidebarContent = 
      <div style={{display: 'flex', alignItems: 'center', height:'100%'}}>
        <div style={{paddingLeft:'20px', paddingRight:"20px"}}>
          <a href="/paintings" style={sidebarItemStyle}>Paintings</a>
          <a href='/about' style={sidebarItemStyle}>About</a>
          <a href='/contact' style={sidebarItemStyle}>Contact</a>
        </div>
      </div>;
 
   var sidebarProps = {
      sidebar: this.state.sidebarOpen,
      docked: this.state.sidebarDocked,
      onSetOpen: this.onSetSidebarOpen
    };

    return (
      <Sidebar sidebar={sidebarContent}
               open={this.state.sidebarOpen}
               docked={this.state.sidebarDocked}
               onSetOpen={this.onSetSidebarOpen}>
        {this.props.content}
      </Sidebar>
    );
  }
};
