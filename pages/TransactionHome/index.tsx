import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/dist/client/router';
import iconUp from '@static/images/icon_up_red.png';
import Box from '@mui/material/Box';
import BackNavBasic from '@components/common/BackNavBasic';
import BuildingOrder from '@components/BuildingOrder';
import MarketPrice from '@components/MarketPrice';
import TransactionInfo from '@components/TransactionInfo';
import {
  Container,
  NavSubInfo,
  TabContainer,
  TabWrap,
  TabsBox,
  TabsItem,
} from './styles';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 0 }}>
          <div>{children}</div>
        </Box>
      )}
    </div>
  );
}

const TransactionHome = () => {
  const router = useRouter();
  const [value, setValue] = React.useState(0);

  const goToMain = () => {
    router.push('/Main');
  };

  const handleChange = (event: any, newValue: any) => {
    setValue(newValue);
  };

  return (
    <Container>
      <BackNavBasic title={'해운대 엘시티'} onClick={() => goToMain()} />
      <NavSubInfo>
        <div>50,000원</div>
        <div className="percent-num">+18.32%</div>
        <div className="percent-num">
          1.9%
          <Image
            className="icon_up"
            src={iconUp.src}
            alt={'iconUp'}
            width={10}
            height={10}
          />
        </div>
      </NavSubInfo>
      <TabContainer>
        <TabWrap>
          <TabsBox
            value={value}
            onChange={handleChange}
            aria-label="Main Tabs"
            variant="fullWidth"
          >
            <TabsItem disableRipple label="주문" />
            <TabsItem disableRipple label="시세" />
            <TabsItem disableRipple label="정보" />
          </TabsBox>
        </TabWrap>
        <TabPanel value={value} index={0}>
          <BuildingOrder />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <MarketPrice />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <TransactionInfo />
        </TabPanel>
      </TabContainer>
    </Container>
  );
};

export default TransactionHome;
