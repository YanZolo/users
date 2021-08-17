import React from "react"
// import './App.css';
import Users from "./users.json"
import UserInfo from "./component/UserInfo"

class App extends React.Component {


  render() {
    console.log(Users)    

    return (
      <>
        
        {Users.map((elem)=> {
          return <UserInfo name={elem.name} email={elem.email} website={elem.website} /> 
        })}

      </>
    )
  }
}

export default App;
