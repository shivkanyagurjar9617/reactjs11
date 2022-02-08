import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { Button, Table } from 'react-bootstrap';
import './App.css';

function App() {
  //state
  const[student,setStudent]=useState({
    data:[]
  });
  //Function
  let getStudents = (e)=>{ 
    console.log('good morning');
  }
    try {
      fetch('http://localhost:1337/api/students').then((data)=>{
        return data.json ();
      }).then((data)=>{
        console.log(data);
        setStudent(data);
      }).catch((err)=>{
        console.log(err);
      });

    } catch (error) {
      console.log(error);
    }
  return (
    <>
     <Button onClick={(e)=>{ getStudents(e) }}>Get My students</Button>
   <h1>Read Operation</h1>
   <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
             
              <th>students</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              student.data.map(function(currentValue, index, arr){
                console.log(arr[index].id);
                console.log(arr[index].attributes.name);
                return(
                  <tr key={index}>
                  <td>{arr[index].id}</td>
                  <td>{arr[index].attributes.name}</td>
                  <td>
                  <Button variant="success" size="sm">View</Button>{''}
                  <Button variant="primary" size="sm">Edit</Button>{''}
                  <Button variant="danger" size="sm">Delete</Button>{''}
                  </td>
                  </tr>
                )

              })
            }
          </tbody>
    
   </Table>
   </>

  );
}

export default App;
