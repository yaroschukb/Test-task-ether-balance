import 'antd/dist/antd.css';
import Main from './components/Main';
import { Layout, Typography } from 'antd';
const { Header, Footer, Content  } = Layout;
const { Title } = Typography;

function App() {
  return (
    <>
     <Layout style={{maxWidth: '1200px', margin: '0 auto', display: 'flex'}}>
      <Header style={{minHeight:'80px', background: '#280076'}}>
        <Title style={{fontSize:20, color: 'silver', textAlign: 'center'}}>
            The information is taken from the Etherscan website
        </Title>
        <Title style={{fontSize:30, color: '#fff', textAlign: 'center', margin: 0}}>Your Wallet</Title>
      </Header>
      <Content style={{minHeight: '320px'}}>
          <Main />
      </Content>
      <Footer style={{height:'50px', background: '#263623', color: '#fff', textAlign: 'center', padding:0, fontSize:30}}>
        All Rights Reserved ©{new Date().getFullYear()}
      </Footer>
    </Layout> 
    </>
  );
};

export default App;
