import { LightningElement } from 'lwc';

export default class Panel extends LightningElement {

    imgUrls = 
    [ 
        "./resources/risk.jpg",
        "./resources/history.jpg", 
        "./resources/europe.jpg", 
        "./resources/pacific.jpg"
    ];

    handleClick() {
        this.template.querySelector(".content").src = this.imgUrls[ Math.floor(Math.random() * this.imgUrls.length) ];
    }

}
