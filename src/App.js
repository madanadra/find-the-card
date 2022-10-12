import './style/all.css';
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import Menu from "./component/menu";
import Main from "./component/main";
import GameOver from "./component/game-over";
import Level from "./component/level";
import HighScore from "./component/high-score";
import Guide from "./component/guide";
import backgroundAudio from "./asset/sound/bg.mp3";
import musicAudio from "./asset/sound/music.wav";
import clickAudio from "./asset/sound/click.wav";
import winAudio from "./asset/sound/win.wav";
import gameOverAudio from "./asset/sound/gameover.wav";

function App() {
  const [cookies, setCookie] = useCookies(['highScore'])
  const [menu, setMenu] = useState('menu')
  const [number, setNumber] = useState()
  const [open, setOpen] = useState(false)
  const lv = 
  [
    {lv1: [{id: '0'}, {id: '1'}]}, 
    {lv2: [{id: '0'}, {id: '1'}, {id: '2'}]}, 
    {lv3: [{id: '0'}, {id: '1'}, {id: '2'}, {id: '3'}]},
    {lv4: [{id: '0'}, {id: '1'}, {id: '2'}, {id: '3'}, {id: '4'}]},
    {lv5: [{id: '0'}, {id: '1'}, {id: '2'}, {id: '3'}, {id: '4'}, {id: '5'}]}
  ]
  const [cards, setCards] = useState(lv[0].lv1)
  const [highScore, setHighScore] = useState([])
  const [over, setOver] = useState(false)
  const [score, setScore] = useState(0)
  const [bg, setBg] = useState()
  const click = new Audio(clickAudio)
  const gameover = new Audio(gameOverAudio)
  const win = new Audio(winAudio)

  useEffect(() => {
    setBg(new Audio(backgroundAudio));
    if (cookies.highScore) {
      setHighScore(cookies.highScore);
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (bg) {
      bg.loop = true;
      bg.play();
    }
  }, [bg]);

  useEffect(() => {
    setCookie('highScore', JSON.stringify(highScore), { path: '/', expires: new Date(Date.now()+2592000) });
  }, [highScore]); // eslint-disable-line react-hooks/exhaustive-deps

  const playGames = () => {
    setNumber(Math.floor(Math.random() * cards.length).toString());
    setOpen(false);
  }

  const newGames = () => {
    setMenu('play');
    setScore(0);
    playGames();
    bg.pause();
    setBg(new Audio(musicAudio));
  }

  const openCard = (prop) => {
    if (!open) {
      setOpen(true)
      setTimeout(()=>{
        if (prop === number) {
          playGames();
          win.play();
          setScore(score+(100*(cards.length-1)));
        } else {
          setOver(true);
          bg.pause();
          gameover.play();
          setHighScore([...highScore, {score: score, date: Date.now()}].sort((a,b) => b.score-a.score).slice(0,5));
        }
        return () => {};
      }, 1000)
    }
  }

  const GameMenu = () => {
    if (menu === 'menu') {
      return (
        <Menu newGames={newGames} setMenu={setMenu} cards={cards} click={click} />
      );
    } else if (menu === 'play') {
      return (
        <Main score={score} number={number} cards={cards} open={open} openCard={openCard} bg={bg} setBg={setBg} setMenu={setMenu} click={click} />
      );
    } else if (menu === 'level') {
      return (
        <Level cards={cards} setCards={setCards} setMenu={setMenu} lv={lv} click={click} />
      );
    } else if (menu === 'highscore') {
      return (
        <HighScore highScore={highScore} setMenu={setMenu} click={click} />
      );
    } else if (menu === 'guide') {
      return (
        <Guide setMenu={setMenu} click={click} />
      );
    }
  }

  return (
    <div className="container">
      <GameMenu />
      {over && <GameOver newGames={newGames} setMenu={setMenu} setOver={setOver} score={score} setBg={setBg} click={click} />}
    </div>
  );
}

export default App;
