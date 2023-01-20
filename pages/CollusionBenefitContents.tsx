import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 100vh;
  text-align: center;
  color: #4D4D4D;
  font-size: 16px;
  line-height: 1.4rem;
  padding: 40px 28px;
  margin-top: 50px;
  background: white;
  
  hr {
    border: 0;
    height: 1.2px;
    background-color: #DEDEDE;
    margin-top: 15px;
    margin-bottom: 35px;
  }
`;

const Title = styled.div`
  color: #FFB601;
  font-size: 25px;

  span {
    color: #FFB601;
    font-size: 25px;
  }
`;

const ContentsWrapText = styled.div`
  margin-left: 15px;
  font-size: 18px;
  color: #000000;
  text-align: left;

  span {
    position: relative;
    font-weight: 500;
    font-size: 16px;
    line-height: 100%;
    color: #727272;
    top: 3px;
  }
`;

const ContentsWrap = styled.div`
  display: flex;
  font-size: 20px;
  color: #727272;
  margin-bottom: 20px;
`;

const ContentsWrapBox = styled.div`
  display: flex;
  padding: 10px;
`;


const CollusionBenefitContents = () => {
  return (
    <Container>
      <ContentsWrap>
        <ContentsWrapBox>
          <Title>혜택 <span>1</span></Title>
          <ContentsWrapText>투자만해도 5% 캐시백 적립 <br /> <span>*최대 30만원 *10만원 이상 투자자 대상</span></ContentsWrapText>
        </ContentsWrapBox>
      </ContentsWrap>
      <hr/>
      <ContentsWrap>
        <ContentsWrapBox>
          <Title>혜택 <span>2</span></Title>
          <ContentsWrapText>5천원 투자해도 배달 상품권을!<br /> <span>*추첨 100명 증정</span></ContentsWrapText>
          </ContentsWrapBox>
      </ContentsWrap>
      <hr/>
      <ContentsWrap>
        <ContentsWrapBox>
          <Title>혜택 <span>3</span></Title>
          <ContentsWrapText>부동산 투자하고 금테크까지?<br /> <span>*천만원 이상 투자 시 금 1돈 증정</span></ContentsWrapText>
          </ContentsWrapBox>
      </ContentsWrap>
      <hr/>
      <ContentsWrap>
        <ContentsWrapBox>
          <Title>혜택 <span>4</span></Title>
          <ContentsWrapText>스튜디오 오스카 투어권 증정<br /> <span>*1백만원 투자자 대상</span></ContentsWrapText>
          </ContentsWrapBox>
      </ContentsWrap>
      <hr/>
      <ContentsWrap>
        <ContentsWrapBox>
          <Title>혜택 <span>5</span></Title>
          <ContentsWrapText>투자도하고, 백화점 상품권도 받고!<br /> <span>*1백만원 투자자 대상</span></ContentsWrapText>
          </ContentsWrapBox>
      </ContentsWrap>
    </Container>
  );
};

export default CollusionBenefitContents;
