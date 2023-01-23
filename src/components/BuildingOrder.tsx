import React, { useState, useRef } from 'react';
import { useRouter } from 'next/dist/client/router';
import Image from 'next/image';
import styled from 'styled-components';
import IconRectangle from '@static/images/icon_rectangle.png';
import IconUnion from '@static/images/icon_union.png';
import iconSeleted from '@static/images/icon_selected.png';
import iconWarning from '@static/images/icon_warning.png';
import { BasicButton, BasicButtonTheme } from '@components/common/BasicButton';
import { BottomSheet, BottomSheetRef } from 'react-spring-bottom-sheet';
import { FakeMockNoOrderData, FakeMockOrderData } from '../../makeMock';
import { BasicInput } from '@components/common/BasicInput';
import { Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap';

export interface TEST_DATA {
  price: number,
  title: number | string,
  here: boolean,
}

export interface TEST2_DATA {
  title: number | string,
  date: string
  price: number,
  val: number,
  count: number,
  here: boolean,
}

const Container = styled.div`
  width: 100%;
`;

const ChartWrap = styled.div`
  width: 100%;
  height: 75vh;
  overflow: auto;
  border-right: 1px solid #DEDEDE;
`;

const ChartWraps = styled.div`
  width: 80%;
  height: 75vh;
  overflow: auto;
`;

const LeftBox = styled.div`
  display: flex;
  padding: 22px;
  background-color: #F5F6F8;
`;

const TitleBox = styled.div`
  margin-right: auto;
  font-weight: 500;
  font-size: 16px;
  color: #CE4B4B;
`;

const ContentsBox = styled.div`
  margin-left: auto;
  font-weight: 500;
  font-size: 14px;
  color: #727272;
`;

const CounterBox = styled.div`
  background: #F5F6F8;
  border-radius: 12px;
  width: 100%;
  height: 60px;
  padding: 17px 22px;
`;

const RightBox = styled.div`
`;

const TabWrap = styled.div`
  width: 100%;

  hr {
    border: 0px;

    :not(:nth-of-type(3)) {
      border: 0;
      height: 1.2px;
      background-color: #DEDEDE;
      margin-top: 10px;
      margin-bottom: 10px;
    }
  }

  .text-link.nav-link.active {
    background-color: white !important;
    color: black !important;
  }

  .active.nav-link:after {
    border-bottom: 0px !important;
  }

  .nav-link {
    background: #F5F6F8;
    color: rgb(202, 202, 202) !important;
    padding: 18px 20px;
  }
`;

const TabInfoBox = styled.div`
  padding: 24px;

  button {
    margin-top: 23px;
  }
`;

const TabSubBox = styled.div`
  padding-bottom: 36px;

  div {
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
  }

  span {
    font-weight: 400;
    font-size: 12px;
    color: #727272;
    letter-spacing: 0.009rem;
  }
`;

const TabSubButtomBox = styled.div`
  display: flex;
`;

const ButtonBox = styled.div`
  text-align: center;

  &:first-child {
    margin-top: 20px;
  }
`;

const TabLeftBox = styled.div`
  margin-right: auto;

  div {
    font-weight: 500;
    font-size: 14px;
    color: #727272;
    line-height: 1.5rem;
  }
`;

const TabRightBox = styled.div`
  margin-left: auto;
  text-align: end;

  div {
    font-weight: 500;
    font-size: 14px;
    color: #000000;
    line-height: 1.5rem;
  }
`;

const TabContents = styled.div`
  padding: 24px;
  text-align: center;
  top: 100px;
  position: relative;

  div {
    padding-top: 16px;
    font-weight: 400;
    font-size: 14px;
    color: #727272;
    line-height: 1.2rem;
  }
`;

const SubText = styled.div`
  padding: 12px 24px;
  font-weight: 500;
  font-size: 13px;
  color: #727272;
  margin-bottom: 100px;
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


const BuildingOrder = () => {
  const router = useRouter();
  const [open, setOpen] = useState(true);
  const [numberCounter, setNumberCounter] = React.useState<number | string>('');
  const [priceCounter, setPriceCounter] = React.useState<number | string>('');
  const [disabled, setDisabled] = React.useState(false);
  const focusRef = useRef<HTMLButtonElement | any>();
  const sheetRef = useRef<BottomSheetRef | any>();
  const [tab, setTab] = React.useState<number | string>(0);
  const [tab2, setTab2] = React.useState<number | string>(2);


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

  const onDismiss = () => {
    setOpen(false);
  };

  const handleContentsAdd = () => {
    console.log('더보기 클릭');
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

  const handleChange = (newValue: any) => {
    setTab(newValue);
  };

  const handleChange2 = (newValue2: any) => {
    setTab2(newValue2);
    sheetRef.current?.snapTo(({ maxHeight }) => maxHeight);
  };

  return (
    <Container>
      <div style={{ display: 'flex', paddingTop: 53 }} onClick={() => handleClose()}>
        <ChartWrap>
          {FakeMockOrderData.map((num: TEST_DATA, idx: number) => {
            return (
              <LeftBox
                key={idx}
                style={num.here === true || isNaN(Number(num.title)) ?
                  { backgroundColor: '#ffffff' } : { backgroundColor: '#F5F6F8' }}
              >
                <TitleBox style={num.price < 50000 ? { color: '#3C4BCD' } : { color: '#CE4B4B' }}>
                  {
                    num.price === 50000 ?
                      <>
                        <Image src={iconSeleted.src} alt={'iconSeleted'} width={8} height={8}
                               style={{ marginBottom: 3, marginRight: 3 }} />{num.price.toLocaleString()}
                      </>
                      :
                      <div>&nbsp;&nbsp;{num.price.toLocaleString()}</div>
                  }
                </TitleBox>
                <ContentsBox>{num.title.toLocaleString()}</ContentsBox>
              </LeftBox>
            );
          })}
        </ChartWrap>

        <ChartWraps>
          <RightBox>
            <TabWrap>
              <Nav variant='tabs'
                   defaultactivekey='link-0'
                   justified
              >
                <NavItem>
                  <NavLink eventkey='link-0' onClick={() => handleChange(0)}
                           className={'text-link'}
                           active={tab === 0 ? true : false}>
                    체결
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink eventkey='link-1' onClick={() => handleChange(1)}
                           className={'text-link'}
                           active={tab === 1 ? true : false}>
                    미체결
                  </NavLink>
                </NavItem>
              </Nav>
              <TabContent activeTab={String(tab)}>
                <TabPane tabId='0'>
                  {/*체결 내역이 있는 경우*/}
                  {FakeMockNoOrderData.map((num: TEST2_DATA, idx: number) => {
                    return (
                      <div key={idx}>
                        <TabInfoBox>
                          <TabSubBox>
                            <div style={num.title === '판매' ? { color: '#3C4BCD' } : { color: '#CE4B4B' }}>
                              {num.title} <br /><span>{num.date}</span>
                            </div>
                          </TabSubBox>
                          <TabSubButtomBox>
                            <TabLeftBox>
                              <div>가격</div>
                              <div>수량</div>
                              <div>구매</div>
                            </TabLeftBox>
                            <TabRightBox>
                              <div>{num.price.toLocaleString()}원</div>
                              <div>{num.count}개</div>
                              <div>{num.val.toLocaleString()}원</div>
                            </TabRightBox>
                          </TabSubButtomBox>
                        </TabInfoBox>
                        <hr />
                      </div>
                    );
                  })}
                  <div style={{ textAlign: 'center' }}>
                    <BasicButton
                      theme={BasicButtonTheme.BlackInline}
                      onClick={() => handleContentsAdd()}
                      style={{ width: '75%', height: '33px', padding: 0, fontSize: 12, borderRadius: 8 }}
                    >
                      더보기
                    </BasicButton>
                  </div>
                  <SubText>최근 3개월 간의 내역이 보여요.</SubText>
                  {/*체결 내역이 없는 경우*/}
                  {/*<TabContents>*/}
                  {/*  <Image src={iconWarning.src} alt={'iconWarning'} width={24} height={24} />*/}
                  {/*  <div>체결 내역이<br/> 없습니다.</div>*/}
                  {/*</TabContents>*/}
                </TabPane>
                <TabPane tabId='1'>
                  {/*{FakeMockNoOrderData.map((num: TEST2_DATA, idx: number) => {*/}
                  {/*  return (*/}
                  {/*    <>*/}
                  {/*      <TabInfoBox key={idx}>*/}
                  {/*        <TabSubBox>*/}
                  {/*          <div style={num.title === '판매' ? { color: '#3C4BCD' } : { color: '#CE4B4B' }}>*/}
                  {/*            {num.title} <br /><span>{num.date}</span>*/}
                  {/*          </div>*/}
                  {/*        </TabSubBox>*/}
                  {/*        <TabSubButtomBox>*/}
                  {/*          <TabLeftBox>*/}
                  {/*            <div>가격</div>*/}
                  {/*            <div>수량</div>*/}
                  {/*            <div>금액</div>*/}
                  {/*          </TabLeftBox>*/}
                  {/*          <TabRightBox>*/}
                  {/*            <div>{num.price.toLocaleString()}원</div>*/}
                  {/*            <div>{num.count}개</div>*/}
                  {/*            <div>{num.val.toLocaleString()}원</div>*/}
                  {/*          </TabRightBox>*/}
                  {/*        </TabSubButtomBox>*/}
                  {/*        <ButtonBox>*/}
                  {/*          <BasicButton*/}
                  {/*            theme={BasicButtonTheme.BlackRounded}*/}
                  {/*            onClick={() => handleContentsAdd()}*/}
                  {/*            style={{ width: '95%', height: '33px', padding: 0, fontSize: 12, borderRadius: 8 }}*/}
                  {/*          >*/}
                  {/*            수정하기*/}
                  {/*          </BasicButton>*/}
                  {/*          <BasicButton*/}
                  {/*            theme={BasicButtonTheme.BlackInline}*/}
                  {/*            onClick={() => handleContentsAdd()}*/}
                  {/*            style={{*/}
                  {/*              width: '95%',*/}
                  {/*              height: '33px',*/}
                  {/*              padding: 0,*/}
                  {/*              fontSize: 12,*/}
                  {/*              borderRadius: 8,*/}
                  {/*              marginTop: 10,*/}
                  {/*            }}*/}
                  {/*          >*/}
                  {/*            취소하기*/}
                  {/*          </BasicButton>*/}
                  {/*        </ButtonBox>*/}
                  {/*      </TabInfoBox>*/}
                  {/*      <hr />*/}
                  {/*    </>*/}
                  {/*  );*/}
                  {/*})}*/}

                  {/*미체결 내역이 없는 경우*/}
                  <TabContents>
                    <Image src={iconWarning.src} alt={'iconWarning'} width={24} height={24} />
                    <div>미체결 내역이<br /> 없습니다.</div>
                  </TabContents>
                </TabPane>
              </TabContent>
            </TabWrap>
          </RightBox>
        </ChartWraps>
      </div>



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
    </Container>
  );
};

export default BuildingOrder;
