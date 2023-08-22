import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Link } from 'react-router-dom';

interface Props {
  name: string;
  creator: string;
}

const PlaylistCard = ({ name, creator }: Props) => {
  return (
    <Link to={`/playlists/${name}`}>
      <Card sx={{ minWidth: 275 }}>
        <CardActionArea>
          <CardContent>
            <Typography variant="h5" component="div">{name}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              {creator}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  )
}

export default PlaylistCard;