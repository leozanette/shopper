import { useEffect, useState } from 'react';
import './App.css'
import Button from './components/Button';
import Table from './components/Table';
import FileInput from './components/FileInput';
import Papa from 'papaparse';
import { regrasNegocio, validateButtonClick } from './utils/functions';

function App() {
  const [products, setProducts] = useState([]);
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

  const checkAtualizarButton = () => {
    const isValid = productsTable.every((ele) => regrasNegocio(ele.new_price, ele.sales_price, ele.cost_price) !== "Reajuste Válido")
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

  useEffect(() => {
    const getProducts = async () => {
      fetch('http://localhost:3001/products')
      .then(response => response.json())
      .then(data => setProducts(data))
    };
    getProducts();
    checkAtualizarButton();
  }, [productsTable])
  return (
    <div className='main-container'>
    <FileInput handleFileChange={handleFileChange}/>
    <Button text="VALIDAR" onClick={() => validateButtonClick(productCSV, products, setProductsTable)}/>
    <Button text="ATUALIZAR" disabled={isDisable} onClick={ () => clickAtualizarButton()}/>
    {productsTable.length > 0 ? <Table products={productsTable} /> : <p>Carregue o arquivo para atualização.</p>}
    </div>
  );
}

export default App;
