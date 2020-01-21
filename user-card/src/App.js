import React from "react";
import NavBar from "./components/Navigation";
import UserCard from "./components/UserCard";
import FollowersCard from "./components/FollowersCard";
import axios from "axios";
import "./App.css";

class App extends React.Component {
  state = {
    user: [],
    followers: []
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  componentDidMount() {
    axios
      .get(`https://api.github.com/users/nuvallo`)
      .then(profile => {
        this.setState({
          user: [profile.data]
        });
        console.log(profile.data);
      })
      .catch(error => console.log(error));
    axios
      .get("https://api.github.com/users/nuvallo/followers")
      .then(profile => {
        this.setState({ followers: profile.data });
        console.log(profile.data);
      })
      .catch(error => console.log(error));
  }

  render() {
    return (
      <div>
        <NavBar />
        <div className="App">
          <h1>GitHub UserCards</h1>

          {this.state.user.map(profile => (
            <UserCard
              key={profile.id}
              name={profile.name}
              login={profile.login}
              bio={profile.bio}
              img={profile.avatar_url}
              url={profile.html_url}
              location={profile.location}
            />
          ))}
          <div className="followers">
            {this.state.followers.map(followerProfile => (
              <FollowersCard
                key={followerProfile.id}
                login={followerProfile.login}
                img={followerProfile.avatar_url}
                url={followerProfile.html_url}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
