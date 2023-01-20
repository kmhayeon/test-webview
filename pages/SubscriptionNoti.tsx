import React from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/dist/client/router';
import BackNavBasic from '@components/common/BackNavBasic';

const Container = styled.div`
  
`;


const Frame = styled.iframe`
  margin-top: 35px;
  width: 100%;
  height: 100vh;
  border: 0;
  background: #EFEFEF;
`;


const SubscriptionNoti = () => {
  const router = useRouter();

  const goToSubscriptionHome = () => {
    router.push('/SubscriptionHome');
  };

  return (
    <Container>
      <BackNavBasic title={'청약 유의사항'} onClick={() => goToSubscriptionHome()}
      />
      <Frame
        width={'100%'}
        height={'100%'}
        src={
          '/SubscirptionContents'
        }
      />
    </Container>
  );
};

export default SubscriptionNoti;
