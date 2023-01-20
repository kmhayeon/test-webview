import React from 'react';
import { useRouter } from 'next/dist/client/router';
import styled from 'styled-components';
import Image from 'next/image';
import iconBack from '@static/images/icon_back.png';
import illustCompleted from '@static/images/illustration_completed.png';
import illustCompleted2 from '@static/images/illustration_completed2.png';
import { BasicButton, BasicButtonTheme } from '@components/common/BasicButton';
import BackNavBasic from '@components/common/BackNavBasic';

const Container = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  overflow: auto;
  background-color: #F5F6F8;

  hr {
    border: 0;
    height: 1.2px;
    background-color: #DEDEDE;
    margin-top: 15px;
  }
`;

const ContentsWrap = styled.div`
  padding: 30px 28px;
  margin-top: 68px;
  background-color: white;

  hr {
    border: 0;
    height: 1.2px;
    background-color: #DEDEDE;
    margin-top: 15px;
    margin-bottom: 35px;
  }
`;

const ResultTitle = styled.div`
  font-weight: 500;
  font-size: 18px;
  text-align: center;
  padding-top: 20px;
`;

const TilteText = styled.div`
  font-weight: 500;
  font-size: 18px;
  color: #000000;
`;

const CheckImageBox = styled.div`
  text-align: center;
  padding-top: 30px;
  padding-bottom: 0;
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

const LeftBox = styled.div`
  font-weight: 500;
  font-size: 14px;
  color: #727272;
  margin-right: auto;
`;

const RightBox = styled.div`
  font-weight: 400;
  font-size: 14px;
  margin-left: auto;
`;


const BuildingInfoNoClolr = styled.div`
  display: flex;
  border-radius: 12px;
  height: 60px;
  padding: 20px 22px;
  margin-left: auto;
`;

const BuyConfirmation = ({}) => {

  const router = useRouter();

  const handleClick = () => {
    console.log('Click');
  };

  const goToMain = () => {
    router.push('/Main');
  };

  const goToPurchaseRequest = () => {
    router.push('/BuyRequest');
  };


  return (
    <Container>
      <BackNavBasic title={'매수 주문 확정'} onClick={() => goToPurchaseRequest()}/>
      <ContentsWrap style={{ height: 250 }}>
        <ResultTitle>
          매수 주문이 완료되었습니다.
        </ResultTitle>
        <CheckImageBox>
          <Image src={illustCompleted2.src} alt={'illustration2_completed'} width={100} height={100} />
          {/*<Image src={illustCompleted.src} alt={'illustration_completed'} width={100} height={100} />*/}
        </CheckImageBox>
      </ContentsWrap>
      <ContentsWrap style={{ marginTop: 12 }}>
        <TilteText onClick={() => handleClick()}>
          해운대 엘시티
        </TilteText>
        <BuildingInfo>
          <LeftBox>거래가</LeftBox>
          <RightBox>50,000원</RightBox>
        </BuildingInfo>
        <BuildingInfoNoClolr>
          <LeftBox>거래 수량</LeftBox>
          <RightBox>1개</RightBox>
        </BuildingInfoNoClolr>
        <BuildingInfo style={{ marginTop: 0 }}>
          <LeftBox>거래 금액</LeftBox>
          <RightBox>50,000원</RightBox>
        </BuildingInfo>
        <BuildingInfoNoClolr>
          <LeftBox>예상 수수료</LeftBox>
          <RightBox>50원</RightBox>
        </BuildingInfoNoClolr>
        <hr />
        <div style={{ display: 'flex', marginTop: 30 }}>
          <TilteText style={{ marginRight: 'auto' }}>
            최종금액
          </TilteText>
          <TilteText style={{ marginLeft: 'auto' }}>
            50,050원
          </TilteText>
        </div>
        <BasicButton
          theme={BasicButtonTheme.BlackRounded}
          onClick={() => goToMain()}
          style={{ width: '100%', marginTop: '40px', fontSize:'16px' }}
        >
          확인
        </BasicButton>
      </ContentsWrap>
    </Container>
  );
};

export default BuyConfirmation;
