
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';


function App() {

  const [state, setState] = useState([]);

  useEffect(() => {
    axios.get('https://dummyjson.com/users').then((res) => {
      console.log(res.data)
      setState(res.data.users);
      console.log(res.data.users);
    })
  }, [])

  return (
    <div className="App">
      <table className="table table-bordered">
        <tr>
          <th scope="col">firstName</th>
          <th scope="col">lastName</th>
          <th scope="col"> age</th>
          <th scope="col"> bloodGroup</th>
        </tr>
        {
          state.map(
            ele => {
              return (

                <tr>

                  <td>{ele.firstName}</td>
                  <td>{ele.lastName}</td>
                  <td>{ele.age}</td>
                  <td>{ele.bloodGroup}</td>
                </tr>

              )
            })
        }
      </table>
    </div>

  );

}

export default App;
