import React from 'react';
import styled from 'styled-components';
import { useTable } from 'react-table';

interface TestProps {
  columns?: any,
  data?: any,
  getHeaderProps?: any,
  getColumnProps?: any,
  getRowProps?: any,
  getCellProps?: any,
}

const Header = styled.thead`
  width: 100%;
  
  th {
    width: 445px;
  }
`;

const TableMain = styled.table`
  background-color: white;
  width: 100%;
  overflow: auto;
  margin-top: 90px;
`;

const TableBody = styled.tbody`
    tr {
      :last-child {
        border-bottom: 1.2px solid #DEDEDE;
      }


      td {
        width: 480px;
        padding: 13px;
        height: 48px;
        text-align: center;
        font-weight: 500;
        font-size: 14px;
        line-height: 100%;
        color: #727272;

        :not(:first-child) {
          border-left: 1.2px solid #DEDEDE;
        }
        
        
        div{
          margin-top: 4px;
        }
      }
    }
`;


// Create a default prop getter
const defaultPropGetter = () => ({});

const Table: React.FC<TestProps> = ({
                                      columns,
                                      data,
                                      getHeaderProps = defaultPropGetter,
                                      getColumnProps = defaultPropGetter,
                                      getRowProps = defaultPropGetter,
                                      getCellProps = defaultPropGetter,
                                    }) => {


  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });


  return (
    <TableMain {...getTableProps}>
      {/*<Header>*/}
      {/*  {headerGroups.map((headerGroup,index) => (*/}
      {/*    // getHeaderGroupProps를 통해 header 배열을 호출*/}
      {/*    <tr {...headerGroup.getHeaderGroupProps()}>*/}
      {/*      {headerGroup.headers.map((column) => (*/}
      {/*        // getHeaderProps는 각 셀 순서에 맞게 header를 호출*/}
      {/*        <th {...column.getHeaderProps()}>*/}
      {/*          <div>*/}
      {/*          {column.render('Header')}*/}
      {/*          </div>*/}
      {/*        </th>*/}
      {/*      ))}*/}
      {/*    </tr>*/}
      {/*  ))}*/}
      {/*</Header>*/}
      <TableBody {...getTableBodyProps()}>
      {rows.map((row) => {
        prepareRow(row);
        return (
          // getRowProps는 각 row data를 호출
          <tr className={'line'} {...row.getRowProps()}>
            {row.cells.map((cell) => {
              // getCellProps는 각 cell data를 호출
              return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>;
            })}
          </tr>
        );
      })}
      </TableBody>
    </TableMain>
  );
};

export default Table;
