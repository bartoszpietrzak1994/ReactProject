import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Movies from './pages/Movies';
import TVSeries from './pages/TVSeries';
import { Navigation } from './common/components/Navigation/Navigation';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Navigation />
      <BrowserRouter>
        <Routes>
          <Route path="/movies" element={<Movies />}/>
          <Route path="/tvSeries" element={<TVSeries />}/>
          <Route path="/" element={<Navigate to="/movies"></Navigate>} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
