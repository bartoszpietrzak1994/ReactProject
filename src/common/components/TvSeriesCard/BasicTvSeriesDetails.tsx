import styled from 'styled-components';
import { GetTvSeriesResponse } from '../../../api/model/getTvSeriesResponse';

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

export const BasicTvSeriesDetails = ({ tvSeries }: GetTvSeriesResponse) => {

  const cards = tvSeries.map(item => {
    return (
      <Card key={item.ref} data-testid={'tvSeriesDetails-' + item.ref}>
        <CardHeader>Title: {item.title}</CardHeader>
        <p>Released at: {item.releasedAt}</p>
        <p>Directed by: {item.directedBy}</p>
        <p>IMDb score: {item.imdbScore}</p>
        <p>Number of episodes: {item.numberOfEpisodes}</p>
      </Card>
    );
  });

  return <CardWrapper>{cards}</CardWrapper>;
};