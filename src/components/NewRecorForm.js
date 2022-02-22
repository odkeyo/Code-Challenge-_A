import React,{useEffect, useState} from 'react';
import { Row, Col, Input , Select, InputNumber } from 'antd';

const NewRecordForm = ({updateValues}) => {
    const { Option } = Select;
    const style = { padding: '8px 0' };

    const onChangeDetalle = e => {
        if(e.target.value!==''){
             updateValues(e.target.value,'detalle');
         }
    };

    const onChangeMonto = e => {
      if(!isNaN(+e.target.value)){
           updateValues(e.target.value,'monto');
        }
    };

    const onChangeTipo=(value)=>{
        if(`${value}`!==''){
            updateValues((`${value}`),'tipo');
        }
    };

    return(<div>
            <Row>
                <Col className="gutter-row" span={12}>
                    <div style={style}>
                        <span>Seleccione el tipo de transaccion</span>
                    </div>
                </Col>
                <Col className="gutter-row" span={4}>
                    <div style={style}>
                    <Select defaultValue="" style={{ width: 120 }} onChange={onChangeTipo}>
                        <Option value=""></Option>
                        <Option value="ingreso">Ingreso</Option>
                        <Option value="gasto">Gasto</Option>
                    </Select>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col className="gutter-row" span={12}>
                    <div style={style}>
                        <span>Ingrese el detalle de la transaccion</span>
                    </div>
                </Col>
                <Col className="gutter-row" span={12}>
                    <div style={style}>
                        <Input size="large" defaultValue="Detalle" onChange={onChangeDetalle}/>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col className="gutter-row" span={12}>
                    <div style={style}>
                        <span>Ingrese el monto</span>
                    </div>
                </Col>
                <Col className="gutter-row" span={12}>
                    <Input size="large" defaultValue="0" onChange={onChangeMonto}/>
                </Col>
            </Row>
    </div>)
}

export default NewRecordForm;