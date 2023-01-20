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

const PurchaseRequest = ({}) => {

  const router = useRouter();
  const [counter, setCounter] = React.useState(0);

  const handleClick = () => {
    console.log('Click');
  };

  const goToTransactionHome = () => {
    router.push('/TransactionHome');
  };

  const goToPurchaseConfirmation = () => {
    router.push('/PurchaseConfirmation');
  };

  return (
    <Container>
      <BackNavBasic title={'매수 주문'} onClick={() => goToTransactionHome()} />
      <ServiceCenterWrap>
        <ServiceMenuTitle onClick={() => handleClick()}>
          구매신청
        </ServiceMenuTitle>
        <ServiceMenuSub>
          해운대 엘시티
        </ServiceMenuSub>
        <BuildingInfo>
          <BuildingTitle>거래가</BuildingTitle>
          <BuildingSub>50,000원</BuildingSub>
        </BuildingInfo>
        <BuildingInfoNone>
          <BuildingTitle>거래 수량</BuildingTitle>
          <BuildingSub>1개</BuildingSub>
        </BuildingInfoNone>
        <BuildingInfo style={{ marginTop: 0 }}>
          <BuildingTitle>거래 금액</BuildingTitle>
          <BuildingSub>50,000원</BuildingSub>
        </BuildingInfo>
        <BuildingInfoNone>
          <BuildingTitle>예상 수수료</BuildingTitle>
          <BuildingSub>50원</BuildingSub>
        </BuildingInfoNone>
        <hr />
        <div style={{ display: 'flex', marginTop: 30 }}>
          <ServiceMenuTitle style={{ marginRight: 'auto' }}>
            최종금액
          </ServiceMenuTitle>
          <ServiceMenuTitle style={{ marginLeft: 'auto' }}>
            50,050원
          </ServiceMenuTitle>
        </div>
        <BuildingInfos style={{ height: '208px' }}>
          <div>
            유의사항
          </div>
          <ul>
            <li>• 반드시 지정한 판매가로 체결되는 다자간 상대매매 방식으로 체결됩니다.</li>
            <li>• 금융위의 규제로 인하여 1인 당 1일 매매회전율이 100%로 제한되며, 주문제출 시 잔여 매매회전율에 따라 주문이 완료되지 않을
              수 있습니다.
            </li>
          </ul>
        </BuildingInfos>
        <BasicButton
          theme={BasicButtonTheme.BlackRounded}
          onClick={() => goToPurchaseConfirmation()}
          style={{ width: '100%', marginTop: '28px', fontSize:'16px' }}
        >
          매수 주문하기
        </BasicButton>
      </ServiceCenterWrap>
    </Container>
  );
};

export default PurchaseRequest;
