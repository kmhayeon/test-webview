import React, { useEffect } from 'react';
import { useRouter } from 'next/dist/client/router';
import styled from 'styled-components';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import BackNavBasic from '@components/common/BackNavBasic';
import SubscriptionInfo from '@components/SubscriptionInfo';
import SubscriptionDetailInfo from '@components/SubscriptionDetailInfo';
import { BasicButton, BasicButtonTheme } from '@components/common/BasicButton';

interface ISubscriptionHomeProps {
  result?: boolean;
}

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const Container = styled.div`
  width: 100%;
`;

const TabContainer = styled.div`
  width: 100%;
  position: fixed;
  top: 0px;
  left: 0px;
  right: 0px;
`;

const ButtonBox = styled.div`
  //style={{ boxShadow: 'rgb(0 0 0 / 8%) 0px -15px 15px 0px', padding: '40px 28px', position: 'relative' }}
  box-shadow: 0px -15px 15px 0px rgb(0 0 0 / 8%);
  //padding: 40px 28px;

  //width: 100%;
  //height: 125px;
  background: white;
  position: fixed;
  padding: 25px;

  left: 0;
  bottom: 0;
  height: 116px;
  width: 100%;
  
`;

const TabWrap = styled.div`
  width: 100%;
  margin-top: 68px;
`;

const TabsBox = styled(Tabs)({
  boxShadow: '0px 13px 17px rgb(0 0 0 / 4%)',
  '& .MuiTabs-indicator': {
    display: 'flex',
    backgroundColor: 'black',
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


const TabPanel = (props: TabPanelProps) => {
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
};


const SubscriptionHome: React.FC<ISubscriptionHomeProps> = ({
                                                             result
                                                           }) => {
  const router = useRouter();
  const [value, setValue] = React.useState(0);


  useEffect(()=>{
    // console.log(result)
  },[])

  const goToMain = () => {
    console.log('go to main!');
    router.push('/Main');
  };


  const goToSubscriptionOrder = () => {
    // if (result === true) {
    // 주문성공
    //   return router.push('/SubscriptionOrder');
    // }
    // 주문실패
    // router.push('/OrderFailResult');

    // 테스트 코드
    router.push('/SubscriptionOrder');
  };

  const handleChange = (event: any, newValue: any) => {
    setValue(newValue);
  };

  return (
    <Container>
      <BackNavBasic title={'해운대 엘시티'} onClick={() => goToMain()} />
      <TabContainer>
        <TabWrap>
          <TabsBox
            value={value} onChange={handleChange}
            aria-label='Main Tabs' variant='fullWidth'>
            <TabsItem disableRipple label='개요' />
            <TabsItem disableRipple label='상세정보' />
          </TabsBox>
        </TabWrap>
        <TabPanel value={value} index={0} >
          <SubscriptionInfo />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <SubscriptionDetailInfo />
        </TabPanel>
        <ButtonBox>
          <BasicButton
            theme={result !== true ? BasicButtonTheme.SuccesRounded : BasicButtonTheme.FailRounded }
            onClick={() => goToSubscriptionOrder()}
            style={{ width: '100%', marginTop: 4 }}
          >
            {
              result !== true ? '청약 신청하기' : '청약 취소하기'
            }
          </BasicButton>
        </ButtonBox>
      </TabContainer>
    </Container>
  );
};

export default SubscriptionHome;
