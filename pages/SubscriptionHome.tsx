import React, { useEffect } from 'react';
import { useRouter } from 'next/dist/client/router';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import styled from 'styled-components';
import BackNavBasic from '@components/common/BackNavBasic';
import SubscriptionInfo from '@components/SubscriptionInfo';
import SubscriptionDetailInfo from '@components/SubscriptionDetailInfo';
import { BasicButton, BasicButtonTheme } from '@components/common/BasicButton';

interface ISubscriptionHomeProps {
  result?: boolean;
}


const Container = styled.div`
  width: 100%;
`;

const ButtonBox = styled.div`
  box-shadow: 0px -15px 15px 0px rgb(0 0 0 / 8%);
  background: white;
  position: fixed;
  padding: 25px;

  left: 0;
  bottom: 0;
  width: 100%;
  height: 116px;
`;

const TabWrap = styled.div`
  width: 100%;
  margin-top: 68px;
  
  .active.nav-link {
    position: relative;
    color: black;

    :after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 25px;
      height: 1px;
      width: calc(100% - 25px * 2); /* 길이 설정 */
      border-bottom: 4px solid black;
      border-radius: 30px;
    }
  }

  .nav-link {
    color: #CACACA;
    padding: 18px 20px;
  }
`;

const SubscriptionHome: React.FC<ISubscriptionHomeProps> = ({
                                                              result,
                                                            }) => {
  const router = useRouter();
  const [tab, setTab] = React.useState<number | string>(0);
  const [activeTab, setActiveTab] = React.useState(true);
  const [activeTabs, setActiveTabs] = React.useState(false);


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


  const handleChange = (newValue: any) => {
    setTab(newValue);
  };


  return (
    <Container>
      <BackNavBasic title={'해운대 엘시티'} onClick={() => goToMain()} />
      <TabWrap>
        <Nav variant='tabs'
             defaultactivekey='link-0'
             justified
             style={{ position: 'fixed', width: '100%', zIndex: '120', background: 'white',
               borderBottom:'1px solid rgba(0, 0, 0, 0.04)'
             }}
        >
          <NavItem>
            <NavLink eventkey='link-0' onClick={() => handleChange(0)} className={'nav-link'}
                     active={tab === 0 ? true : false}>
              개요
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink eventkey='link-1' onClick={() => handleChange(1)} className={'nav-link'}
                     active={tab === 1 ? true : false}>
              상세정보
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={String(tab)}>
          <TabPane tabId='0'>
            <SubscriptionInfo />
          </TabPane>
          <TabPane tabId='1'>
            <SubscriptionDetailInfo />
          </TabPane>
        </TabContent>
      </TabWrap>
      {/*  /!*청약 신청 버튼을 누르기 전의 경우 존재함*!/ */}
      <ButtonBox>
        <BasicButton
          theme={result !== true ? BasicButtonTheme.SuccesRounded : BasicButtonTheme.FailRounded}
          onClick={() => goToSubscriptionOrder()}
          style={{ width: '100%', marginTop: 4 }}
        >
          청약 신청하기
        </BasicButton>
      </ButtonBox>

    </Container>
  );
};

export default SubscriptionHome;
