import React from 'react';
import { useRouter } from 'next/dist/client/router';
import Image from 'next/image';
import styled from 'styled-components';
import iconRectangle from '@static/images/icon_rectangle.png';
import iconUnion from '@static/images/icon_union.png';
import { BasicButton, BasicButtonTheme } from '@components/common/BasicButton';
import BackNavBasic from "@components/common/BackNavBasic";
import { BasicInput } from '@components/common/BasicInput';

const Container = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  overflow: auto;

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
  margin-top: 68px;

  .investor-menu {
    font-weight: 400;
    font-size: 18px;
    height: 55px;
  }

  .next_icon {
    float: right;
    margin-top: 4px;
  }

  .toggle {
    float: right;
  }

  .bold {
    font-weight: 500;
  }

  .update {
    float: right;
    color: #6154FD;
    font-weight: 400;
    font-size: 16px;
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
  height: 85px;
  padding: 20px 22px;
  margin-left: auto;
  margin-top: 20px;
`;

const BuildingTitle = styled.div`
  font-weight: 500;
  font-size: 14px;
  color: #727272;
`;

const BuildingSub = styled.div`
  font-weight: 400;
  font-size: 14px;
`;

const RightBox = styled.div`
  margin-right: auto;
`;

const LeftBox = styled.div`
  margin-left: auto;  
`;

const CountWrap = styled.div`
  display: flex;
`;

const CountBox = styled.input`
  background: #F5F6F8;
  border-radius: 12px;
  width: 100%;
  height: 60px;
  padding: 17px 22px;
  outline: none;
  border: 0px;
`;

const NotiTitle = styled.div`
  font-weight: 500;
  font-size: 14px;
  color: #727272;
  padding-bottom: 28px;
`;

const NotiWrap = styled.div`
  background: #F5F6F8;
  border-radius: 12px;
  height: 300px;
  padding: 20px 22px;
  margin-left: auto;
  margin-top: 35px;
  
  ul{
    font-weight: 400;
    font-size: 13px;
    color: #727272;
    line-height: 1.2rem;
  li{
        padding-bottom: 18px;
    }
  }
`;

const SubscriptionOrder= ({}) => {
  const router = useRouter();
  const [count, setCount] = React.useState<number | string>('');
  const [disabled, setDisabled] = React.useState(false);

  const goToMain = () => {
    router.push('/SubscriptionHome');
  };

  const goToOrderResult = () => {
    router.push('/OrderSuccessResult');
  };
  const handleClick = () => {
    console.log('Click');
  };

  const onClickPlusCounter = (num: number) => {
    setCount(num + 1);
  };

  const onClickMinusCounter =  (num: number) => {
    if (num <= 0) {
      return console.log('0 이하로는 입력할 수 없습니다.');
    }
    setCount(num - 1);
  };

  return (
    <Container>
      <BackNavBasic title={'청약 신청'} onClick={() => goToMain()} />
      <ServiceCenterWrap>
        <ServiceMenuTitle onClick={() => handleClick()}>
          해운대 엘시티
        </ServiceMenuTitle>
        <BuildingInfo>
          <RightBox>
            <BuildingTitle>청약가능 금액</BuildingTitle>
            <BuildingTitle style={{ marginTop: 12 }}>청약가능 수량</BuildingTitle>
          </RightBox>
          <LeftBox>
            <BuildingSub>100,000원</BuildingSub>
            <BuildingSub style={{ marginTop: 12, float: 'right' }}>10개</BuildingSub>
          </LeftBox>
        </BuildingInfo>
          <ServiceMenuTitle style={{ marginTop: 40, marginBottom: 24 }}
                            onClick={() => handleClick()}>
            청약수량 설정
          </ServiceMenuTitle>
        <CountWrap>
          {/*<CountBox style={{ height: 52, marginRight: 'auto', color:'#727272', fontSize:16 }}*/}
          {/*          placeholder="가격"*/}
          {/*          defaultValue={count}*/}
          {/*/>*/}
          <BasicInput
            style={{width: '100%'}}
            value={count}
            placeholder="수량"
            onChange={value => setCount(value)}
            disabled={false}
          />
          <LeftBox>
            <CountWrap>
              <BasicButton
                theme={BasicButtonTheme.BlackInline}
                onClick={() => onClickMinusCounter(Number(count))}
                style={{ width: 52, height: 52, padding: 0, marginLeft: 12 }}
              >
                <Image src={iconRectangle.src} alt={'iconRectangle'} width={16} height={2}/>
              </BasicButton>
              <BasicButton
                theme={BasicButtonTheme.BlackInline}
                onClick={() => onClickPlusCounter(Number(count))}
                style={{ width: 52, height: 52, padding: 0, marginLeft: 8 }}
              >
                <Image src={iconUnion.src} alt={'iconUnion'} width={16} height={16}/>
              </BasicButton>
            </CountWrap>
          </LeftBox>
        </CountWrap>
        <CountWrap style={{ marginTop: 42 }}>
          <ServiceMenuTitle style={{ marginRight: 'auto' }}>
            최종금액
          </ServiceMenuTitle>
          <ServiceMenuTitle style={{ marginLeft: 'auto' }}>
            50,050원
          </ServiceMenuTitle>
        </CountWrap>
        <NotiWrap style={{ height: '300px' }}>
          <NotiTitle>
            유의사항
          </NotiTitle>
          <ul>
            <li>• 청약증거금의 경우 출금 및 매매가 불가능하며, 이자가 지급되지 않습니다.</li>
            <li>• 청약 수량 변경 및 추가 청역은 불가하며, 청약 수량 등을 변경하고자 할 때는 기존 청약을 취소 후 다시 청약 신청해야
              합니다.
            </li>
            <li>• Finut의 공모는 증권시장에 적용되고 있는 청약수량에 따른 비례배분 방식이 아닌 선착순 모집 방식으로 진행되므로 청약종료일
              이전에 청약이 조기 마감될 수 있으며 조기 청약 마감 후에는
              청약 취소가 불가합니다.
            </li>
          </ul>
        </NotiWrap>
        <BasicButton
          disabled={disabled}
          theme={BasicButtonTheme.BlackRounded}
          onClick={() => goToOrderResult()}
          style={{ width: '100%', marginTop: '28px', fontSize:'16px' }}
        >
          청약 신청하기
        </BasicButton>
      </ServiceCenterWrap>
    </Container>
  );
};

export default SubscriptionOrder;

//공모청약 매수
