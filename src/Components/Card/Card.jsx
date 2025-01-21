import { FaEdit, FaTrashAlt } from "react-icons/fa";
import {
  CardActions,
  CardContainer,
  CardImage,
  IconButton,
} from "./Card.styled";

import { useVideoContext } from "../../Contexts/VideoContext";

const Card = ({ video }) => {
  const { deleteVideo, updateVideo } = useVideoContext();

  const handleEdit = () => {
    const updatedVideo = { ...video, title: "Nuevo Título" };
    updateVideo(video.id, updatedVideo);
  };

  return (
    <CardContainer>
      <a href={video.url} target="_blank" rel="noopener noreferrer">
      <CardImage src={video.img} alt={video.title} />
      </a>
      <CardTitulo></CardTitulo>
      <CardActions>
        <IconButton onClick={() => deleteVideo(video.id)}>
          Borrar
          <FaTrashAlt />
        </IconButton>

        <IconButton onClick={handleEdit}>
          Editar
          <FaEdit />
        </IconButton>
      </CardActions>
    </CardContainer>
  );
};

export default Card;
