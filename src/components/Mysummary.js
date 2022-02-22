import React from 'react';
import { Divider, Row, Col } from 'antd';

function Mysummary(props){
    return (
      <>
        <Divider orientation="left">Detalle de cartera</Divider>
        <Row justify="center">
          <Col span={4}>Total ingresos: {props.ingreso}</Col>
          <Col span={4}>Total gastos: {props.gasto}</Col>
          <Col span={4}>Total general: {props.total}</Col>
        </Row>
      </>
    );
}

export default Mysummary