import React, { Component } from 'react'
import {Menu,Dropdown,Icon} from 'antd'
import {BrowserRouter,Link,Route} from 'react-router-dom'
import Home from './Home'
import Art from "./Art"
import Posts from "./Posts"
import Projects from "./Projects"
import "../sass/App.scss"
import 'antd/dist/antd.css';

class App extends Component {
  render() {
    return(
      <BrowserRouter>
            {this.renderNavigation()}
      </BrowserRouter>
    );
  }

  renderNavigation(){
    const links=(
      <Menu>
        <Menu.Item><a href="https://github.com/kumarmangesh55/"><Icon type="github" />GitHub</a></Menu.Item>
        <Menu.Item><a href="#"><Icon type="file-ppt" />Resume</a></Menu.Item>
        <Menu.Item><a href="https://www.youtube.com/channel/UCK11z-Op3tZZz0dU6YHFKDg"><Icon type="youtube" />YouTube</a></Menu.Item>
      </Menu>
    );
    return(
      <div>
        <nav>
          <ul>
            <Link className="link-item" to="/">Home</Link>
            <Link className="link-item" to="/posts">Posts</Link>
            <Link className="link-item" to="/projects">Projects</Link>
            <Link className="link-item" to="/art">Art Gallery</Link>
            <Dropdown overlay={links}>
              <span className="link-item">Links<Icon type="down" /></span>
            </Dropdown>
          </ul>
        </nav>
        <Route exact path="/" component={Home} />
        <Route exact path="/art" component={Art} />
        <Route path="/posts" component={Posts} />
        <Route exact path="/projects" component={Projects} />
      </div>
    );
  }
}

export default App;
