import React from 'react';
import { useRouter } from 'next/dist/client/router';
import styled from 'styled-components';
import { BasicButton, BasicButtonTheme } from '@components/common/BasicButton';
import BackNavBasic from '@components/common/BackNavBasic';

const Container = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  overflow: auto;

  hr {
    border: 0;
    height: 1.2px;
    background-color: #DEDEDE;
    margin-top: 15px;
    margin-bottom: 35px;
  }
`;

const ServiceCenterWrap = styled.div`
  padding: 30px 28px;
  margin-top: 68px;

  .investor-menu {
    font-weight: 400;
    font-size: 18px;
    height: 55px;
  }

  .next_icon {
    float: right;
    margin-top: 4px;
  }

  .toggle {
    float: right;
  }

  .bold {
    font-weight: 500;
  }

  .update {
    float: right;
    color: #6154FD;
    font-weight: 400;
    font-size: 16px;
  }
`;

const ServiceMenuTitle = styled.div`
  font-weight: 500;
  font-size: 18px;
  color: #000000;
`;

const ServiceMenuSub = styled.div`
  font-weight: 500;
  font-size: 15px;
  color: #000000;
  padding-top: 12px;
`;

const BuildingInfo = styled.div`
  display: flex;
  background: #F5F6F8;
  border-radius: 12px;
  height: 60px;
  padding: 20px 22px;
  margin-left: auto;
  margin-top: 20px;
`;

const BuildingInfos = styled.div`
  background: #F5F6F8;
  border-radius: 12px;
  height: 300px;
  padding: 20px 22px;
  margin-left: auto;
  margin-top: 35px;

  div {
    font-weight: 500;
    font-size: 14px;
    color: #727272;
    padding-bottom: 28px;
  }

  ul {
    font-weight: 400;
    font-size: 13px;
    color: #727272;
    line-height: 1.2rem;

    li {
      padding-bottom: 18px;

    }
  }
`;

const BuildingTitle = styled.div`
  font-weight: 500;
  font-size: 14px;
  color: #727272;
  margin-right: auto;
`;

const BuildingSub = styled.div`
  font-weight: 400;
  font-size: 14px;
  margin-left: auto;
`;

const BuildingInfoNone = styled.div`
  display: flex;
  border-radius: 12px;
  height: 60px;
  padding: 20px 22px;
  margin-left: auto;
`;

const SellRequest = ({}) => {

  const router = useRouter();
  const [counter, setCounter] = React.useState(0);

  const handleClick = () => {
    console.log('Click');
  };

  const goToTransactionHome = () => {
    router.push('/TransactionHome');
  };

  const goToSellConfirmation = () => {
    router.push('/SellConfirmation');
  };

  return (
    <Container>
      <BackNavBasic title={'?????? ??????'} onClick={() => goToTransactionHome()} />
      <ServiceCenterWrap>
        <ServiceMenuTitle onClick={() => handleClick()}>
          ?????? ??????
        </ServiceMenuTitle>
        <ServiceMenuSub>
          ????????? ?????????
        </ServiceMenuSub>
        <BuildingInfo>
          <BuildingTitle>?????????</BuildingTitle>
          <BuildingSub>50,000???</BuildingSub>
        </BuildingInfo>
        <BuildingInfoNone>
          <BuildingTitle>?????? ??????</BuildingTitle>
          <BuildingSub>1???</BuildingSub>
        </BuildingInfoNone>
        <BuildingInfo style={{ marginTop: 0 }}>
          <BuildingTitle>?????? ??????</BuildingTitle>
          <BuildingSub>50,000???</BuildingSub>
        </BuildingInfo>
        <hr />
        <div style={{ display: 'flex', marginTop: 30 }}>
          <ServiceMenuTitle style={{ marginRight: 'auto' }}>
            ????????????
          </ServiceMenuTitle>
          <ServiceMenuTitle style={{ marginLeft: 'auto' }}>
            50,050???
          </ServiceMenuTitle>
        </div>
        <BuildingInfos style={{ height: '208px' }}>
          <div>
            ????????????
          </div>
          <ul>
            <li>??? ????????? ????????? ???????????? ???????????? ????????? ???????????? ???????????? ???????????????.</li>
            <li>??? ???????????? ????????? ????????? 1??? ??? 1??? ?????????????????? 100%??? ????????????, ???????????? ??? ?????? ?????????????????? ?????? ????????? ???????????? ??????
              ??? ????????????.
            </li>
          </ul>
        </BuildingInfos>
        <BasicButton
          theme={BasicButtonTheme.BlackRounded}
          onClick={() => goToSellConfirmation()}
          style={{ width: '100%', marginTop: '28px', fontSize:'16px',  background: '#3C4BCD'  }}
        >
          ?????? ????????????
        </BasicButton>
      </ServiceCenterWrap>
    </Container>
  );
};

export default SellRequest;

// BuyRequest ?????? ??????
// SellRequest ?????? ??????
