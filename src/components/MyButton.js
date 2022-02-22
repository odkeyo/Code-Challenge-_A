import React from 'react';
import { Button } from 'antd';


const Mybutton = ({text, onClick}) => {
    return (
        <Button type="primary" onClick={onClick}>{text}</Button>
    );
}

export default Mybutton
