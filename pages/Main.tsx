import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/dist/client/router';
import styled from 'styled-components';
import logoHorison from '@static/images/logo_horison.png';
import iconAlert from '@static/images/icon_alert.png';
import iconPerson from '@static/images/icon_person.png';
import iconNextPurple from '@static/images/icon_next_purple.png';
import iconDown from '@static/images/icon_down.png';
import { BasicButton, BasicButtonTheme } from '@components/common/BasicButton';


const Container = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  overflow-x: hidden;
  overflow-y: auto;
  font-family: 'Pretendard';
`;

const MainWrap = styled.div`
  background-color: ${({ theme }) => theme.GRAY_4D};
  width: 100%;
  height: 485px;
`;

const NavBasic = styled.div`
  width: 100%;
  height: 68px;
  margin: 0px;
  padding: 25px 30px;
  text-align: center;

  .person {
    float: left;
  }

  .person2 {
    float: right;
  }

  .alert {
    float: right;
  }
`;

const AssetInfoWrap = styled.div`
  padding: 28px;
`;

const AssetInfoTitle = styled.div`
  color: ${({ theme }) => theme.WHITE};
  font-weight: 500;
  font-size: 16px;
  padding-top: 12px;
`;

const AssetInfoSubtitle = styled.div`
  color: ${({ theme }) => theme.WHITE};
  font-weight: 600;
  font-size: 28px;
  padding-top: 5px;
`;

const AssetInfoDes = styled.div`
  color: #FFB601;
  font-weight: 600;
  font-size: 28px;
  padding-top: 10px;

  span {
    color: ${({ theme }) => theme.WHITE};
  }
`;

const AccountInfoWrap = styled.div`
  padding: 28px;
  color: ${({ theme }) => theme.WHITE};
  background-color: rgba(0, 0, 0, 0.4);;
  width: 87%;
  height: 184px;
  margin: 0px 24px;
  border-radius: 15px;
`;

const AccountTextBox = styled.div`
  div {
    font-size: 20px;
    line-height: 30px;
    font-weight: 500;

    span {
      font-weight: 700;
    }
  }
`;

const AccountButtonBox = styled.div`
  display: flex;
  justify-content: center;
`;

const SubWrap = styled.div`
`;

const SubContentsBox = styled.div`
  background-color: #F5F6F8;
  width: 100%;
  height: 115px;
  padding: 28px;

  div {
    font-size: 15px;
  }

  .guide {
    margin-top: 10px;
    color: #6154FD;
  }

  span {
    margin-top: 10px;
    position: relative;
    top: 2px;
  }
`;

const InvestmentWrap = styled.div`
  padding: 33px 28px;
`;

const InvestmentTitle = styled.div`
  font-size: 22px;
  font-weight: 500;
`;

const InvestmentSub = styled.div`
  font-size: 14px;
  color: #ADADAD;
  margin-top: 4px;
`;

const TransactionListWrap = styled.div`
  margin-top: 36px;
`;

const TransactionTitle = styled.div`
  font-size: 18px;
  font-weight: 500;
`;

const TransactionListBox = styled.div`
`;

const TransactionContentsBox = styled.div`
  padding: 20px;
  margin-top: 13px;
  border: 1px solid #DEDEDE;
  border-radius: 12px;

  .down-icon {
    margin-bottom: 2px;
  }
`;

const TransactionBox = styled.div`
  font-size: 17px;
  font-weight: 400;
  display: flex;
`;

const TransactionRight = styled.div`
  margin-left: auto;

  color: ${({ theme }) => theme.BLUE_SUCCES};
  font-size: 15px;
  font-weight: 500;
`;

const TransactionLeft = styled.div`
  margin-right: auto;

  color: ${({ theme }) => theme.BLUE_SUCCES};
  font-size: 15px;
  font-weight: 500;
`;

const BuildingName = styled.div`
  margin-top: 4px;
`;

const LimitDate = styled.div`
  font-size: 13px;
  color: ${({ theme }) => theme.GRAY_AD};
  padding-top: 4px;
  padding-bottom: 15px;
`;

const TransactionInforBox = styled.div`
  display: flex;
`;

const InfoTitle = styled.div`
  color: ${({ theme }) => theme.GRAY_72};
  font-size: 15px;
  font-weight: 400;
  margin-top: 8px;
  margin-right: auto;
`;

const InfoContents = styled.div`
  margin-left: auto;
  color: ${({ theme }) => theme.BLACK};
  margin-top: 5px;
  font-size: 15px;

  span {
    color: ${({ theme }) => theme.GRAY_72};
  }
`;

const FooterWrap = styled.div`
  width: 100%;
  height: 210px;
  padding: 41px 28px;
  background-color: ${({ theme }) => theme.BLACK};
`;

const FooterTitle = styled.div`
  font-family: 'S-Core Dream';
  font-weight: 600;
  font-size: 20px;
  color: ${({ theme }) => theme.WHITE};
  line-height: 28px;
`;

const FooterSub = styled.div`
  padding-top: 41px;
  font-size: 14px;
  font-weight: 400;
  color: ${({ theme }) => theme.GRAY_AD};
  line-height: 22px;
