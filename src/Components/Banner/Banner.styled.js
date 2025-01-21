import styled from "styled-components";

export const BannerContainer = styled.div`
  position: relative;
  width: 100%;
  height: 600px;
`;

export const BannerBackground = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(0.15);
`;

export const BannerImg = styled.img`
  width: 800px;
`;

export const BannerContent = styled.div`
  width: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: space-around;
  color: #FFFFFF;
`;

export const BannerTitle = styled.h1`
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-size: 3rem;
  background-color: ${({ theme, category }) =>
    theme.colors.categoryColors[category]};
  padding-top: 200px;
`;

export const BannerSubtitulo = styled.h2`
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-size: 1.5rem;
  background-color: ${({ theme, category }) =>
    theme.colors.categoryColors[category]};
  display: inline-block;
  padding-top: 20px;
`;

export const BannerDescription = styled.p`
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-size: 1rem;
  font-weight: 100;
  padding-top: 10px;
`;
