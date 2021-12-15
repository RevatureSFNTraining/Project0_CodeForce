import { LightningElement, api } from 'lwc';

export default class App extends LightningElement {
    
    
    async getPokemon(){
        try {var number=this.template.querySelector('.search').value}
        catch{return}
        
        let mon = await fetch("http://pokeapi.co/api/v2/pokemon/"+number)
        var pokemon = await mon.json()
        console.log(pokemon)
        this.displayMon(pokemon, number)
        this.displayType(pokemon)
    }
    displayMon(pokemon, number){
        this.template.querySelector('.monPic').src ="http://localhost:3001/resources/pokeball.png"
        this.template.querySelector("h2").innerText = pokemon.name
        
        if (pokemon.name!==undefined){
            this.template.querySelector('.monPic').src = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"+number+".png"
        }
        let stats=pokemon.stats
        var total = 0
        //I know there is a better way to code this, however i just cannot be bothered to deal with it.
        try{
        this.template.querySelector(".hp").innerText=stats[0].base_stat
        this.template.querySelector(".a").innerText=stats[1].base_stat
        this.template.querySelector(".d").innerText=stats[2].base_stat
        this.template.querySelector(".sa").innerText=stats[3].base_stat
        this.template.querySelector(".sd").innerText=stats[4].base_stat
        this.template.querySelector(".spd").innerText=stats[5].base_stat
        stats.forEach(element => {
            total+= element.base_stat
        });
        this.template.querySelector(".total").innerText=total
        }
        catch(TypeError){
        this.template.querySelector(".hp").innerText=0
        this.template.querySelector(".a").innerText=0
        this.template.querySelector(".d").innerText=0
        this.template.querySelector(".sa").innerText=0
        this.template.querySelector(".sd").innerText=0
        this.template.querySelector(".spd").innerText=0
        this.template.querySelector(".total").innerText=0
        }
        //stats[1].stat.name
        //stats[1].base_stat   
    }

    displayType(pokemon){
        try{
        this.template.querySelector(".typeA").innerText=pokemon.types[0].type.name + " "
        if (pokemon.types.length>1){
            this.template.querySelector(".typeB").innerText=pokemon.types[1].type.name
        }else{this.template.querySelector(".typeB").innerText=""}
        }
        catch{
            this.template.querySelector(".typeA").innerText=""
            this.template.querySelector(".typeB").innerText=""
    }
        

    }
    displayPokemon(){
        this.getPokemon()
        this.displayType()

    }
}
