import { LightningElement } from 'lwc';

export default class Body extends LightningElement {

    showDescription = false;

    items = 
    [
        {   id:1,
            Name:"Risk", 
            Desc:"A game of global domination. Battle it out to conquer territories, and then the World.", 
            Price:40 },
        {   id:2,
            Name:"Axis and Allies", 
            Desc:"Take charge of the forces of WWII to create a new simulation of how the war could have gone.", 
            Price:60 },
        {   id:3,
            Name:"Monopoly", 
            Desc:"Travel the block and snatch up those desirable locations. See which of your friends try to bankrupt you.", 
            Price:20 },
        {   id:4,
            Name:"Scrabble", 
            Desc:"Can you make the letters work for you? Find out in this contest of true word wizards.", 
            Price:20 },
        {   id:5,
            Name:"Battleship", 
            Desc:"Ready your fleet in an intense match to Search and Destroy your opponents ships.", 
            Price:15 },
        {   id:6,
            Name:"History of the World", 
            Desc:"Journey through the Epochs, leading key Civilizations through the different Ages of the World.", 
            Price:25 }
    ];

    handleChange(e) {
        this.showDescription = e.target.checked;
    }
}
