import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import { useRouter } from 'next/dist/client/router';
import iconUp from '@static/images/icon_up_red.png';
import BackNavBasic from '@components/common/BackNavBasic';
import BuildingOrder from '@components/BuildingOrder';
import MarketPrice from '@components/MarketPrice';
import TransactionInfo from '@components/TransactionInfo';
import { Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap';

const Container = styled.div`
  width: 100%;
  position: relative;
  overflow: auto;
`;

const NavSubInfo = styled.div`
  display: flex;
  width: 100%;
  height: 48px;
  text-align: center;
  justify-content: center;
  padding: 15px;
  font-weight: 500;
  font-size: 14px;
  margin-top: 68px;
  position: fixed;

  div:not(:first-child) {
    margin-left: 12px;
  }

  .percent-num {
    color: #CE4B4B;
  }
`;

const TabWrap = styled.div`
  width: 100%;
  margin-top: 116px;

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


const TransactionHome = () => {
  const router = useRouter();
  const [tab, setTab] = React.useState<number | string>(0);

  const goToMain = () => {
    router.push('/Main');
  };


  const handleChange = (newValue: any) => {
    setTab(newValue);
  };

  return (
    <Container>
      <BackNavBasic title={'해운대 엘시티'} onClick={() => goToMain()} />
      <NavSubInfo>
        <div>50,000원</div>
        <div className='percent-num'>+18.32%</div>
        <div className='percent-num'>1.9%
          <Image className='icon_up' src={iconUp.src} alt={'iconUp'} width={10} height={10} />
        </div>
      </NavSubInfo>
      <div>
      <TabWrap>
        <Nav variant='tabs'
             defaultactivekey='link-0'
             justified
             style={{ position: 'fixed', width: '100%', zIndex: '120', background: 'white', borderBottom:'1px solid rgba(0, 0, 0, 0.04)' }}
        >
          <NavItem>
            <NavLink eventkey='link-0' onClick={() => handleChange(0)} className={'nav-link'}
                     active={tab === 0 ? true : false}>
              주문
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink eventkey='link-1' onClick={() => handleChange(1)} className={'nav-link'}
                     active={tab === 1 ? true : false}>
              시세
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink eventkey='link-2' onClick={() => handleChange(2)} className={'nav-link'}
                     active={tab === 2 ? true : false}>
              정보
            </NavLink>
          </NavItem>
        </Nav>
      </TabWrap>
      <TabContent activeTab={String(tab)}>
        <TabPane tabId='0'>
          <BuildingOrder />
        </TabPane>
        <TabPane tabId='1'>
          <MarketPrice />
        </TabPane>
        <TabPane tabId='2'>
          <TransactionInfo />
        </TabPane>
      </TabContent>
      </div>
    </Container>
  );
};

export default TransactionHome;
