import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
} from '@material-ui/core';
import styled from 'styled-components';

interface Props {
  header: string;
  primary: string;
  secondary: string;
  description: string;
  buttonText: string;
  onClick?: () => void;
}

const StyledCard = styled(Card)`
  min-width: 200px;
`;

export function CategoryCard({
  header,
  primary,
  secondary,
  description,
  buttonText,
  onClick,
}: Props) {
  return (
    <StyledCard>
      <CardContent>
        <Typography color='textSecondary' gutterBottom>
          {header}
        </Typography>
        <Typography variant='h5' component='h2'>
          {primary}
        </Typography>
        <Typography color='textSecondary'>{secondary}</Typography>
        <Typography variant='body2' component='p'>
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size='small' onClick={onClick}>
          {buttonText}
        </Button>
      </CardActions>
    </StyledCard>
  );
}
