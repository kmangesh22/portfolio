import React from 'react'
import {Card} from 'antd'

const identifiers=["CS Pedia","ChatTown"]

class Project extends React.Component{
  constructor(props){
    super(props)
    this.state={
      loading:true,
      link:"",
      github:"",
      description:"",
    }
  }

  componentDidMount(){
    fetch(`/projects.json`)
    .then(res => res.json())
    .then(res => {
      let data=res.filter((project)=>project.title===this.props.title)
      this.setState({
        loading:false,
        github:data[0].github,
        link:data[0].link,
        description:data[0].description,
      });
    })
    .catch(err => console.log(err))
  }

  render(){
    return(
      <div style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
        <Card style={{ width: "90%", marginTop: 16 }} title={this.props.title} loading={this.state.loading}  extra={<a href={this.state.github}>Github</a>}>
          <p>{this.state.description}</p>
          {this.state.link?<a href={this.state.link}>Link</a>:""}
        </Card>
      </div>
    );
  }

}


export default function Projects(){
  const projects=identifiers.map(identifier=><Project key={identifier} title={identifier} />)
  return(
    <div>{projects}</div>
  )
}
