import { LightningElement } from 'lwc';

export default class App extends LightningElement {
    contacts = [
        {
            Id: 1,
            Name: 'Chocolate Chip Cookie',
            Picture: './resources/chocolatechip.jpg'
        },
        {
            Id: 2,
            Name: 'Raisin Cookie',
            Picture: './resources/raisincookie.jpg'
        },
        {
            Id: 3,
            Name: 'Sugar Cookie',
            Picture: './resources/sugarcookie.jpg'
        },
        {
            Id: 4,
            Name: 'Macaron Cookie',
            Picture: './resources/macaron.jpg'
        },
        {
            Id: 5,
            Name: 'Biscotti Cookie',
            Picture: './resources/biscotti.jpg'
        },
        {
            Id: 6,
            Name: 'Shortbread Cookie',
            Picture: './resources/shortbread.jpg'
        },
    ];
}
