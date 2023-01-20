import React, { useState, useEffect, useMemo } from 'react';
import styled from 'styled-components';
import Table from '@components/common/Table';
import iconUp from '@static/images/icon_up_red.png';
import iconDown from '@static/images/icon_down.png';
import Image from 'next/image';
import { FakeMockData } from '../../makeMock';

interface Test {
  date?: string,
  average_amount?: string,
  fluctuation_width?: string,
  volume_transaction?: string
  up_down?: number
}


const Container = styled.div`
  //width: 100%;
  //height: 75vh;
  //position: relative;
  //overflow: auto;
`;

const columns = [
  {
    accessor: 'date',
    Header: '일자',
  },
  {
    accessor: 'average_amount',
    Header: '평균거래가',
  },
  {
    accessor: 'fluctuation_width',
    Header: '등락폭',
  },
  {
    accessor: 'volume_transaction',
    Header: '거래량',
  },
];

const NoChangeValue = ({ value }) => {
  return (
    <div style={{ color: '#000000' }}>
      {value}
    </div>
  );
};

const UpValue = ({ value }) => {
  return (
    <div style={{ color: '#CE4B4B' }}>
      {value}
    </div>
  );
};

const DownValue = ({ value }) => {
  return (
    <div style={{ color: '#3C4BCD' }}>
      {value}
    </div>
  );
};


const ByDay = () => {
  // 실시간 API 연동
  const [info, setInfo] = useState<Test[] | null>([]);
  const column = React.useMemo(() => columns, []);

  const dataList = useMemo(() =>
      FakeMockData.map((faker) => ({
        date: faker.date,
        average_amount:
          faker.up_down === 0 ?
            <NoChangeValue value={`${faker.average_amount}`} /> :
            faker.up_down === 1 ?
              <UpValue value={`${faker.average_amount}`} /> :
              <DownValue value={`${faker.average_amount}`} />,
        fluctuation_width:
          faker.up_down === 0 ?
            <NoChangeValue value={`${faker.fluctuation_width}`} /> :
            faker.up_down === 1 ?
              <div style={{ display: 'inline-flex', textAlign: 'center' }}>
                <UpValue value={`${faker.fluctuation_width}`} />
                <Image style={{ margin: '6px 0px 0px 5px' }} src={iconUp.src} alt={'icon_up'} width={10} height={10} />
              </div>
              :
              <div style={{ display: 'inline-flex', textAlign: 'center' }}>
                <DownValue value={`${faker.fluctuation_width}`} />
                <Image style={{ margin: '6px 0px 0px 5px' }} src={iconDown.src} alt={'icon_down'} width={10}
                       height={10} />
              </div>,
        volume_transaction: faker.volume_transaction,
        up_down: faker.up_down,
      })),
    [],
  );


  useEffect(() => {
    console.log('reload');
    setInfo(FakeMockData);
  }, []);


  // 페이지 접근할때마다 리스트 갱신
  // useEffect(() => {
  //   getList()
  //   }, []);

  // const getList = async () => {
  //   try {
  //     const result = await axios.get('주소');
  //     if (result.ok === 0) {
  //       console.log('불러오기 성공');
  //       setInfo(result)
  //     } else {
  //       console.log('불러오기 실패');
  //     }
  //   } catch (err) {
  //     console.log(err);
  //   } finally {
  //     console.log('finally');
  //   }
  // };

  return (
    <Container>
      <Table
        columns={column}
        data={dataList}
        getHeaderProps={(column) => ({
          onClick: () => alert('Header!'),
        })}
        getColumnProps={(column) => ({
          onClick: () => alert('Column!'),
        })}
        getRowProps={(row) => ({})}
        getCellProps={(cellInfo) => ({})}
      />
    </Container>
  );
};

export default ByDay;
