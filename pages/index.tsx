import React from 'react';
import styled from 'styled-components';
import logo from '@static/images/Logo.png';
import {useRouter} from "next/dist/client/router";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
`;

const MainWrap = styled.div`
  margin: 0px auto;
`;

const MainContentsBox = styled.div`
  width: 100%;
  position: absolute;
  text-align: center;
  top: 35%;
`;

const MainTitle = styled.div`
  img {
    width: 128px;
    height: 127px;
  }
`;

const SubTitle = styled.p`
  margin-top: 45px;
  font-family: Pretendard;
  font-style: normal;
  font-size: 20px;
  font-weight: 400;
  line-height: 100%;
  letter-spacing: 0.02rem;
  color: ${({theme}) => theme.BLACK};

  @media (max-width: 991px) {
    font-size: 20px;
  }

  @media (max-width: 640px) {
    font-size: 20px;
  }
`;

export default function Index() {
    const router = useRouter();

    const goToMainHome = () => {
        router.push('/Main')
    };

    return (
        <Container>
            <MainWrap>
                <MainContentsBox>
                    <MainTitle>
                        <img src={logo.src} onClick={goToMainHome}/>
                    </MainTitle>
                    <SubTitle>나의 첫번째 조각투자 Playground</SubTitle>
                </MainContentsBox>
            </MainWrap>
        </Container>
    );
}
