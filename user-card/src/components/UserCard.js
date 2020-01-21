import React from "react";
import { Card, CardBody, CardTitle, CardSubtitle } from "reactstrap";

const UserCard = props => {
  return (
    <div>
      <Card className="card">
        <img className="card-image" src={props.img} alt={props.login}></img>
        <CardTitle>
          <strong>{props.login}</strong>
        </CardTitle>
        <CardSubtitle>
          <a className="card-link" href={props.url} target="_blank">
            Profile
          </a>
        </CardSubtitle>

        <CardBody>
          <strong>Bio:</strong> {props.bio}
        </CardBody>
        <CardSubtitle>
          <strong>Location:</strong> {props.location}
        </CardSubtitle>
      </Card>
    </div>
  );
};

export default UserCard;
