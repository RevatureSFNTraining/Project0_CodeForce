import { LightningElement } from 'lwc';

export default class reviews extends LightningElement {
    areReviewsVisible = false;

    handleChange(e) {
        this.areReviewsVisible = e.target.checked;
        console.log(e.target.checked);
    }
}