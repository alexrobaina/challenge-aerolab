import React, { Component } from "react";
import TOKEN from "../../../config/config";
import { Button, Grid, Cell, Textfield, Card } from "react-mdl";
import { Link } from 'react-router-dom';
import swal from "sweetalert";
import axios from "axios";
import './givePoints.scss'

export default class GivePoints extends Component {
  constructor() {
    super();
    this.state = {
      points: 0
    };
    this.handleChange = this.handleChange.bind(this);
    this.giveMorePointsSubmit = this.giveMorePointsSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ points: event.target.value });
  }

  giveMorePointsSubmit(event) {
    event.preventDefault();
    let { points } = this.state;
    points = parseInt(points);
    if (this.verifyValue(points)) {
      axios({
        method: "post",
        url: "https://coding-challenge-api.aerolab.co/user/points",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: TOKEN
        },
        data: {
          amount: points
        }
      })
        .then(response => {
          swal("Enjoy!", `${response.data.message}`, "success");
        })
        .catch(response => {
        });
    } else {
      swal("Sorry!", `The value is not correct`, "error");
    }
  }

  verifyValue(points) {
    if (points === 1000 || points === 5000 || points === 7500) {
      return true;
    } else {
      return false;
    }
  }

  render() {
    return (
      <div>
        <div className="container-give">
          <Card shadow={0} style={{width: '512px', margin: 'auto'}}>
            <Grid className="demo-grid-ruler">
              <Cell col={12}>
                <p className="title-give">Give points to user</p>
                <p>You can only add them by 1000, 5000 or 7500 points</p>
              </Cell>

              <form onSubmit={this.giveMorePointsSubmit}>
                <Cell col={12}>
                  <Textfield
                    onChange={this.handleChange}
                    defaultValue={this.state.value}
                    label="Number..."
                    floatingLabel
                    type=""
                  />
                </Cell>
                <Grid>
                  <Cell col={6}>
                    <Button raised accent ripple type={"submit"}>Send Points</Button>
                  </Cell>
                  <Cell col={6}>
                    <Link to={'home'} type={"button"}>back home</Link>
                  </Cell>
                </Grid>
              </form>
            </Grid>
          </Card>
        </div>
      </div>
    );
  }
}
