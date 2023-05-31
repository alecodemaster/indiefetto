import {
  Typography,
  Avatar,
  Card,
  CardContent,
  CardActions,
  IconButton,
} from "@mui/material";
import {
  // Share as ShareIcon,
  Favorite as FavoriteIcon,
} from "@mui/icons-material";
import { useState } from "react";
import avatar from "../img/lightsf.png";
import ShareButtons from "./share";

const Mui = () => {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleFavoriteClick = () => {
    setIsFavorite(!isFavorite);
  };

  // const handleShareClick = async () => {
  //   try {
  //     if (navigator.share) {
  //       await navigator.share({
  //         title: "Titolo condivisione",
  //         text: "Testo da condividere",
  //         url: "https://www.example.com", // URL da condividere
  //       });
  //       console.log("Contenuto condiviso con successo!");
  //     } else {
  //       console.log(
  //         "La condivisione non è supportata sul tuo dispositivo o browser."
  //       );
  //     }
  //   } catch (error) {
  //     console.error(
  //       "Si è verificato un errore durante la condivisione:",
  //       error
  //     );
  //   }
  // };

  return (
    <div className="flex justify-center p-5 mb-5">
      <Card sx={{ maxWidth: 400 }}>
        <div className="flex justify-center p-4">
          <Avatar
            className="border-4 border-pink-700 grayscale"
            src={avatar}
            alt="Alessia Gaudioso"
            sx={{ width: 120, height: 120 }}
          />
        </div>
        <CardContent>
          <Typography
            variant="h5"
            component="h1"
            sx={{ textAlign: "center", fontWeight: "bold" }}
          >
            Alessia Gaudioso
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ textAlign: "center", mt: 2 }}
          >
            postmaster@indiefetto.it
          </Typography>
        </CardContent>
        <CardActions sx={{ justifyContent: "center" }}>
          <IconButton
            aria-label="Favorite"
            onClick={handleFavoriteClick}
            color={isFavorite ? "error" : "inherit"}
          >
            <FavoriteIcon />
          </IconButton>
        </CardActions>
        <ShareButtons />
      </Card>
    </div>
  );
};

export default Mui;
