import styled from "styled-components";

export const Button = styled.button`
  transition: 300ms;
  color: ${(props) => (props.plateTyped ? "#FFFFFF" : "#9B9B9B")};
  background-color: ${(props) => (props.plateTyped ? "#28DD91" : "#dadada")};
  width: 312px;
  height: 67px;
  border-radius: 4px;
  margin: 0 auto;
  font-size: 15px; //fontstyle Semibold
  cursor: pointer;
  display: ${(props) =>
    props.visible
      ? "none"
      : "flex; justify-content: center; align-items: center;"};
`;
