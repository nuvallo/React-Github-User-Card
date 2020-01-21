import React from "react";
import NavBar from "./components/Navigation";
import UserCard from "./components/UserCard";
import axios from "axios";

class App extends React.Component {
  state = {
    user: [],
    followers = []
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
      .get("https://api.github.com/users/bkoehler2016/followers")
      .then(profile => {
        this.setState({ followers: profile.data });
        console.log(profile.data);
      })
      .catch(err => console.log(err));
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
        </div>
      </div>
    );
  }
}

export default App;
