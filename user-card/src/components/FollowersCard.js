import React from "react";
import { Card, CardTitle, CardImg } from "reactstrap";

const FollowerCard = props => {
  return (
    <Card className="card">
      <CardImg
        className="card-image"
        src={props.img}
        alt={props.login}
      ></CardImg>
      <CardTitle>
        <a className="card-link" href={props.url} target="_blank">
          {props.login}
        </a>
      </CardTitle>
    </Card>
  );
};

export default FollowerCard;
