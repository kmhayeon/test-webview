import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import iconBack from '@static/images/icon_back.png';


interface IBackNavBasicProps {
  title?: string;
  onClick?: () => void;
  style?: object;
}

const Container = styled.div`
  width: 100%;
  position: fixed;
  top: 0px;
  left: 0px;
  right: 0px;
  z-index: 100;
`;

const NavWrap = styled.div`
  height: 68px;
  margin: 0px;
  padding: 28px 22px;
  text-align: center;
  background-color: white;

  span {
    font-weight: 500;
    font-size: 20px;
    padding-right: 18px;
  }

  .icon-back {
    float: left;
  }
`;


const BackNavBasic: React.FC<IBackNavBasicProps> = props => {
  const { title, onClick, style } = props;

  return (
    <Container style={style}>
      <NavWrap>
        <Image className='icon-back'
               src={iconBack.src}
               alt={'iconBack'}
               width={24} height={24} onClick={onClick} />
        <span>{title}</span>
      </NavWrap>
    </Container>
  );
};

export default BackNavBasic;
