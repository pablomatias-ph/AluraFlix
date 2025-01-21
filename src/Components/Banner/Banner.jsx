import {
  BannerBackground,
  BannerContainer,
  BannerContent,
  BannerDescription,
  BannerImg,
  BannerTitle,
  BannerSubtitulo,
} from "./Banner.styled";

const Banner = ({ video }) => {
  return (
    <BannerContainer>
      <BannerBackground src={video.img} alt={video.titulo} />

      <BannerContent>
        <div>
          <BannerTitle category={video.categoria}>
            {video.categoria}
          </BannerTitle>
          <BannerSubtitulo titulo={video.titulo}>
            {video.titulo}
          </BannerSubtitulo>

          <BannerDescription>{video.descripcion}</BannerDescription>
        </div>
        <BannerImg src={video.img} alt={video.titulo} />
      </BannerContent>
    </BannerContainer>
  );
};

export default Banner;
