import styled from 'styled-components';

// 토글 관련 스타일
export const SwitchWrap = styled.div`
  .react-toggle {
    .react-toggle-track {
      width: 55px;
      height: 30px;
      background-color: #ADADAD !important;

      ~ .react-toggle-thumb {
        width: 20px;
        height: 20px;
        left: 3px;
        top: 5px;
        border: 0 !important;
        box-shadow: none !important;
      }
    }

    &.react-toggle--checked {
      .react-toggle-track {
        background-color: #FFB601 !important;

        ~ .react-toggle-thumb {
          left: 32px;
        }
      }
    }
  }
`;
