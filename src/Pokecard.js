import React, {Component} from 'react';
import './Pokecard.css'
const POKE_API = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/`
function paddZeros(num){
  let numArr = (num).toString().split('');
    if(numArr.length ===1){
       return [0, 0, ...numArr].join('')
    } 
    else if(numArr.length === 2){
        return [0,...numArr].join('');
    }
    return num
}
class Pokecard extends Component{
  render(){
    const imgSrc=`${POKE_API}${paddZeros(this.props.id)}.png`
    console.log(imgSrc)
    return(
      <div className="Pokecard">
        <h3>{this.props.name}</h3>
        <div className="Pokecard-image">
          <img src={imgSrc} alt="this.props.name"/>
        </div>        
        <p>Type: {this.props.type}</p>
        <p>Exp: {this.props.exp}</p>
      </div>
    )
  }
}

export default Pokecard;