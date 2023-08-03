const Menu = ({newGames, setMenu, cards, click}) => {
    return (
      <div className="menu">
        <h1 onClick={() => {newGames(); click.play()}}>Play</h1>
        <h1 onClick={() => {setMenu('level'); click.play()}}>Level {cards.length-1}</h1>
        <h1 onClick={() => {setMenu('highscore'); click.play()}}>High Scores</h1>
        <h1 onClick={() => {setMenu('guide'); click.play()}}>Guides</h1>
      </div>
    );
}

export default Menu;