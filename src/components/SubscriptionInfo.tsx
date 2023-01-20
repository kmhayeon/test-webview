import React from 'react';
import { useRouter } from 'next/dist/client/router';
import Image from 'next/image';
import styled from 'styled-components';
import iconNextBig from '@static/images/icon_next_big.png';
import iconSubtract1 from '@static/images/icon_subtract1.png';
import iconSubtract2 from '@static/images/icon_subtract2.png';
import iconSubtract3 from '@static/images/icon_subtract3.png';

const Container = styled.div`
  width: 100%;
  height: 78vh;
  background-color: #F5F6F8;
  position: relative;
  overflow-x:hidden;
  overflow-y:auto;

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
  background-color: white;

  .next-icon {
    float: right;
    margin-top: -2px;
  }
`;

const ServiceMenuTitle = styled.div`
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

const BuildingInfoNone = styled.div`
  display: flex;
  border-radius: 12px;
  height: 60px;
  padding: 20px 22px;
  margin-left: auto;
`;

const BuildingTitle = styled.div`
  font-weight: 500;
  font-size: 14px;
  color: #727272;
  margin-right: auto;
`;

const BuildingSub = styled.div`
  font-weight: 500;
  font-size: 14px;
  float: right;
`;

const InnerWrap = styled.div`
  padding: 55px 0px; 
  display: flex;
`;

const InnerBox = styled.div`
  flex: 1
`;

const InnerImageBox = styled.div`
  text-align: center;
  position: relative;

  div {
    font-weight: 500;
    font-size: 14px;
    color: #000000;
  }
`;


const SubscriptionInfo  = ({}) => {

  const handleClick = () => {
    console.log('Click');
  };

  return (
      <Container>
        <ServiceCenterWrap style={{ height: 370 }}>
          <ServiceMenuTitle onClick={() => handleClick()}>
            부동산 정보
          </ServiceMenuTitle>
          <BuildingInfo>
            <BuildingTitle>건물명</BuildingTitle>
            <BuildingSub>해운대 엘시티</BuildingSub>
          </BuildingInfo>
          <BuildingInfoNone>
            <BuildingTitle>주소</BuildingTitle>
            <BuildingSub>부산광역시 해운대구 달맞이길 30 (중동)</BuildingSub>
          </BuildingInfoNone>
          <BuildingInfo style={{ marginTop: 0, height: 92 }}>
            <BuildingTitle>면적</BuildingTitle>
            <div>
              <BuildingSub>
                대지면적 : 9,123.2m
                <br />
                <span style={{
                  marginLeft: 5, marginTop: 16, position: 'relative', top: 8,
                }}>연면적 : 72,141.6m</span></BuildingSub>
            </div>
          </BuildingInfo>
          <BuildingInfoNone>
            <BuildingTitle>규모</BuildingTitle>
            <BuildingSub>지하 6층 / 지상 132층 (3개동)</BuildingSub>
          </BuildingInfoNone>
        </ServiceCenterWrap>
        <ServiceCenterWrap style={{ height: 252, marginTop: 12 }}>
          <ServiceMenuTitle onClick={() => handleClick()}>
            청약 포인트
            <Image className='next-icon' src={iconNextBig.src}
                   alt={'icon-next'} width={24} height={24} />
          </ServiceMenuTitle>
          <InnerWrap>
            <InnerBox style={{textAlign:'start'}}>
              <InnerImageBox style={{right:18}}>
                <Image src={iconSubtract1.src}
                       alt={'iconSubtract1'} width={26} height={26}
                       style={{ position: 'relative', marginBottom: 22 }} />
                <div>
                  국내 대표 랜드<br />마크에 위치
                </div>
              </InnerImageBox>
            </InnerBox>
            <InnerBox style={{textAlign:'center'}}>
              <InnerImageBox style={{left:15}}>
                <Image src={iconSubtract2.src}
                       alt={'iconSubtract2'} width={26} height={26}
                       style={{ position: 'relative', marginBottom: 22 }} />
                <div>
                  최고의 인프라<br />환경
                </div>
              </InnerImageBox>
            </InnerBox>
            <InnerBox style={{textAlign:'end'}}>
              <InnerImageBox style={{left:37}}>
                <Image src={iconSubtract3.src}
                       alt={'iconSubtract3'} width={26} height={26}
                       style={{ position: 'relative', marginBottom: 22 }} />
                <div>
                  최적의 교통망
                </div>
              </InnerImageBox>
            </InnerBox>
          </InnerWrap>
        </ServiceCenterWrap>
        <ServiceCenterWrap style={{ height: 90, marginTop: 12 }}>
          <ServiceMenuTitle style={{marginTop:7}} onClick={() => handleClick()}>
            공모 혜택
            <Image className='next-icon' src={iconNextBig.src}
                   alt={'icon-next'} width={24} height={24} />
          </ServiceMenuTitle>
        </ServiceCenterWrap>
        <ServiceCenterWrap style={{ height: 90, marginTop: 12 }}>
          <ServiceMenuTitle style={{marginTop:7}} onClick={() => handleClick()}>
            청약 유의사항
            <Image className='next-icon' src={iconNextBig.src}
                   alt={'icon-next'} width={24} height={24} />
          </ServiceMenuTitle>
        </ServiceCenterWrap>
        <ServiceCenterWrap style={{ height: 90, marginTop: 12, marginBottom: 40}}>
          <ServiceMenuTitle style={{marginTop:7}} onClick={() => handleClick()}>
            투자 관련문서
            <Image className='next-icon' src={iconNextBig.src}
                   alt={'icon-next'} width={24} height={24} />
          </ServiceMenuTitle>
        </ServiceCenterWrap>
      </Container>
  );
};

export default SubscriptionInfo;
