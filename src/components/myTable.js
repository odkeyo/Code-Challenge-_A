import React, { useEffect } from 'react';
import { Table } from 'antd';

const Mytable = ({data}) => {
    const columns = [
        {
          title: 'Nombre',
          dataIndex: 'nombre',
          key: 'nombre',
        },
        {
          title: 'Monto',
          dataIndex: 'monto',
          key: 'monto',
        },
        {
            title: 'Detalle',
            dataIndex: 'detalle',
            key: 'detalle',
          },
          {
            title: 'Tipo',
            dataIndex: 'tipo',
            key: 'tipo',
          },
          {
            title: 'Fecha',
            dataIndex: 'fecha',
            key: 'fecha',
          },
      ];

      useEffect(()=>{
      }, [data])
    
    return (
        <Table dataSource={[...data]} columns={columns} />
    );
}

export default Mytable;