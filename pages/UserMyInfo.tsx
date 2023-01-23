import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/dist/client/router';
import styled from 'styled-components';
import close from '@static/images/icon_close.png';
import iconNext from '@static/images/icon_next_basic.png';
import iconNextBig from '@static/images/icon_next_big.png';
import iconUpdate from '@static/images/icon_next_purple.png';
import { BasicButton, BasicButtonTheme } from '@components/common/BasicButton';
import { SwitchWrap } from '@styles/commonStyle';
import Toggle from 'react-toggle';
import 'react-toggle/style.css';


const Container = styled.div`
  width: 100%;
  //height: 100vh;
  position: relative;
  //overflow: auto;
  overflow-x: hidden;
  overflow-y: auto;
  background-color: #F5F6F8;
`;

const NavBasic = styled.div`
  height: 68px;
  margin: 0px;
  padding: 25px 30px;
  text-align: center;
  background-color: white;

  .close-icon {
    float: right;
  }
`;

const UserInfoWrap = styled.div`
  padding: 35px 28px;
  height: 120px;
  background-color: white;
`;

const UserInfoTitle = styled.div`
  font-weight: 500;
  font-size: 28px;
`;

const UserInfoSub = styled.div`
  padding-top: 12px;
  font-weight: 500;
  font-size: 14px;
  color: #727272;
`;

const AccountConnecWrap = styled.div`
  padding: 28px;
  height: 207px;
  text-align: center;
`;

const AccountConnecTitle = styled.div`
  font-size: 17px;
`;

const AccountConnecSub = styled.div`
  padding-top: 10px;
  font-size: 15px;
  color: #727272;
`;

const ServiceCenterWrap = styled.div`
  padding: 40px 28px;
  height: 268px;
  background-color: white;

  
  .switch{
    font-weight: 400;
    font-size: 18px;
    height: 55px;
  }

  .toggle {
    float: right;
    top: -14%;
  }
`;

const ServiceTitle = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 100%;
  padding-bottom: 33px;
`;

const ServiceButtonWrap = styled.div`
  display: flex;
`;


const InvestorMenu = styled.div`
  font-weight: 400;
  font-size: 18px;
  height: 55px;

  .next-icon {
    float: right;
    margin-top: 4px;
  }
`;

const VersionBox = styled.div`
  font-size: 18px;
  font-weight: 500;
`;

const UpdateBox = styled.div`
  float: right;
  color: #6154FD;
  font-weight: 400;
  font-size: 16px;
