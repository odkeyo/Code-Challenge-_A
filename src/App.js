import React,{useEffect, useState} from 'react';
import "antd/dist/antd.css";
import './components/myTable.js';
import Mytable from './components/myTable.js';
import Mysummary from './components/Mysummary.js';
import Mymodal from './components/Mymodal.js';

const App = () => {
  let dataSource = [
    {
      key: 1,
      nombre: 'Diego Cardenas',
      monto: 32,
      detalle: 'pago de la chapeada',
      tipo: 'ingreso',
      fecha: '29/11/2021'
    },
    {
      key: 2,
      nombre: 'Diego Cardenas',
      monto: 42,
      detalle: 'pago del machete',
      tipo: 'gasto',
      fecha: '05/12/2021'
    },
  ]

  const [ingreso, setIngreso] = useState(0);
  const [gasto, setGasto] = useState(0);
  const [total, setTotal] = useState(0);
  const [currentData, setCurrentData] = useState({});

  const calcularTotales = () =>{
    if(currentData.length === undefined){
      setCurrentData(dataSource);
    }
    let totalgasto=0;
    let totalingreso=0;
    const gastos=currentData.filter(x => x.tipo === 'gasto');
    totalgasto=calcularTotal(gastos);
    setGasto(totalgasto);
    const ingresos=currentData.filter(x => x.tipo === 'ingreso');
    totalingreso=calcularTotal(ingresos);
    setIngreso(totalingreso);
    setTotal(totalingreso-totalgasto);
  }

  const calcularTotal = (dataToUse) =>{
    return (dataToUse.reduce(function(prev, current) {
      return prev + +current.monto
    }, 0))
  }
  
  const doAction=(data)=>{
    setCurrentData(data);
    calcularTotales();
  }

  const renderTable=()=>{
    if(currentData.length === undefined){
      setCurrentData(dataSource);
    }
    return (<>
              <Mytable 
                data={currentData}
              /> 
            </>);
  }

  useEffect(()=>{
    calcularTotales();
    renderTable();
  }, [currentData])

  return (
    <div>
      <Mysummary
        gasto={gasto}
        ingreso={ingreso}
        total={total}
        />
      <Mymodal
        text='Registrar'
        dataSource={currentData}
        changeDataSource={doAction}
        />,
        {renderTable()}
    </div>
    
  );
}

export default App;
