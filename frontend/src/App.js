import { useState } from 'react';
import './App.css'
import Button from './components/Button';
import Table from './components/Table';
import FileInput from './components/FileInput.jsx';
import Papa from 'papaparse';
import Header from './components/Header.jsx';


function App() {
  const [isDisable, setIsDisable] = useState(true);
  const [productCSV, setProductCSV] = useState([]);
  const [productsTable, setProductsTable] = useState([]);
  
  const handleFileChange = async (event) => {
    Papa.parse(event.target.files[0], 
      {
        download:true,
        header: true,
        skipEmptyLines: true,
        complete: function(results) {
          setProductCSV(results.data);
        }
      });
  };

  const validateButtonClick = () => {
    const isValid = productCSV.every((element) => 
    !(element.new_price === undefined || !(parseFloat(element.new_price) > 0) || element.product_code === undefined || !(parseInt(element.product_code) > 0)))
  
    if(isValid) {
      fetch('http://localhost:3001/products', {
      method: 'POST',
      headers:{
        'Content-Type': 'application/json'
      }, 
      body: JSON.stringify(productCSV)
    }).then(response => response.json())
    .then(data => setProductsTable(data))
    
    checkAtualizarButton();
    } else {
      alert('arquivo fora do padrão')
    }
  }

  const checkAtualizarButton = () => {
    const isValid = !productsTable.every((ele) => ele.regra === "Reajuste Válido");
    setIsDisable(isValid);
  }

  const clickAtualizarButton = () => {
    fetch('http://localhost:3001/products', {
      method: 'PUT',
      headers:{
        'Content-Type': 'application/json'
      }, 
      body: JSON.stringify(productsTable)
    }).then(response => response.json())
    .then(data => console.log(data))

    alert('Valores Atualizados');
    setProductsTable([]);
  }

  return (
    <>
      <Header/>
      <FileInput handleFileChange={handleFileChange}/>
      <div className='main-container'>
        <Button text="VALIDAR" onClick={() => validateButtonClick(productCSV, setProductsTable)}/>
        <Button text="ATUALIZAR" disabled={isDisable} onClick={ () => clickAtualizarButton()}/>
        {productsTable.length > 0 ? <Table products={productsTable} /> : <p>Carregue o arquivo para atualização.</p>}
      </div>
    </>
  );
}

export default App;
