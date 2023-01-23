import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import { useRouter } from 'next/dist/client/router';
import iconUp from '@static/images/icon_up_red.png';
import BackNavBasic from '@components/common/BackNavBasic';
import BuildingOrder from '@components/BuildingOrder';
import MarketPrice from '@components/MarketPrice';
import TransactionInfo from '@components/TransactionInfo';
import { Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap';
import { BottomSheet, BottomSheetRef } from 'react-spring-bottom-sheet';
import { BasicInput } from '@components/common/BasicInput';
import { BasicButton, BasicButtonTheme } from '@components/common/BasicButton';
import IconRectangle from '@static/images/icon_rectangle.png';
import IconUnion from '@static/images/icon_union.png';

const Container = styled.div`
  width: 100%;
  position: relative;
  overflow: auto;
`;

const NavSubInfo = styled.div`
  display: flex;
  width: 100%;
  height: 48px;
  text-align: center;
  justify-content: center;
  padding: 15px;
  font-weight: 500;
  font-size: 14px;
  margin-top: 68px;
  position: fixed;
  background-color: white;
  z-index: 105;

  div:not(:first-child) {
    margin-left: 12px;
  }

  .percent-num {
    color: #CE4B4B;
  }
`;

const TabWrap = styled.div`
  width: 100%;
  margin-top: 116px;

  .active.nav-link {
    position: relative;
    color: black;

    :after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 25px;
      height: 1px;
      width: calc(100% - 25px * 2); /* 길이 설정 */
      border-bottom: 4px solid black;
      border-radius: 30px;
    }
  }

  .nav-link {
    color: #CACACA;
    padding: 18px 20px;
  }
`;


const BasicButtonBox = styled.div`
  width: 100%;
  height: 100px;
  padding-top: 23px;

  @media screen and (min-width: 400px) {
    padding-top: 24px;
  }

  @media screen and (min-width: 500px) {
    padding-top: 16px;
  }
`;

const BottomSheetWrap = styled.div`
  .bottom-nav-sell.nav-link {
    padding: 25px !important;
    color: #3C4BCD;
    border-radius: 16px 0px 0px 0px !important;
  }

  .bottom-nav-buy.nav-link {
    padding: 25px !important;
    color: #CE4B4B;
    border-radius: 0px 16px 0px 0px !important;
  }

  .bottom-nav-sell.nav-link.active {
    background-color: white !important;
    color: #3C4BCD !important;
    border-radius: 16px 0px 0px 0px !important;
  }

  .bottom-nav-buy.nav-link.active {
    background-color: white !important;
    color: #CE4B4B !important;
    border-radius: 0px 16px 0px 0px !important;
  }
`;


const TransactionHome = () => {
  const router = useRouter();
  const [tab, setTab] = React.useState<number | string>(0);

  const [open, setOpen] = useState(true);
  const [numberCounter, setNumberCounter] = React.useState<number | string>('');
  const [priceCounter, setPriceCounter] = React.useState<number | string>('');
  const [disabled, setDisabled] = React.useState(false);
  const focusRef = useRef<HTMLButtonElement | any>();
  const sheetRef = useRef<BottomSheetRef | any>();
  const [tab2, setTab2] = React.useState<number | string>(2);


  const goToMain = () => {
    router.push('/Main');
  };


  const handleChange = (newValue: any) => {
    setTab(newValue);
  };

  const onClickNumberPlusCounter = (numberCounter) => {
    const num = Number(numberCounter);
    setNumberCounter(num + 1);
  };

  const onClickNumberMinusCounter = (numberCounter) => {
    const num = Number(numberCounter);
    if (num <= 0) {
      return console.log('0 이하로는 입력할 수 없습니다.');
    }
    setNumberCounter(num - 1);
  };

  const onClickPricePlusCounter = (priceCounter) => {
    const priceNum = Number(priceCounter);
    setPriceCounter(priceNum + 5);
  };

  const onClickPriceMinusCounter = (priceCounter) => {
    const priceNum = Number(priceCounter);
    if (priceNum <= 0) {
      return console.log('0 이하로는 입력할 수 없습니다.');
    }
    setPriceCounter(priceNum - 5);
  };

  const handleChange2 = (newValue2: any) => {
    setTab2(newValue2);
    sheetRef.current?.snapTo(({ maxHeight }) => maxHeight);
  };

  const onDismiss = () => {
    setOpen(false);
  };

  const handleClose = () => {
    setTab2(2);
    sheetRef.current?.snapTo(({ minHeight }) => minHeight - minHeight / 1.5);
  };

  const goToBuyOrder = () => {
    router.push('/BuyRequest');
  };

  const goToSellOrder = () => {
    router.push('/SellRequest');
  };

  useEffect(()=>{
    if(tab !== 0 ){
      return setOpen(false)
    }else{
      setOpen(true)
    }
  },[tab])

  return (
    <Container>
      <BackNavBasic title={'해운대 엘시티'} onClick={() => goToMain()} />
      <NavSubInfo>
        <div>50,000원</div>
        <div className='percent-num'>+18.32%</div>
        <div className='percent-num'>1.9%
          <Image className='icon_up' src={iconUp.src} alt={'iconUp'} width={10} height={10} />
        </div>
      </NavSubInfo>
      <div>
      <TabWrap>
        <Nav variant='tabs'
             defaultactivekey='link-0'
             justified
             style={{ position: 'fixed', width: '100%', zIndex: '120', background: 'white', borderBottom:'1px solid rgba(0, 0, 0, 0.04)' }}
        >
          <NavItem>
            <NavLink eventkey='link-0' onClick={() => handleChange(0)} className={'nav-link'}
                     active={tab === 0 ? true : false}>
              주문
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink eventkey='link-1' onClick={() => handleChange(1)} className={'nav-link'}
                     active={tab === 1 ? true : false}>
              시세
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink eventkey='link-2' onClick={() => handleChange(2)} className={'nav-link'}
                     active={tab === 2 ? true : false}>
              정보
            </NavLink>
          </NavItem>
        </Nav>
      </TabWrap>
      <TabContent activeTab={String(tab)}>
        <TabPane tabId='0'>
          <BuildingOrder onClosePress={() => handleClose()} />
          <div>
            <BottomSheet
              open={open}
              skipInitialTransition
              sibling={<div className='z-10' />}
              ref={sheetRef}
              initialFocusRef={focusRef}
              defaultSnap={({ minHeight }) => minHeight}
              snapPoints={({ maxHeight }) => [
                maxHeight - maxHeight / 1.65,
                maxHeight / 14,
              ]}
              blocking={false}
              onDismiss={onDismiss}
            >
              <BottomSheetWrap className='flex items-center text-xl justify-center'>
                <Nav variant='tabs'
                     defaultactivekey='link-0'
                     justified
                >
                  <NavItem>
                    <NavLink eventkey='link-0' className={'bottom-nav-sell'}
                             active={tab2 === 0 ? true : false} ref={focusRef}
                             style={tab2 === 1 ? { backgroundColor: '#F5F6F8', color: '#CACACA' } : {}}
                             onClick={() => handleChange2(0)}>

                      팔래요
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink eventkey='link-1' className={'bottom-nav-buy'}
                             active={tab2 === 1 ? true : false} ref={focusRef}
                             style={tab2 === 0 ? { backgroundColor: '#F5F6F8', color: '#CACACA' } : {}}
                             onClick={() => handleChange2(1)}>
                      살래요
                    </NavLink>
                  </NavItem>
                </Nav>
              </BottomSheetWrap>
              <TabContent activeTab={String(tab2)} style={{ padding: '21px 28px' }}>
                <TabPane tabId='0'>
                  <div style={{ display: 'flex' }}>
                    <div style={{
                      marginTop: 2, marginRight: 'auto', fontSize: 16,
                      color: '#727272',
                    }}>매도가능수량
                    </div>
                    <div style={{ marginLeft: 'auto', fontSize: 20 }}>100개</div>
                  </div>
                  <div>
                    <div style={{ display: 'flex', marginTop: 18 }}>
                      <BasicInput
                        style={{ width: '100%' }}
                        value={numberCounter}
                        placeholder='수량'
                        disabled={false}
                      />
                      <div style={{ marginLeft: 'auto' }}>
                        <div style={{ display: 'flex' }}>
                          <BasicButton
                            theme={BasicButtonTheme.BlackInline}
                            onClick={() => onClickNumberMinusCounter(numberCounter)}
                            style={{ width: 52, height: 52, padding: 0, marginLeft: 12 }}
                          >
                            <Image src={IconRectangle.src} alt={'icon_rectangle'} width={16} height={2} />
                          </BasicButton>
                          <BasicButton
                            theme={BasicButtonTheme.BlackInline}
                            onClick={() => onClickNumberPlusCounter(numberCounter)}
                            style={{ width: 52, height: 52, padding: 0, marginLeft: 8 }}
                          >
                            <Image src={IconUnion.src} alt={'icon_union'} width={16} height={16} />
                          </BasicButton>
                        </div>
                      </div>
                    </div>

                    <div style={{ display: 'flex', marginTop: 12 }}>
                      {/*<CounterBox style={{ height: 52, marginRight: 'auto' }}>*/}
                      {/*  {priceCounter}*/}
                      {/*</CounterBox>*/}
                      <BasicInput
                        style={{ width: '100%' }}
                        value={priceCounter}
                        placeholder='가격'
                        // onChange={value => setCount(value)}
                        disabled={false}
                      />
                      <div style={{ marginLeft: 'auto' }}>
                        <div style={{ display: 'flex' }}>
                          <BasicButton
                            theme={BasicButtonTheme.BlackInline}
                            onClick={() => onClickPriceMinusCounter(priceCounter)}
                            style={{ width: 52, height: 52, padding: 0, marginLeft: 12 }}
                          >
                            <Image src={IconRectangle.src} alt='icon_rectangle' width={16} height={2} />
                          </BasicButton>
                          <BasicButton
                            theme={BasicButtonTheme.BlackInline}
                            onClick={() => onClickPricePlusCounter(priceCounter)}
                            style={{ width: 52, height: 52, padding: 0, marginLeft: 8 }}
                          >
                            <Image src={IconUnion.src} alt='icon_union' width={16} height={16} />
                          </BasicButton>
                        </div>
                      </div>
                    </div>
                    <BasicButtonBox style={{ width: '100%', height: '100px' }}>
                      <BasicButton
                        disabled={false}
                        theme={BasicButtonTheme.SuccesRounded}
                        onClick={() => goToSellOrder()}
                        style={{ width: '100%' }}>매도 주문하기</BasicButton>
                    </BasicButtonBox>
                  </div>

                </TabPane>
                <TabPane tabId='1'>
                  <div style={{ display: 'flex' }}>
                    <div style={{
                      marginTop: 2, marginRight: 'auto', fontSize: 16,
                      color: '#727272',
                    }}>매수가능금액
                    </div>
                    <div style={{ marginLeft: 'auto', fontSize: 20 }}>50,000원</div>
                  </div>
                  <div>
                    <div style={{ display: 'flex', marginTop: 18 }}>
                      <BasicInput
                        style={{ width: '100%' }}
                        value={numberCounter}
                        placeholder='수량'
                        disabled={false}
                      />
                      <div style={{ marginLeft: 'auto' }}>
                        <div style={{ display: 'flex' }}>
                          <BasicButton
                            theme={BasicButtonTheme.BlackInline}
                            onClick={() => onClickNumberMinusCounter(Number(numberCounter))}
                            style={{ width: 52, height: 52, padding: 0, marginLeft: 12 }}
                          >
                            <Image src={IconRectangle.src} alt={'icon_rectangle'} width={16} height={2} />
                          </BasicButton>
                          <BasicButton
                            theme={BasicButtonTheme.BlackInline}
                            onClick={() => onClickNumberPlusCounter(Number(numberCounter))}
                            style={{ width: 52, height: 52, padding: 0, marginLeft: 8 }}
                          >
                            <Image src={IconUnion.src} alt={'icon_union'} width={16} height={16} />
                          </BasicButton>
                        </div>
                      </div>
                    </div>

                    <div style={{ display: 'flex', marginTop: 12 }}>
                      <BasicInput
                        style={{ width: '100%' }}
                        value={priceCounter}
                        placeholder='가격'
                        disabled={false}
                      />
                      <div style={{ marginLeft: 'auto' }}>
                        <div style={{ display: 'flex' }}>
                          <BasicButton
                            theme={BasicButtonTheme.BlackInline}
                            onClick={() => onClickPriceMinusCounter(Number(priceCounter))}
                            style={{ width: 52, height: 52, padding: 0, marginLeft: 12 }}
                          >
                            <Image src={IconRectangle.src} alt='icon_rectangle' width={16} height={2} />
                          </BasicButton>
                          <BasicButton
                            theme={BasicButtonTheme.BlackInline}
                            onClick={() => onClickPricePlusCounter(Number(priceCounter))}
                            style={{ width: 52, height: 52, padding: 0, marginLeft: 8 }}
                          >
                            <Image src={IconUnion.src} alt='icon_union' width={16} height={16} />
                          </BasicButton>
                        </div>
                      </div>
                    </div>
                    <BasicButtonBox>
                      <BasicButton
                        disabled={disabled}
                        theme={BasicButtonTheme.FailRounded}
                        onClick={() => goToBuyOrder()}
                        style={{ width: '100%' }}
                      >매수 주문하기
                      </BasicButton>
                    </BasicButtonBox>
                  </div>
                </TabPane>
              </TabContent>
            </BottomSheet>
          </div>
        </TabPane>
        <TabPane tabId='1'>
          <MarketPrice />
        </TabPane>
        <TabPane tabId='2'>
          <TransactionInfo />
        </TabPane>
      </TabContent>
      </div>
    </Container>
  );
};

export default TransactionHome;
