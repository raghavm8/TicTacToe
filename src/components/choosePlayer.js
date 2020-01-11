import React,{Component} from 'react';

export default class Player extends Component
{
    handleForm(e)
    {
        e.preventDefault();
        console.log(e.target.player.value);
        this.props.player(e.target.player.value)
        //console.log(this.props.player.value)
    }
    
    render(){
        return(
            <form onSubmit={(e)=>this.handleForm(e)}>
                <label>
                    Player X
                    <input type="radio" name="player" value="X"/>
                </label><br/>
                <label>
                Player O
                    <input type="radio" name="player" value="O"/>
                </label><br/>
                <input type="submit" value="Start"/><br/><br/>
            </form>
        );
    }
}
