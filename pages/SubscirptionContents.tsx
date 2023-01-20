import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 100vh;
  text-align: center;
  color: #4D4D4D;
  font-size: 16px;
  line-height: 1.4rem;
  padding: 13px 28px;
  margin-top: 50px;
  background: white;
`;

const Contexts = styled.div`
  margin-top: 30px;
  text-align: start;

  div {
    margin-top: 25px;
    font-weight: 400;
    font-size: 16px;
  }
`;


const SubscirptionContents = () => {
  return (
    <Container>
      <Contexts>
        <div>• Nut은 신탁회사에서 부동산관리처분신탁 계약을 통해 수탁한 부동산을 대상으로 발행하는 부동산관리처분신탁 수익증권(이하"수익증권")에 1:1로 상응하여 발행되는 디지털 자산 증서로서
          Finut 플랫폼에서만 상장되어 거래됩니다.
        </div>
        <div>• Nut의 거래방식은 다자간상대매매 방식으로 가격변동이 클 수 있습니다.투자자 일인당 1일 매매회전율은 100% 이하로 제한됩니다.
        </div>
        <div>• Nut의 거래수수율은 0.22%(부가가치세 포함)입니다.
        </div>
        <div>• Nut은 신탁부동산의 운용 및 처분에 따른 이익을 부동산관리처분신탁계약에서 정한 순서에 따라 지급받은 실적배당상품으로 『예금자보호법』에 따른 예금자 보호 대상 금융상품이 아니며, 기타 다른
          어떠한 관계법령에서도 Nut 투자에 대한 수익을 보장하자거나 보전하지 않습니다.
        </div>
        <div>• Nut 투자금액의 손실 내지 감소의 위험은 전적으로 투자자가 부담하며, 당사를 포함한 어떠한 당사자도 투자손실에 대하여 책임을 지지 아니합니다. 투자판단시 증권신고서와 투자설명서를 반드시
          참고하시기 바랍니다. 증권 투자설명서상에 기재된 투자전략에 따른 투자목적 또는 성과목표가 실현된다는 보장은 없습니다.
        </div>
      </Contexts>
    </Container>
  );
};

export default SubscirptionContents;
