import React from 'react';
import { useNavigate } from "react-router-dom";
import Container from '../common/components/Container/Container';
import Loading from '../common/components/Loading/Loading';
import Sidebar from '../common/components/SideBar/SideBar';
import { Buttons, ButtonStyled } from '../common/components/Button/Button';
import { FIXTURES } from '../api/fixtures/tvseries';
import { BasicTvSeriesDetails } from '../common/components/TvSeriesCard/BasicTvSeriesDetails';

const TVSeries = () => {
  const navigate = useNavigate();

  const isLoading = false;
  const isError = false;
  const errorMessage = 'error';

  return (
    <Container>
      <Loading isLoading={isLoading} isError={isError} error={errorMessage} />
      <Sidebar>
        <Buttons>
          <ButtonStyled onClick={() => navigate('/movies')}>TV Series</ButtonStyled>
        </Buttons>
      </Sidebar>
      <BasicTvSeriesDetails tvSeries={FIXTURES} />
    </Container>
  );
}

export default TVSeries;