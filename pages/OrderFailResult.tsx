import React from 'react';
import {useRouter} from 'next/dist/client/router';
import Image from 'next/image';
import styled from 'styled-components';
import illustCompleted from '@static/images/illustration_completed.png';
import {BasicButton, BasicButtonTheme} from '@components/common/BasicButton';
import BackNavBasic from "@components/common/BackNavBasic";

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
    margin-bottom: 35px;
  }
`;

const ContentsWrap = styled.div`
  padding: 30px 28px;
  margin-top: 68px;
  background-color: white;
`;

const ResultTitle = styled.div`
  font-weight: 500;
  font-size: 18px;
  text-align: center;
  padding-top: 20px;
`;

const CheckImageBox = styled.div`
  text-align: center;
  padding-top: 30px;
  padding-bottom: 0;
`;

const BuildingTitle = styled.div`
  font-weight: 500;
  font-size: 18px;
  color: #000000;
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

const OrderFailResult = ({}) => {
  const router = useRouter();

  const handleClick = () => {
    console.log('Click');
  };

  const goToSubscriptionHome = () => {
    router.push('/SubscriptionHome');
  };

  const goToMain = () => {
    router.push('/Main');
  };

  return (
    <Container>
      <BackNavBasic title={'청약 신청'} onClick={() => goToSubscriptionHome()}/>
      <ContentsWrap style={{height: 264}}>
        <ResultTitle>
          청약취소가 완료되었습니다.
        </ResultTitle>
        <CheckImageBox>
          <Image src={illustCompleted.src} alt={'illustrationCompleted'}
                 priority={true} width={100} height={100} />
        </CheckImageBox>
      </ContentsWrap>
      <ContentsWrap style={{marginTop: 12}}>
        <BuildingTitle onClick={() => handleClick()}>
          해운대 엘시티
        </BuildingTitle>
        <BuildingInfo>
          <LeftBox>청약금액</LeftBox>
          <RightBox>50,000원</RightBox>
        </BuildingInfo>
        <BuildingInfoNoClolr>
          <LeftBox>청약 수량</LeftBox>
          <RightBox>10개</RightBox>
        </BuildingInfoNoClolr>
        <BuildingInfo style={{marginTop: 0}}>
          <LeftBox>취소일자</LeftBox>
          <RightBox>2022.12.06</RightBox>
        </BuildingInfo>
        <BasicButton
          theme={BasicButtonTheme.BlackRounded}
          onClick={() => goToMain()}
          style={{width: '100%', marginTop: '158px', fontSize:'16px'}}
        >
          확인
        </BasicButton>
      </ContentsWrap>
    </Container>
  );
};

export default OrderFailResult;
