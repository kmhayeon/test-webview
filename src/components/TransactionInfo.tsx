import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import iconNextBig from '@static/images/icon_next_big.png';
import { BasicButton, BasicButtonTheme } from '@components/common/BasicButton';
import logoGide from '@static/images/icon_next_purple.png';
import iconSubtract1 from '@static/images/icon_subtract1.png';
import iconSubtract2 from '@static/images/icon_subtract2.png';
import iconSubtract3 from '@static/images/icon_subtract3.png';
import { useRouter } from 'next/dist/client/router';


const Container = styled.div`
  width: 100%;
  height: 83vh;
  background-color: #F5F6F8;
  position: relative;
  overflow-x: hidden;
  overflow-y: auto;

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
  background-color: white;
`;

const FundQnA = styled.div`
  font-size: 15px;
  color: #6154FD;

  .qna_logo {
    position: relative;
    top: 2px;
    left: 5px;
  }
`;

const ServiceMenuTitle = styled.div`
  font-weight: 600;
  font-size: 18px;
  color: #000000;
  position: relative;
  top: 5px;


  .next-icon {
    float: right;
    bottom: 4px;
  }
`;

const BuildingInfo = styled.div`
  display: flex;
  background: #F5F6F8;
  border-radius: 12px;
  height: 60px;
  padding: 20px 22px;
  margin-left: auto;
  margin-top: 28px;
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

  span {
    margin-left: 5px;
    margin-top: 16px;
    position: relative;
    top: 8px;
  }
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


const FundInfoWrap = styled.div`
  display: flex;
  border-radius: 12px;
  height: 60px;
  padding: 0px 12px;
  margin-left: auto;
`;

const FundTitle = styled.div`
  font-weight: 500;
  font-size: 14px;
  color: #727272;
`;


const TransactionInfo = () => {
  const router = useRouter();
  const handleClick = () => {
    console.log('Click');
  };

  const goInvestmentInfo = () => {
    router.push('/InvestmentInfo');
  };

  return (
    <Container>
      <ContentsWrap style={{ height: 590 }}>
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
              <span>연면적 : 72,141.6m</span>
            </BuildingSub>
          </div>
        </BuildingInfo>
        <BuildingInfoNone>
          <BuildingTitle>규모</BuildingTitle>
          <BuildingSub>지하 6층 / 지상 132층 (3개동)</BuildingSub>
        </BuildingInfoNone>
        <hr />
        <FundInfoWrap style={{ height: 40 }}>
          <FundTitle style={{ marginRight: 'auto' }}>펀드 기준가</FundTitle>
          <FundTitle>수익률</FundTitle>
        </FundInfoWrap>
        <FundInfoWrap style={{ height: 35 }}>
          <FundTitle style={{ marginRight: 'auto', fontSize: 20, color: 'black' }}>2134.75원</FundTitle>
          <FundTitle style={{ fontSize: 20, color: 'black' }}>+2.42%</FundTitle>
        </FundInfoWrap>
        <FundInfoWrap>
          <FundTitle style={{ marginRight: 'auto', fontSize: 12 }}>기준일 2022/02/22</FundTitle>
          <FundTitle style={{ fontSize: 12 }}>설정이후</FundTitle>
        </FundInfoWrap>
        <FundQnA onClick={() => handleClick()}>
          펀드기준가 관련 질문 확인하기
          <Image className='qna_logo' src={logoGide.src} alt={'qnaLogo'} width={16} height={16} />
        </FundQnA>
      </ContentsWrap>
      <ContentsWrap style={{ height: 90, marginTop: 12 }}>
        <ServiceMenuTitle onClick={() => handleClick()}>
          배당금 내역
          <Image className='next-icon' src={iconNextBig.src}
                 alt={'iconNext'} width={24} height={24} />
        </ServiceMenuTitle>
      </ContentsWrap>
      <ContentsWrap style={{ height: 252, marginTop: 12 }}>
        <ServiceMenuTitle onClick={() => handleClick()}>
          투자 포인트
          <Image className='next-icon' src={iconNextBig.src}
                 alt={'iconNext'} width={24} height={24} />
        </ServiceMenuTitle>

        <InnerWrap>
          <InnerBox style={{ textAlign: 'start' }}>
            <InnerImageBox style={{ right: 18 }}>
              <Image src={iconSubtract1.src}
                     alt={'iconSubtract1'} width={26} height={26}
                     style={{ position: 'relative', marginBottom: 22 }} />
              <div>
                국내 대표 랜드<br />마크에 위치
              </div>
            </InnerImageBox>
          </InnerBox>
          <InnerBox style={{ textAlign: 'center' }}>
            <InnerImageBox style={{ left: 15 }}>
              <Image src={iconSubtract2.src}
                     alt={'iconSubtract2'} width={26} height={26}
                     style={{ position: 'relative', marginBottom: 22 }} />
              <div>
                최고의 인프라<br />환경
              </div>
            </InnerImageBox>
          </InnerBox>
          <InnerBox style={{ textAlign: 'end' }}>
            <InnerImageBox style={{ left: 37 }}>
              <Image src={iconSubtract3.src}
                     alt={'iconSubtract3'} width={26} height={26}
                     style={{ position: 'relative', marginBottom: 22 }} />
              <div>
                최적의 교통망
              </div>
            </InnerImageBox>
          </InnerBox>
        </InnerWrap>
      </ContentsWrap>
      <ContentsWrap style={{ height: 200 }}>
        <ServiceMenuTitle onClick={() => goInvestmentInfo()}>
          투자 관련문서
          <Image className='next-icon' src={iconNextBig.src}
                 alt={'iconNext'} width={24} height={24} />
        </ServiceMenuTitle>
        <BasicButton
          theme={BasicButtonTheme.BlackRounded}
          onClick={() => handleClick}
          style={{ width: '100%', marginTop: 35, fontSize: '16px' }}
        >
          펀드 정보 보러가기
        </BasicButton>
      </ContentsWrap>
    </Container>
  );
};

export default TransactionInfo;
