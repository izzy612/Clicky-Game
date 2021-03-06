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
    goal: 10,
    status: ""
  };

  shuffleScoreCard = id => {
    let clickedRickMortyIds = this.state.clickedRickMortyIds;

    if (clickedRickMortyIds.includes(id)) {
      this.setState({ clickedRickMortyIds: [], score: 0, status: "And that's the waaaaaayyyyy the news goes! Game Over" });

      console.log("GAMEOVER");
      return;
    } else {
      clickedRickMortyIds.push(id)

      if (clickedRickMortyIds.length === 10) {
        this.setState({ score: 10, status: "I like what you got. Good job! You Won", clickedRickMortyIds: [] });
        console.log("YOU-WON")
        return;
      }
      this.setState({ RickMorty, clickedRickMortyIds, score: clickedRickMortyIds.length, status: " " });

      for (let i = RickMorty.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [RickMorty[i], RickMorty[j]] = [RickMorty[j], RickMorty[i]];
      }

    }
  }
  render() {
    return (
      <div className="App">
        <header className="jumbotron-display-4">
          <h1 className="text-center text-success">
            Rick and Morty Memory Game
          </h1>
          <hr className="bg-success"/>
          <p className="text-center text-success"><b>
          The reason anyone would, which they can't, is because they could, which they can't - Rick Sanchez 
          </b>
          </p>
          <p className="text-center text-success">
           Can you win the game? Don't click on the same gif twice!
          </p>
        </header>
        <div className="body">
        <Score total={this.state.score}
          goal={10}
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
        </div>
    )
  }
}

export default App;