`;

const UserMyInfo = () => {
  const router = useRouter();
  const [bioCertified, setBioCertifiedy] = React.useState(true);
  const [serviceNoti, setServiceNoti] = React.useState(false);
  const [marketingNoti, setMarketingNoti] = React.useState(false);


  const goToMain = () => {
    router.push('/Main');
  };

  const HandleBioToggle = () => {
    setBioCertifiedy(!bioCertified);
    console.log(bioCertified);
  };

  const HandleServiceToggle = () => {
    setServiceNoti(!serviceNoti);
    console.log(serviceNoti);
  };

  const HandleMarktingToggle = () => {
    setMarketingNoti(!marketingNoti);
    console.log(marketingNoti);
  };

  const handleClick = () => {
    console.log('Click');
  };

  return (
    <Container>
      <NavBasic>
        <Image className='close-icon' src={close.src} alt={'iconClose'} width={24} height={24}
               onClick={() => goToMain()} />
      </NavBasic>
      <UserInfoWrap>
        <UserInfoTitle>조영훈 님
          <Image src={iconNextBig.src} alt={'iconBack'} width={24} height={24} />
        </UserInfoTitle>
        <UserInfoSub>최근 접속 2022/02/22</UserInfoSub>
      </UserInfoWrap>
      <AccountConnecWrap>
        <AccountConnecTitle>투자 시작을 위한 계좌 연결</AccountConnecTitle>
        <AccountConnecSub>예치금 입출금 계좌를 연결해주세요</AccountConnecSub>
        <BasicButton
          style={{ marginTop: 27, width: '100%', fontSize:'16px' }}
          theme={BasicButtonTheme.BlackRounded}
          onClick={() => handleClick()}
        >
          연결하러 가기
        </BasicButton>
      </AccountConnecWrap>
      <ServiceCenterWrap>
        <ServiceTitle>고객센터</ServiceTitle>
        <ServiceButtonWrap>
          <BasicButton
            style={{ marginRight: 12, marginBottom: 12 }}
            theme={BasicButtonTheme.GreyF5Rounded}
            onClick={() => handleClick()}
          >
            자주묻는질문
          </BasicButton>
          <BasicButton
            style={{}}
            theme={BasicButtonTheme.GreyF5Rounded}
            onClick={() => handleClick()}
          >
            내 문의 내역
          </BasicButton>
        </ServiceButtonWrap>
        <ServiceButtonWrap>
          <BasicButton
            style={{ marginRight: 12 }}
            theme={BasicButtonTheme.GreyF5Rounded}
            onClick={() => handleClick()}
          >
            공지사항
          </BasicButton>
          <BasicButton
            style={{}}
            theme={BasicButtonTheme.GreyF5Rounded}
            onClick={() => handleClick()}
          >
            이용 가이드
          </BasicButton>
        </ServiceButtonWrap>
      </ServiceCenterWrap>
      <ServiceCenterWrap style={{ marginTop: 12, height: 210 }}>
        <ServiceTitle>투자자 권리</ServiceTitle>
        <InvestorMenu onClick={() => handleClick()}>
          배당금 현황
          <Image className='next-icon' src={iconNext.src} alt={'iconNext'} width={16} height={16} />
        </InvestorMenu>
        <InvestorMenu onClick={() => handleClick()}>
          수익자 총회
          <Image className='next-icon' src={iconNext.src} alt={'iconNext'} width={16} height={16} />
        </InvestorMenu>
      </ServiceCenterWrap>
      <ServiceCenterWrap style={{ marginTop: 12, height: 275 }}>
        <ServiceTitle>인증 및 알림</ServiceTitle>
        <SwitchWrap className='switch'>
          바이오 인증 사용하기
          <Toggle className='toggle' checked={bioCertified} icons={false} onChange={HandleBioToggle} />
        </SwitchWrap>
        <SwitchWrap className='switch'>
          서비스 이용 알림 받기
          <Toggle className='toggle' checked={serviceNoti} icons={false} onChange={HandleServiceToggle} />
        </SwitchWrap>
        <SwitchWrap className='switch'>
          마케팅 정보 및 혜택 받기
          <Toggle className='toggle' checked={marketingNoti} icons={false} onChange={HandleMarktingToggle} />
        </SwitchWrap>
      </ServiceCenterWrap>
      <ServiceCenterWrap style={{ marginTop: 12, height: 210 }}>
        <ServiceTitle>약관 및 동의서</ServiceTitle>
        <InvestorMenu onClick={() => handleClick()}>
          동의한 약관 조회
          <Image className='next-icon' src={iconNext.src} alt={'iconNext'} width={16} height={16} />
        </InvestorMenu>
        <InvestorMenu onClick={() => handleClick()}>
          개인정보 처리방침 조회
          <Image className='next-icon' src={iconNext.src} alt={'iconNext'} width={16} height={16} />
        </InvestorMenu>
      </ServiceCenterWrap>
      <ServiceCenterWrap style={{ marginTop: 12, height: 210 }}>
        <ServiceTitle>앱 보안 및 설정</ServiceTitle>
        <InvestorMenu onClick={() => handleClick()}>
          간편 비밀번호 변경
          <Image className='next-icon' src={iconNext.src} alt={'iconNext'} width={16} height={16} />
        </InvestorMenu>
        <InvestorMenu onClick={() => handleClick()}>
          오픈소스 라이선스
          <Image className='next-icon' src={iconNext.src} alt={'iconNext'} width={16} height={16} />
        </InvestorMenu>
      </ServiceCenterWrap>
      <ServiceCenterWrap style={{ marginTop: 12, height: 160 }}>
        <ServiceTitle>앱버전</ServiceTitle>
        <VersionBox>
          2.4 Ver.
          <UpdateBox onClick={() => handleClick()}>
            업데이트 <Image src={iconUpdate.src} alt={'iconUpdate'} width={14} height={14} />
          </UpdateBox>
        </VersionBox>
      </ServiceCenterWrap>
    </Container>
  );
};

export default UserMyInfo;
