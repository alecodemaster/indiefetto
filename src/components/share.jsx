import Button from '@mui/material/Button';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';



function ShareButtons(props) {
  const shareUrl = 'https://www.indiefetto.it';
  const title = 'Alessia Gaudioso, scrittura urbana e sviluppo web';
  const imageUrl = '../nuovologogrande.png';


  return ( 
    <div className='space-y-2 p-5'>
      <Button
        variant="outlined"
        color="primary"
        startIcon={<LinkedInIcon />}
        href={`https://www.linkedin.com/shareArticle?url=${shareUrl}&title=${title}`}
        target="_blank"
        rel="noopener"
      >
        Condividi su LinkedIn
      </Button>

      <Button
        variant="contained"
        color="primary"
        startIcon={<FacebookIcon />}
        href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}&t=${title}`}
        target="_blank"
        rel="noopener"
      >
        Condividi su Facebook
      </Button>
    </div>
  );
}

export default ShareButtons;