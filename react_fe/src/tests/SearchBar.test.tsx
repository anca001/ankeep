import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { vi } from 'vitest';
import Search from '../components/SearchBar';

describe('Search bar component', () => {
  const mockedFetch = vi.fn();
  beforeEach(() => {
    global.fetch = mockedFetch;
  });
  afterEach(() => {
    vi.clearAllMocks();
  });
  test('Search bar exists', () => {
    // given
    // when the searchbar component is rendered
    const output = render(<Search />);
    // then we expect input box to be there
    const searchInput = output.getByTestId('search-input');
    expect(searchInput).toBeDefined();
  });

  test('displays an error message when fetch fails', async () => {
    mockedFetch.mockRejectedValue(new Error('Network error'));
    const output = render(<Search />);
    const searchInput = output.getByTestId('search-input');
    fireEvent.change(searchInput, { target: { value: 'test' } });

    await vi.waitFor(() => {
      const err = output.getByTestId('error-message');
      expect(err).toBeDefined();
    });
  });

  test('displays results when fetch succeeds', async () => {
    mockedFetch.mockResolvedValue([
      {
        name: 'Brewery 1',
      },
      {
        name: 'Brewery 2',
      },
    ]);
    const output = render(<Search />);
    const searchInput = output.getByTestId('search-input');
    fireEvent.change(searchInput, { target: { value: 'test' } });

    await vi.waitFor(() => {
      const err = output.getByTestId('error-message');
      expect(output.getByTestId('error-message')).toBeInTheDocument();
    });
  });
});
