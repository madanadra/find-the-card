import moment from "moment";

const HighScore = ({highScore, setMenu, click}) => {
    return (
      <div className="highscores">
        <h2 className="back" onClick={() => {setMenu('menu'); click.play()}}>Back</h2>
        <table>
          <thead>
            <tr>
              <td>#</td>
              <td>Score</td>
              <td>Date</td>
            </tr>
          </thead>
          <tbody>
            {highScore.length === 0 ?
              <tr>
                <td colSpan='3'>No score yet</td>
              </tr>
            :
              highScore.map((hs, index) => 
                <tr key={hs.date}>
                  <td>{index+1}</td>
                  <td>{hs.score}</td>
                  <td>{moment(hs.date).fromNow()}</td>
                </tr>
              )
            }
          </tbody>
        </table>
      </div>
    );
}

export default HighScore;