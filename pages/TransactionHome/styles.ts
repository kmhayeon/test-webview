import styled from 'styled-components';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

export const Container = styled.div`
  width: 100%;
  position: relative;
  overflow: auto;
`;

export const NavSubInfo = styled.div`
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

  div:not(:first-child) {
    margin-left: 12px;
  }

  .percent-num {
    color: #ce4b4b;
  }
`;

export const TabContainer = styled.div`
  width: 100%;
  position: fixed;
  top: 0px;
  left: 0px;
  right: 0px;
`;

export const TabWrap = styled.div`
  width: 100%;
  margin-top: 116px;
`;

export const TabsBox = styled(Tabs)({
  boxShadow: '0px 13px 17px rgb(0 0 0 / 4%)',
  borderBottom: '1px solid rgb(0 0 0 / 4%)',
  zIndex: 200,
  '& .MuiTabs-indicator': {
    display: 'flex',
    backgroundColor: 'black',
    height: '3px',
  },
});

export const TabsItem = styled(Tab)({
  fontFamily: 'Pretendard',
  fontSize: '14px',
  color: '#CACACA',
  ':hover': {
    color: 'black',
  },
  '&.Mui-selected': {
    color: 'black !important',
    fontWeight: 600,
  },
});
