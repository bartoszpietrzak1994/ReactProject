import React from 'react';
import { useNavigate } from 'react-router-dom';
import Container from '../common/components/Container/Container';
import Loading from '../common/components/Loading/Loading';
import Sidebar from '../common/components/SideBar/SideBar';
import { FIXTURES } from '../api/fixtures/movies';
import { BasicMoviesDetails } from '../common/components/MovieCard/BasicMoviesDetails';
import { Buttons, ButtonStyled } from '../common/components/Button/Button';

const Movies = () => {
  const navigate = useNavigate();

  const isLoading = false;
  const isError = false;
  const errorMessage = 'error';

  return (
    <Container>
      <Loading isLoading={isLoading} isError={isError} error={errorMessage} />
      <Sidebar>
        <Buttons>
          <ButtonStyled onClick={() => navigate('/tvSeries')}>TV Series</ButtonStyled>
        </Buttons>
      </Sidebar>
      <BasicMoviesDetails movies={FIXTURES} />
    </Container>
  );
};

export default Movies;