`;


const ButtonStyle = {
  width: '160px',
  height: '48px',
  marginTop: '28px',
  fontSize: '16px',
  fontWeight: '600',
  padding: '0',
};

const ButtonStyle2 = {
  width: '160px',
  height: '48px',
  marginLeft: '10px',
  marginTop: '28px',
  fontSize: '16px',
  fontWeight: '600',
  padding: '0',
};

const ButtonStyle3 = {
  width: '122px',
  height: '32px',
  padding: '0',
  marginBottom: '10px',
};

const items = [
  {
    id: 0,
    name: '????????? ?????????',
    date: `???????????? : 2022/12/22 ~ 2023/12/22`,
    public_price_value: `5,000`,
    total_quantity_value: `620,000`,
    available_quantity_value: `234,167`,
  },
];


const Main = () => {
  const router = useRouter();

  const goToUserMyInfo = () => {
    router.push('/UserMyInfo');
  };

  const goToTransactionHome = () => {
    router.push('/TransactionHome');
  };

  const goToSubscriptionHome = () => {
    router.push('/SubscriptionHome');
  };

  const handleClick = () => {
    console.log('Click');
  };

  return (
    <Container>
      <MainWrap>
        <NavBasic>
          <Image src={iconPerson.src} alt={'iconPerson'} className='person'
                 width={24} height={24} onClick={() => goToUserMyInfo()} />
          <Image src={logoHorison.src} alt={'iconHorison'} className='logo'
                 width={104} height={30} />
          <Image src={iconAlert.src} alt={'iconAlert'} className='person2'
                 width={24} height={24} />
        </NavBasic>
        <AssetInfoWrap>
          <AssetInfoTitle>???????????????</AssetInfoTitle>
          <AssetInfoSubtitle>????????? ?????? ??????</AssetInfoSubtitle>
          <AssetInfoDes>250,000<span> ???</span></AssetInfoDes>
        </AssetInfoWrap>
        <AccountInfoWrap>
          <AccountTextBox>
            <div>?????? ???????????? <br /> <span>200,000???</span> ?????????.</div>
          </AccountTextBox>
          <AccountButtonBox>
            <BasicButton
              style={ButtonStyle}
              theme={BasicButtonTheme.WhiteInline}
              onClick={() => handleClick()}
            >
              ??????
            </BasicButton>
            <BasicButton
              style={ButtonStyle2}
              theme={BasicButtonTheme.WhiteRounded}
              onClick={() => handleClick()}
            >
              ??????
            </BasicButton>
          </AccountButtonBox>
        </AccountInfoWrap>
      </MainWrap>
      <SubWrap>
        <SubContentsBox>
          <div>?????? ??? ?????? ????????? ????????????????</div>
          <div className='guide' onClick={() => handleClick()}>Finut ?????? ????????? <span>
            <Image src={iconNextPurple.src} alt={'iconNextPurple'} width={16} height={16} /></span>
          </div>
        </SubContentsBox>
        <InvestmentWrap>
          <InvestmentTitle>Finut??? ????????????</InvestmentTitle>
          <InvestmentSub>Finut?????? ????????? ????????? ??????????????????.</InvestmentSub>
          <TransactionListWrap>
            <TransactionTitle>????????????</TransactionTitle>
            <TransactionListBox>
              <TransactionContentsBox onClick={() => goToTransactionHome()}>
                <TransactionBox>
                  <BuildingName>????????? ?????????</BuildingName>
                  <TransactionRight>
                    <BasicButton
                      style={ButtonStyle3}
                      theme={BasicButtonTheme.GreyRounded}
                      onClick={() => handleClick()}
                    >
                      ?????? ?????? ?????????
                    </BasicButton>
                  </TransactionRight>
                </TransactionBox>
                <TransactionBox>
                  <TransactionLeft>650???</TransactionLeft>
                  <TransactionRight>
                    -1.9%
                    <Image className='down-icon' src={iconDown.src} alt={'iconDown'} width={8} height={6} />
                  </TransactionRight>
                </TransactionBox>
              </TransactionContentsBox>
            </TransactionListBox>
            <TransactionTitle style={{ marginTop: 40 }}>????????????</TransactionTitle>
            {items.map(item => {
              return (
                <TransactionListBox onClick={() => goToSubscriptionHome()} key={item.id}>
                  <TransactionContentsBox>
                    <BuildingName>{item.name}</BuildingName>
                    <LimitDate>{item.date}</LimitDate>
                    <TransactionInforBox>
                      <InfoTitle>?????????</InfoTitle>
                      <InfoContents>{item.public_price_value}???<span> / ???</span></InfoContents>
                    </TransactionInforBox>
                    <TransactionInforBox>
                      <InfoTitle>??? ??????</InfoTitle>
                      <InfoContents>{item.total_quantity_value}<span> ???</span></InfoContents>
                    </TransactionInforBox>
                    <TransactionInforBox>
                      <InfoTitle>???????????? ??????</InfoTitle>
                      <InfoContents>{item.available_quantity_value}<span> ???</span></InfoContents>
                    </TransactionInforBox>
                  </TransactionContentsBox>
                </TransactionListBox>
              );
            })}
          </TransactionListWrap>
        </InvestmentWrap>
      </SubWrap>
      <FooterWrap>
        <FooterTitle>Finut ????????? ????????????<br />???????????? & ????????? ??????</FooterTitle>
        <FooterSub>Finut ??????????????????<br />?????? ????????? ???????????????</FooterSub>
      </FooterWrap>
    </Container>
  );
};

export default Main;
