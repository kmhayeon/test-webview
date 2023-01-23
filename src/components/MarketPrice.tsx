import React,{useRef, useState, useEffect} from 'react';
import { useRouter } from 'next/dist/client/router';
import Image from 'next/image';
import styled from 'styled-components';
import iconWarning from '@static/images/icon_warning.png';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import ByDay from '@components/ByDay';
import ByRealTime from '@components/ByRealTime';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const Container = styled.div`
`;

const RowDayHeader = styled.div`
  width: 100%;
  height: calc(100vh - 27vh);
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
  margin-top:-1px;
`;

const RowTitle = styled.div`
  width: 240px;
  text-align: end;
`;

const RowRealTimeHeader = styled.div`
  width: 100%;
  height: 75vh;
  overflow: auto;
`;

const NoDataWrap = styled.div`
  position: absolute;
  left: 50%;
  top: 230%;
  transform: translate(-50%, -50%);
  text-align: center;

  div {
    font-weight: 400;
    font-size: 16px;
    color: #727272;
    width: 300px;
    padding-top: 24px;
  }
`;

const TabWrap = styled.div`
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
  const [height, setHeight] = useState(0)
  const [value, setValue] = React.useState(0);
  const ref = useRef<any>(null)

  const handleChange = (event: any, newValue: any) => {
    setValue(newValue);
  };


  // useEffect(() => {
  //   setHeight(ref.current.clientHeight)
  //   }, []);

  return (
    <Container>
      <div style={{ paddingTop: 53 }}>
        <TabWrap>
          <TabsBox
            value={value} onChange={handleChange}
            aria-label='Main Tabs' variant='fullWidth'>
            <TabsItem disableRipple label='일별' />
            <TabsItem disableRipple label='실시간' />
          </TabsBox>
        </TabWrap>
        <TabPanel value={value} index={0}>
            <RowDayHeader>
            <RowTitleBox>
              <RowTitle style={{ marginLeft: 5 }}>일자</RowTitle>
              <RowTitle style={{ marginLeft: 2 }}>평균거래량</RowTitle>
              <RowTitle>등락폭</RowTitle>
              <RowTitle>거래량</RowTitle>
            </RowTitleBox>
            <ByDay />
          </RowDayHeader>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <>
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
            {/*    <Image src={iconWarning.src} alt={'iconWarning'} width={28} height={28} />*/}
            {/*  <div>금일 시세를 확인할 내역이 없습니다.</div>*/}
            {/*</NoDataWrap>*/}
          </>
        </TabPanel>
      </div>
    </Container>
  );
};

export default MarketPrice;
