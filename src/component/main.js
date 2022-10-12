import backgroundAudio from "../asset/sound/bg.mp3"

const Main = ({score, cards, number, open, openCard, bg, setBg, setMenu, click}) => {
    return (
      <div className="main">
        <div className="score">
          <h1>Score: {score}</h1>
          <h2 className="back" onClick={() => {setMenu('menu'); bg.pause(); setBg(new Audio(backgroundAudio)); click.play()}}>Back</h2>
        </div>
        <div className="cardlist">
          {cards.map(card => 
            <div 
              key={card.id} 
              className={!open ? 'card hide' : card.id === number ? 'card true' : 'card'} 
              onClick={() => openCard(card.id)} 
            />
          )}
        </div>
      </div>
    );
}

export default Main;