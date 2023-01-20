import React from 'react';
import Image, {ImageProps} from 'next/image';
import styled from 'styled-components';
import MapImg from '@static/images/img_map.png';

const Container = styled.div`
  width: 100%;
  height: 74vh;
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

const ContentsBox = styled.div`
  padding: 30px 28px;
  background-color: white;

  hr {
    border: 0;
    height: 1.2px;
    background-color: #DEDEDE;
    margin-top: 15px;
    margin-bottom: 28px;
  }
`;

const ServiceMenuTitle = styled.div`
  font-weight: 600;
  font-size: 18px;
  color: #000000;
`;

const BuildingInfos = styled.div`
  display: flex;
  margin-top: 20px;
  width: auto;
  height: auto;


  .map {
    width: 100%;
    height: auto;
  }
`;

const InfoBuildingWrap = styled.div`
  display: flex;
  font-size: 14px;
  margin-top: 25px;
  position: relative;
  top: 140px;
`;

const InfoSubWrap = styled.div`
  display: flex;
  font-size: 14px;
  margin-top: 25px;
`;

const InfoTitle = styled.div`
  margin-right: auto;

  div {
    font-weight: 400;
    font-size: 14px;
    color: #ADADAD;
    line-height: 1.5rem;
  }
`;

const InfoContents = styled.div`
  margin-left: auto;
  text-align: end;

  div {
    font-weight: 400;
    font-size: 14px;
    color: #000000;
    line-height: 1.5rem;
  }
`;

const MapImageWrapper = styled.div`
  width: 100%;
  position: relative !important;

  img {
    height: 120px !important;
  }
`;


const MapImage = ({...props}: ImageProps) => {
  return (
    <MapImageWrapper>
      <Image fill={true} {...props} />
    </MapImageWrapper>
  );
};


const SubscriptionDetailInfo = () => {

  const handleClick = () => {
    console.log('Click');
  };


  return (
    <Container>
      <ContentsBox style={{height: 515}}>
        <ServiceMenuTitle onClick={() => handleClick()}>
          매물 정보
        </ServiceMenuTitle>
        <BuildingInfos>
          <MapImage src={MapImg.src} alt={'mapImg'}/>
        </BuildingInfos>
        <InfoBuildingWrap>
          <InfoTitle>
            <div>투자대상</div>
            <div>위치</div>
            <div>용도지역</div>
            <div>주 용도</div>
            <div>연 면적</div>
            <div>건물 규모</div>
            <div>준공일</div>
            <div>공시지가</div>
            <div>임차인</div>
            <div>임대기간</div>
          </InfoTitle>
          <InfoContents>
            <div>엘시티 랜드마크타워동 제41층 제4107호</div>
            <div>부산시 해운대구 달맞이길 30</div>
            <div>일반상업지역</div>
            <div>숙박시설</div>
            <div>본건 : 240.3m³ (전유면적 113.5m³)</div>
            <div>지하 5층 / 지상 101층</div>
            <div>2019.11.29</div>
            <div>13,770,000원 / m³ (2022년 1월 기준)</div>
            <div>주식회사 유진글로벌</div>
            <div>2022.10.01 ~ 2025.11.30</div>
          </InfoContents>
        </InfoBuildingWrap>
      </ContentsBox>
      <ContentsBox style={{height: 395, marginTop: 12, marginBottom: 12}}>
        <ServiceMenuTitle>
          청약 정보
        </ServiceMenuTitle>
        <hr/>
        <InfoSubWrap>
          <InfoTitle>
            <div>상품 명칭</div>
            <div>모집 수량</div>
            <div>공모가</div>
            <div>공모 총액</div>
            <div>청약가능 수량</div>
            <div>발행인</div>
            <div>공모 기간</div>
            <div>청약 시간</div>
            <div>일정</div>
          </InfoTitle>
          <InfoContents>
            <div>해운대 엘시티</div>
            <div>620,000개</div>
            <div>5,000원</div>
            <div>28억 5천만원</div>
            <div>234,167개</div>
            <div>우리자산신탁 (주)</div>
            <div>2012.12.22 ~ 2013.01.02</div>
            <div>09:00 ~ 22~00</div>
            <div>배정일 : 2022.12.12<br/>입고일 : 2022.12.20<br/>상장일 : 2022.12.22</div>
          </InfoContents>
        </InfoSubWrap>
      </ContentsBox>
    </Container>
  );
};

export default SubscriptionDetailInfo;
