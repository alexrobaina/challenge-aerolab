import React, { Component } from "react";
import TOKEN from '../../../config/config'
import { Button, Grid, Cell, Textfield } from "react-mdl";
import swal from 'sweetalert';
import axios from "axios";
import { number } from "prop-types";



export default class GivePoints extends Component {
    constructor() {
        super();
        this.state = {
            points: 0
        }
        this.handleChange = this.handleChange.bind(this);
        this.giveMorePointsSubmit = this.giveMorePointsSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ points: event.target.value });
    }

    giveMorePointsSubmit(event) {
        event.preventDefault();
        let { points } = this.state;
        points = parseInt(points)
        if (this.verifyValue(points)) {
            axios({
                method: 'post',
                url: 'https://coding-challenge-api.aerolab.co/user/points',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization': TOKEN
                },
                data: {
                    "amount": points
                }
              })
                .then((response) => {
                    swal("Enjoy!", `${response.data.message}`, "success");
                }).catch((response) => {
                    console.log(response);
                })
        } else {
            swal("Sorry!", `The value is not correct`, "error");
        }
    }

    verifyValue(points) {
        if (points === 1000 || points === 5000 || points === 7500) {
            return true
        } else {
            return false
        }
    }
    

  render() {
    return (
      <div>
        <div style={{ width: "80%", margin: "auto" }}>
          <Grid className="demo-grid-ruler">
            <Cell col={12}>
              <p>Give points to user</p>
              <p>You can only add them by 1000, 5000 or 7500 points</p>
              <form onSubmit={this.giveMorePointsSubmit}>
                <Textfield
                        onChange={this.handleChange}
                        defaultValue={this.state.value}
                        label="Number..."
                        floatingLabel
                        type=""
                        />

                <Button type={'submit'}>Send Points</Button>
              </form>

            </Cell>
          </Grid>
        </div>
      </div>
    );
  }
}
