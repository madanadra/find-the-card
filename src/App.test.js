import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import App from './App';

describe('App component', () => {
  afterEach(cleanup);
  test('first', () => {
    const { asFragment } = render(<App />)
    expect(asFragment(<App />)).toMatchSnapshot()
  });

  test('menu', () => {
    render(<App />)
    const playElement = screen.getByText('Play');
    const levelElement = screen.getByText('Level 1');
    const highscoreElement = screen.getByText('High Scores');
    const guideElement = screen.getByText('Guides');
    expect(playElement).toBeInTheDocument();
    expect(levelElement).toBeInTheDocument();
    expect(highscoreElement).toBeInTheDocument();
    expect(guideElement).toBeInTheDocument();
  });

  test('play', () => {
    render(<App />)
    fireEvent.click(screen.getByText('Play'));
    expect(screen.getByText('Back')).toBeInTheDocument();
    expect(screen.getByText('Score: 0')).toBeInTheDocument();
  });

  test('level', () => {
    render(<App />)
    fireEvent.click(screen.getByText('Level 1'));
    expect(screen.getByText('Back')).toBeInTheDocument();
    expect(screen.getByText('Level 1')).toBeInTheDocument();
    expect(screen.getByText('Level 2')).toBeInTheDocument();
    expect(screen.getByText('Level 3')).toBeInTheDocument();
    expect(screen.getByText('Level 4')).toBeInTheDocument();
    expect(screen.getByText('Level 5')).toBeInTheDocument();
  });

  test('highScore', () => {
    render(<App />)
    fireEvent.click(screen.getByText('High Scores'));
    expect(screen.getByText('Back')).toBeInTheDocument();
    expect(screen.getByText('#')).toBeInTheDocument();
    expect(screen.getByText('Score')).toBeInTheDocument();
    expect(screen.getByText('Date')).toBeInTheDocument();
  });

  test('guide', () => {
    render(<App />)
    fireEvent.click(screen.getByText('Guides'));
    expect(screen.getByText('Back')).toBeInTheDocument();
    expect(screen.getByText('Find a green card!')).toBeInTheDocument();
    expect(screen.getByText('Lv 1: 2 Cards & 100 Scores')).toBeInTheDocument();
    expect(screen.getByText('Lv 2: 3 Cards & 200 Scores')).toBeInTheDocument();
    expect(screen.getByText('Lv 3: 4 Cards & 300 Scores')).toBeInTheDocument();
    expect(screen.getByText('Lv 4: 5 Cards & 400 Scores')).toBeInTheDocument();
    expect(screen.getByText('Lv 5: 6 Cards & 500 Scores')).toBeInTheDocument();
  });
});
