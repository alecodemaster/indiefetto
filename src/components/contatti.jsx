import { createTheme, ThemeProvider } from "@mui/material/styles";
import { TextField, Button } from "@mui/material";
import logo from "../img/nuovologogrande.png";

const theme = createTheme({
  palette: {
    primary: {
      main: "#ec4899", // Imposta pink-400 come colore primario
    },
  },
});

function ContactForm() {
  return (
    <div className="md:px-40 p-10 select-none">
      <div className="flex justify-center">
        <img src={logo} alt="Indiefetto" />
      </div>
      <h1 className="font-semibold text-black mb-10">
        Contattami, ti risponderò al più presto!
      </h1>
      <ThemeProvider theme={theme}>
        <form
          className="md:p-20 p-5 bg-white opacity-90 shadow-inner shadow-zinc-500"
          onSubmit={handleSubmit}
          action="https://formspree.io/f/mjvdjpbr"
          method="POST"
        >
          <TextField
            label="Nome"
            name="name"
            margin="normal"
            fullWidth
            required
          />
          <TextField
            label="Email"
            name="_replyto"
            type="email"
            margin="normal"
            fullWidth
            required
          />
          <TextField
            label="Messaggio"
            name="message"
            multiline
            margin="normal"
            fullWidth
            required
          />
          <Button variant="contained" color="primary" type="submit">
            Invia
          </Button>
        </form>
      </ThemeProvider>
    </div>
  );
}

function handleSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const data = new FormData(form);
  const xhr = new XMLHttpRequest();
  xhr.open(form.method, form.action);
  xhr.setRequestHeader("Accept", "application/json");
  xhr.onreadystatechange = () => {
    if (xhr.readyState !== XMLHttpRequest.DONE) return;
    if (xhr.status === 200) {
      form.reset();
      alert(
        "Il tuo messaggio è stato inviato con successo. Grazie per avermi contattata. A presto!"
      );
    } else {
      alert(
        "Si è verificato un errore durante l'invio del messaggio. Perfavore riprova più tardi."
      );
    }
  };
  xhr.send(data);
}

export default ContactForm;
