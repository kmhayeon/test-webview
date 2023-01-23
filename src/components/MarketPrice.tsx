import React, { useRef, useState, useEffect } from 'react';
import { useRouter } from 'next/dist/client/router';
import Image from 'next/image';
import styled from 'styled-components';
import iconWarning from '@static/images/icon_warning.png';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import ByDay from '@components/ByDay';
import ByRealTime from '@components/ByRealTime';
import { Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap';
import SubscriptionInfo from '@components/SubscriptionInfo';
import SubscriptionDetailInfo from '@components/SubscriptionDetailInfo';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const Container = styled.div`
`;

const RowDayHeader = styled.div`
  width: 100%;
  height: calc(100vh - 20vh);
  overflow-y: scroll;
`;

const RowTitleBox = styled.div`
  background-color: white;
  position: fixed;
  display: flex;
  width: 100%;
  height: 48px;
  padding: 13px;
  color: #727272;
  font-size: 14px;
  border-bottom: 1.2px solid #DEDEDE;
  margin-top: 42px;
`;

const RowTitle = styled.div`
  width: 240px;
  text-align: end;
`;

const RowRealTimeHeader = styled.div`
  width: 100%;
  //height: 75vh;
  overflow-y: scroll;
`;


const NoDataWrap = styled.div`
  position: fixed;
  display: flex;
  width: 100%;
  height: 48px;
  padding: 13px;
  margin-top: 42px;
  justify-content: center;
  text-align: center;
  top: 44%;


  div {
    font-weight: 400;
    font-size: 16px;
    color: #727272;
    margin-top: 20px;
  }
`;

const TabWrap = styled.div`
  width: 100%;
  font-size: 15px;

  .text-link.nav-link.active {
    background-color: white !important;
    color: black !important;
  }

  .active.nav-link:after {
    border-bottom: 0px !important;
  }

  .nav-link {
    background: #F5F6F8;
    color: rgb(202, 202, 202) !important;
    padding: 13px 20px !important;
  }
`;

const TabsBox = styled(Tabs)({
  backgroundColor: '#F5F6F8',
  '& .MuiTabs-indicator': {
    display: 'flex',
    backgroundColor: 'white',
    height: '3px',
  },
});

const TabsItem = styled(Tab)({
  fontFamily: 'Pretendard',
  fontSize: '14px',
  color: '#CACACA !important',
  ':hover': {
    color: 'black',
  },
  '&.Mui-selected': {
    color: '#000000 !important',
    backgroundColor: 'white',
    fontWeight: 600,
  },
});


function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 0 }}>
          <div>{children}</div>
        </Box>
      )}
    </div>
  );
}


const MarketPrice = () => {
  const router = useRouter();
  const [height, setHeight] = useState(0);
  const [value, setValue] = React.useState(0);
  const ref = useRef<any>(null);
  const [tab, setTab] = React.useState<number | string>(0);

  const handleChange = (newValue: any) => {
    setTab(newValue);
  };


  // useEffect(() => {
  //   setHeight(ref.current.clientHeight)
  //   }, []);

  return (
    <Container>
      <div style={{ paddingTop: 53 }}>
        <TabWrap>
          <Nav variant='tabs'
               defaultactivekey='link-0'
               justified
               style={{
                 position: 'fixed', width: '100%', background: 'white',
                 borderBottom: '1px solid rgba(0, 0, 0, 0.04)',
               }}
          >
            <NavItem>
              <NavLink eventkey='link-0' onClick={() => handleChange(0)}
                       className={'text-link'}
                       active={tab === 0 ? true : false}>
                일별
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink eventkey='link-1' onClick={() => handleChange(1)}
                       className={'text-link'}
                       active={tab === 1 ? true : false}>
                실시간
              </NavLink>
            </NavItem>
          </Nav>
          <TabContent activeTab={String(tab)}>
            <TabPane tabId='0'>
              <RowDayHeader>
                <RowTitleBox>
                  <RowTitle style={{ marginLeft: 5 }}>일자</RowTitle>
                  <RowTitle style={{ marginLeft: 2 }}>평균거래량</RowTitle>
                  <RowTitle>등락폭</RowTitle>
                  <RowTitle>거래량</RowTitle>
                </RowTitleBox>
                <ByDay />
              </RowDayHeader>
            </TabPane>

            <TabPane tabId='1'>
                <RowRealTimeHeader>
                <RowTitleBox>
                <RowTitle style={{ marginLeft: '-18px' }}>시간</RowTitle>
                <RowTitle style={{ marginLeft: 2 }}>평균거래량</RowTitle>
                <RowTitle>등락폭</RowTitle>
                <RowTitle>거래량</RowTitle>
                </RowTitleBox>
                <ByRealTime />
                </RowRealTimeHeader>
                {/*<NoDataWrap>*/}
                {/*  <div>*/}
                {/*    <Image src={iconWarning.src} alt={'iconWarning'} width={28} height={28} />*/}
                {/*    <div>금일 시세를 확인할 내역이 없습니다.</div>*/}
                {/*  </div>*/}
                {/*</NoDataWrap>*/}
            </TabPane>
          </TabContent>
        </TabWrap>
      </div>
    </Container>
  );
};

export default MarketPrice;
