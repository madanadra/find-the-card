const Guide = ({setMenu, click}) => {
    return (
      <div className="guides">
        <h2 className="back" onClick={() => {setMenu('menu'); click.play()}}>Back</h2>
        <div className="text">
          <h1>Find a green card!</h1>
          <h2>Lv 1: 2 Cards & 100 Scores</h2>
          <h2>Lv 2: 3 Cards & 200 Scores</h2>
          <h2>Lv 3: 4 Cards & 300 Scores</h2>
          <h2>Lv 4: 5 Cards & 400 Scores</h2>
          <h2>Lv 5: 6 Cards & 500 Scores</h2>
        </div>
      </div>
    );
}

export default Guide;