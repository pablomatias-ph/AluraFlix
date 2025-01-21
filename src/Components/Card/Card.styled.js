import styled from "styled-components";

export const CardContainer = styled.div`
font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  position: relative;
  width: 18.75rem;
  background-color: #fff;
  overflow: hidden;
`;

export const CardImage = styled.img`
  width: 100%;
  height: auto;
`;

export const CardActions = styled.div`
  position: absolute;
  bottom: 10px;
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 1 rem;
  background: rgba(0, 0, 0, 0.7);
  gap: 1rem;
`;

export const IconButton = styled.button`
  background: none;
  border: none;
  color: #fff;
  cursor: pointer;
  font-size: 1rem;

  &:hover {
    color: #FFA500;
  }
`;
