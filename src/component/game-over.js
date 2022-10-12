import backgroundAudio from "../asset/sound/bg.mp3"

const GameOver = ({newGames, setOver, setMenu, setBg, score, click}) => {
    return (
        <div className="gameover">
          <div className="box">
            <h1 className="over">Game Over</h1>
            <h1 className="scores">Score : {score}</h1>
            <div className="action">
              <h1 className="backtomenu" onClick={() => {setMenu('menu'); setOver(false); setBg(new Audio(backgroundAudio)); click.play()}}>Menu</h1>
              <h1 className="again" onClick={() => {newGames(); setOver(false); click.play()}}>Play again</h1>
            </div>
          </div>
        </div>
    );
}

export default GameOver;