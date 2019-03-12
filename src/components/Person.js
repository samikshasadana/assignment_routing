import React, { Component } from 'react';
import Info from './Info';
import AddInfo from './AddInfo';

class Person extends Component {
  state ={
      infos: [
      { name: 'Samiksha', birthday:'27/02/1998', aboutMe:'I love to dance', id: 1 },
      ]
  }
  deleteInfo = (id)=>{
      //console.log(id);
      let infos = this.state.infos.filter(info=>{
          return info.id!==id;
      })
      console.log('After Deleting',infos);
      this.setState({
          infos
      })
  }
  addInfo = (info) => {
    console.log('Inside App Component', info);
    info.id = Math.floor(Math.random() * 10);
    console.log(info.id);
    let infos = [...this.state.infos, info];
    this.setState({
      infos
    })
  }
  componentDidMount(){
      console.log('Component has been mounted');
  }
componentDidUpdate(prevProps, prevState){
    console.log("Component updated");
    console.log(prevProps, prevState);
}
  render(){
      return (
        <div className="App container">
          <h4 className="center abc">Information of People</h4><br />
          <Info infos={this.state.infos} deleteInfo={this.deleteInfo}/><br />
          <h5 className="abc">Add Person Details</h5><br/>
          <AddInfo addInfo={this.addInfo} />
        </div>
      );
  }
}

export default Person;
// ... spread operator to create a copy