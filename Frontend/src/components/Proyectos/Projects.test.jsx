import { render, screen, waitFor } from '@testing-library/react';
import Projects from './Projects';
import { PROJECT_IDS } from './projectsCatalog';
import { ThemeProvider } from '../../context/ThemeContext';
import { LanguageProvider } from '../../context/LanguageContext';
import { vi } from 'vitest';

vi.mock('../../service/api', () => ({
  getRatingStars: vi.fn(() => Promise.resolve({
    averageRating: 0,
    totalRatings: 0,
    userRating: 0
  })),
  postStars: vi.fn(() => Promise.resolve({
    success: true,
    averageRating: 0,
    totalRatings: 0
  }))
}));

const { getRatingStars } = await import('../../service/api');

const renderProjects = () => {
  localStorage.clear();
  return render(
    <ThemeProvider>
      <LanguageProvider>
        <Projects />
      </LanguageProvider>
    </ThemeProvider>
  );
};

describe('Projects section', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('displays the Tenfe project card with preview and link', async () => {
    renderProjects();

    const heading = await screen.findByRole('heading', { name: /Tenfe - Sistema de Reservas de Trenes/i });
    expect(heading).toBeInTheDocument();

    const preview = await screen.findByAltText(/Tenfe - Sistema de Reservas de Trenes Preview/i);
    expect(preview).toBeInTheDocument();

    const demoLinks = await screen.findAllByRole('link', { name: /Ver Demo/i });
    const tenfeDemoLink = demoLinks.find((link) => link.getAttribute('href') === 'https://tenfe.onrender.com');
    expect(tenfeDemoLink).toBeDefined();
  });

  it('requests ratings for every highlighted project', async () => {
    renderProjects();

    await waitFor(() => {
      expect(getRatingStars).toHaveBeenCalledTimes(PROJECT_IDS.length);
    });

    PROJECT_IDS.forEach((id) => {
      expect(getRatingStars).toHaveBeenCalledWith(id);
    });
  });
});

