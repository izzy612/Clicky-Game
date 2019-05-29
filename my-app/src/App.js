import React, { Component} from 'react';
import Card from "./components/Card";
import Wrapper from "./components/Wrapper";
import Score from "./components/Score";
import RickMorty from "./rick&morty.json";
import './App.css';

class App extends Component {

  state = {
    RickMorty,
    clickedRickMortyIds: [],
    score: 0,
    goal: 8,
    status: ""
  };

  shuffleScoreCard = id => {
    let clickedRickMortyIds = this.state.clickedRickMortyIds;

    if (clickedRickMortyIds.include(id)) {
      this.setState({ clickedRickMortyIds: [], score: 0, status: "And that's the waaaaaayyyyy the news goes! Game Over" });
      return;
    } else {
      clickedRickMortyIds.push(id)

      if (clickedRickMortyIds.length === 5) {
        this.setState({ score: 5, status: "I like what you got. Good job! You Won", clickedRickMortyIds: [] });
        return;
      }
      this.setState({ RickMorty, clickedRickMortyIds, score: clickedRickMortyIds.legth, status: " " });

      for (let i = RickMorty.legth - 1; i > 0; i--) {
        let j = Math.floor(Math.radom() * (i + 1));
        [RickMorty[i], RickMorty[j]] = [RickMorty[j], RickMorty[i]];
      }

    }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">
            Rick and Morty Memory Game
          </h1>
          <p className="App-intro">
            Don't click the same image twice!
          </p>
        </header>
        <Score total={this.state.score}
          goal={5}
          status={this.state.status}
        />
        <Wrapper>
          {this.state.RickMorty.map(RickMorty => (
            <Card
            shuffleScoreCard = { this.shuffleScoreCard }
              id={RickMorty.id}
              key={RickMorty.id}
              image={RickMorty.image}
            />
          ))}
        </Wrapper>
      </div>
    )
  }
}

export default App;
