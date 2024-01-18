import './App.css';
import { Typography } from '@mui/material';
import FirstStep from './Components/FirstStep';
import SecondStep from './Components/SecondStep';
import DisplayDataProduct from './Components/DisplayDataProduct';
import DisplayDataUser from './Components/DisplayDataUser'
import { useEffect, useState } from 'react';
import { Route, Routes, Link } from 'react-router-dom';

function App() {

  const [dataProduct, setDataProduct] = useState([]);

  const [dataUser, setDataUser] = useState([])

  const getDataUser = async () => {
    try {
      const response = await fetch("http://localhost:8000", {
        method: "GET",
        headers: {
          'Content-Type': 'application/json'
        }
      });
      const data = await response.json()
      setDataUser(data)
    } catch (error) {
      console.error('Error fetching data:', error)
    }
  }

  useEffect(() => {
    getDataUser()
  }, [])

  const addDataUser = async (newDataUser) => {
    try {
      const response = await fetch("http://localhost:8000/user", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newDataUser)
      })
      setDataUser([...dataUser, await response.json()]);
      getDataUser();
    }
    catch (error) {
      console.error('Error adding data:', error)
    }
  }

  const getDataProduct = async () => {
    try {
      const response = await fetch("http://localhost:8000/post", {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      });
      const data = await response.json()
      setDataProduct(data);
    } catch (error) {
      console.error('Error fetching data:', error)
    }
  }

  useEffect(() => {
    getDataProduct()
  }, [])

  const addDataProduct = async (newDataProduct) => {
    try {
      const response = await fetch("http://localhost:8000/post/product", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newDataProduct)
      })
      setDataProduct([...dataProduct, await response.json()]);
      getDataProduct();
    }
    catch (error) {
      console.error('Error adding data:', error)
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <Typography variant="h3" component="h4" color="black">
          <Link to={"/firstStep"}>Phiếu nhập kho</Link>
        </Typography>
        <Routes>
          <Route path='/firstStep' element={<FirstStep onSubmit={addDataUser} />}></Route>
          <Route path='/secondStep' element={<SecondStep onSubmit={addDataProduct} />}></Route>
        </Routes>
        {dataProduct.length > 0 ? <DisplayDataProduct products={dataProduct} /> : ""}
        {dataUser.length > 0 ? <DisplayDataUser users={dataUser} /> : ""}
      </header>
    </div>
  );
}

export default App;
