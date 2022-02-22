import React, { useState, useEffect } from 'react';
import { Modal, Button } from 'antd';
import NewRecordForm from './NewRecorForm';

const Mymodal = ({text, dataSource, changeDataSource}) => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [monto, setMonto] = useState(0);
    const [detalle, setDetalle] = useState('');
    const [tipo, setTipo] = useState('');

    const showModal = () => {
        setIsModalVisible(true);
    };

    const updateValues=(data, key)=>{
        switch(key){
            case 'detalle':
                setDetalle(data);
                break;
            case 'monto':
                setMonto(data);
                break;
            case 'tipo':
                setTipo(data);
                break;
            default:
                break;
        }
    }

    const handleOk = () => {
        let newDate = new Date()
        let date = newDate.getDate();
        let month = newDate.getMonth() + 1;
        let year = newDate.getFullYear();
        setIsModalVisible(false);
        const newValue = {
            key: dataSource.length + 1,
            nombre: 'Diego Cardenas',
            monto: monto,
            detalle: detalle,
            tipo: tipo,
            fecha: date + '/' + month + '/' + year,
        }
        dataSource.push(newValue);
        changeDataSource(dataSource);
        console.log(dataSource);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    useEffect(()=>{
      }, [monto, detalle, tipo])
    
    return (
    <>
        <Button type="primary" onClick={showModal}>
            {text}
        </Button>
        <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
            <NewRecordForm
                updateValues={updateValues}
            />
        </Modal>
    </>
    );
}
export default Mymodal