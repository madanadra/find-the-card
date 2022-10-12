const Level = ({cards, setCards, setMenu, lv, click}) => {
    return (
      <div className="level">
        <h2 className="back" onClick={() => {setMenu('menu'); click.play()}}>Back</h2>
        <div className="list">
          <h1 className={cards.length === 2 ? 'choice' : ''} onClick={() => {setMenu('menu'); setCards(lv[0].lv1); click.play()}}>Level 1</h1>
          <h1 className={cards.length === 3 ? 'choice' : ''} onClick={() => {setMenu('menu'); setCards(lv[1].lv2); click.play()}}>Level 2</h1>
          <h1 className={cards.length === 4 ? 'choice' : ''} onClick={() => {setMenu('menu'); setCards(lv[2].lv3); click.play()}}>Level 3</h1>
          <h1 className={cards.length === 5 ? 'choice' : ''} onClick={() => {setMenu('menu'); setCards(lv[3].lv4); click.play()}}>Level 4</h1>
          <h1 className={cards.length === 6 ? 'choice' : ''} onClick={() => {setMenu('menu'); setCards(lv[4].lv5); click.play()}}>Level 5</h1>
        </div>
      </div>
    );
}

export default Level;