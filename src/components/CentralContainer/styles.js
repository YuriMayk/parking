import styled from "styled-components";

export const ContainerError = styled.div`
  transition: 4000ms;
  width: 312px;
  height: 32px;
  background-color: #ff174526;
  display: flex;
  justify-content: flex-start;
  padding-left: 12px;
  align-items: center;
  margin: 0 auto 16px auto;
  border-radius: 4px;

  ${(props)=> props.error ? "": `display:none`}
`;

export const ErrorImage = styled.img`
  height: 20px;
  width: 20px;
`;

export const ImageLoading = styled.img`
  margin: 10vh auto 0 auto;
  width: 25%;
  transition: 3000ms;
  display: ${(props) => (props.visible ? "initial" : "none")};
  ${(props) => props.finishRegister && `display:none`};
  ${(props) =>
    props.finishRegister
      ? `animation:none`
      : ` animation:rotation 2s infinite linear;
      
      @keyframes rotation {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(359deg);
    }
  }`};
`;
export const ImageFinish = styled.img`
  margin: 10vh auto 0 auto;
  width: 25%;
  transition: 1000ms;
  display: ${(props) => (props.finishRegister ? "initial" : "none")};
  ${(props) =>
    props.finishRegister
      ? `animation:none`
      : ` animation:rotation 2s infinite linear;
      
      @keyframes rotation {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(359deg);
    }
  }`};
`;

export const Container = styled.div`
  width: 344px;
  height: 279px;
  background: #ffffff;
  border-radius: 0px 0px 4px 4px;
  margin: 0 auto 23vh auto;
  display: flex;
  flex-direction: column;
  transition: 300ms;

  p {
    font-weight: 400, Regular;
    font-style: normal;
    font-size: 16px;
    color: #9b9b9b;
    display: flex;
    margin: 39px 0 7px 16px;
  }
`;

export const Paragraph = styled.p`
  ${(props) =>
    props.visible &&
    `
  font-style: Regular;
  font-size: 16px;
  line-height: 100%;
  justify-content: center;
  color: #4A4A4A;`}
`;
export const P = styled.span`
  word-wrap: break-word;
  margin-left: 7px;
  font-size: 12px;
  color: #ff1745ad;
`;
