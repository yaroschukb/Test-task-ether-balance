import React, { useEffect, useState } from 'react';
import { Card, Col, Row, Typography, } from 'antd';
import Tokens from '../components/Tokens.js';
import { userAPI } from './../api/api';
const { Title } = Typography;

const Main = () => {
  const [data, setData] = useState(0);
  const [etherLastPrice, setEtherLastPrice] = useState(0);
  const newData = data/Math.pow(10,18); //rounding of the data

  useEffect(() => {
    async function fetchData () {
      const result = await userAPI.getBalance();
      const etherPrice = await userAPI.getEtherLastPrice();
      setData(result.result);
      setEtherLastPrice(etherPrice.result.ethusd);
    };
    fetchData ();
  }, []);

  return (
    <>
      <Card>
        <Row style={{display:'flex', alignItems: 'baseline'}}>
          <Col span={4}>
            <Title style={{fontWeight:700}}>
              Address 
            </Title>
          </Col> 
          <Col>
            <Title level={2} style={{fontWeight:500, textDecoration: 'underline'}}>
              0xA145ac099E3d2e9781C9c848249E2e6b256b030D
            </Title>
          </Col>
        </Row>
        <Row gutter={[20, 20]} style={{width: '100%', display:'flex', alignItems: 'baseline'}}>
          <Col span={5} style={{fontSize:40}}>
            Balance: 
          </Col>
          <Col span={9} style={{fontSize:30}}>
            {newData} Ether
          </Col>
        </Row>
        <Row gutter={[20, 20]} style={{width: '100%', display:'flex', alignItems: 'baseline'}}>
          <Col span={5} style={{fontSize:40}}>
            Ether Value: 
          </Col>
          <Col span={9} style={{fontSize:30}}>
            $ {(newData*etherLastPrice).toLocaleString()}(@{etherLastPrice}/ETH)
          </Col>
        </Row>
        <Row>
          <Col span={8}>
            <Tokens />
          </Col>
        </Row>
      </Card>
    </>
  );
};

export default Main;
