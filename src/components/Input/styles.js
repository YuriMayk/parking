import styled from "styled-components";

export const Input = styled.input`
  background-color: #fffbe6;
  color:${props => props.plateTyped ? "#000000" : "#9b9b9b"};
  color: ${(props)=> (props.plateTyped && props.error)?"#FF0068":"#9B9B9B"};
  width: 312px;
  height: 67px;
  border-radius: 4px;
  margin: 0 auto 13px auto;
  font-size: 24px; //fontstyle Regular
  line-height: 100%;
  text-align: Center;
  cursor: pointer;
  border: 1px solid #CCCCCC;
  visibility: ${props => props.visible ? "hidden" : "visible"};

`;
