import React from 'react';
import logo from './logo.svg';
import './App.css';
import ClassComponent from './component/ClassComponent'
import FunctionalComponent from './component/FunctionalComponent'

interface IUser {
  empname: string;
  address: string;
  phone: number;
}

interface UserSub {
  iusers: IUser[];
  iusers2: IUser[];
}



  
function App() {
  const users: IUser[] = [
    { empname: "Sukesh", address: "Cuttack" ,phone:8339963720 },
    { empname: "Bikash", address: "Paradip" , phone: 8901752104},
    { empname: "Rajiv", address: "Jajpur" ,phone:8687458720}
  ];

  const users2: IUser[] = [
    { empname: "Jagannath", address: "Bhubaneswar" ,phone:7064507892},
    { empname: "Kishor", address: "Puri" ,phone:7920351024}
  ];
  return (
    <div className="App">
         <ClassComponent iusers={users} iusers2={users2} />
        {/* <FunctionalComponent iusers={users} iusers2={users2} />  */}

        
    </div>
  );
}

export default App;
