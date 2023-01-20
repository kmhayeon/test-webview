import React from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/dist/client/router';
import BackNavBasic from '@components/common/BackNavBasic';

const Container = styled.div`
`;


const Frame = styled.iframe`
  margin-top: 100px;
  padding: 10px 17px 30px 17px;
  width: 100%;
  height: 100vh;
  border: 0;
`;


const InvestmentInfo = () => {
  const router = useRouter();

  const goToBack = () => {
    router.back();
  };

  return (
    <Container>
      <BackNavBasic title={'투자 관련문서'} onClick={() => goToBack()} />
      <Frame
        width={'100%'}
        height={'100%'}
        src={
          '/InvestmentInfoContents'
        }
      />
    </Container>
  );
};

export default InvestmentInfo;
