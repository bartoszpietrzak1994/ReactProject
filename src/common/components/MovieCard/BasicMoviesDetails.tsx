import styled from 'styled-components';
import { GetMoviesResponse } from '../../../api/model/getMoviesResponse';

const CardWrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
`;

const Card = styled.section`
  border: 1px solid;
  border-radius: 8px;
  padding: 24px;
`;

const CardHeader = styled.header`
  display: flex;
  justify-content: space-between;
`;

export const BasicMoviesDetails = ({ movies }: GetMoviesResponse) => {

  const cards = movies.map(movie => {
    return (
      <Card key={movie.ref} data-testid={'basicMovieDetails-' + movie.ref}>
        <CardHeader>Title: {movie.title}</CardHeader>
        <p>Released at: {movie.releasedAt}</p>
        <p>Directed by: {movie.directedBy}</p>
        <p>IMDb score: {movie.imdbScore}</p>
      </Card>
    );
  });

  return <CardWrapper>{cards}</CardWrapper>;
};