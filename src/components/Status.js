import React,{Component} from 'react';
import Player from './choosePlayer.js';

export default class Status extends Component
{
    handleSetPlayer(e)
    {
        this.props.setPlayer(e)
    }
    renderWinner()
    {
        if(this.props.winner)
        {
            return (
                <h3>Winner is {this.props.winner}</h3>
            )
        }
        else
        {
          return  this.props.player ? <h3>{this.props.player}'s Turn </h3>: <Player player={(e) => this.handleSetPlayer(e)} />
        }
    }
    render()
    {
        return (
           <span>{this.renderWinner()}</span>
        ); 
    }
}