import React, { Component } from "react";
import profileAvatar from "../profileAvatar.jpg";

export default class Profile extends Component {
  state = {
    person: {
      fullName: "John Doe",
      bio: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      imgSrc: profileAvatar,
      profession: "User interface designer and front-end developer",
    },
    count: null,
    time: 0,
  };

  componentDidMount() {
    console.log("run componentDidMount");
    this.setState({
      count: setInterval(() => {
        this.setState({ time: this.state.time + 1 });
      }, 1000),
    });
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
    clearInterval(this.setState.count);
  }

  render() {
    return (
      <>
        <div className="card-container">
          <span className="pro">PRO</span>
          <img className="round" src={this.state.person.imgSrc} alt="user" />
          <h3>{this.state.person.fullName}</h3>
          <h6>New York</h6>
          <p>{this.state.person.profession}</p>
          <p>{this.state.person.bio}</p>
          <div className="buttons">
            <button className="primary">Message</button>
            <button className="primary ghost">Following</button>
          </div>
          <div className="skills">
            <h6>Skills</h6>
            <ul>
              <li>UI / UX</li>
              <li>Front End Development</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>Bootstrap</li>
              <li>JavaScript</li>
              <li>Es6</li>
              <li>React</li>
              <li>Angular</li>
            </ul>
          </div>
        </div>
        <p className="time">{this.state.time} s</p>
        <span className="notice">
          (* This time is triggered since this component was mounted)
        </span>
      </>
    );
  }
}
