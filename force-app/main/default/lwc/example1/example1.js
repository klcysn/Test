import { LightningElement, api } from 'lwc';
import LightningModal from 'lightning/modal';

export default class Example1 extends LightningElement {

    name;

    handleChange(event){
        this.name= event.target.value.toUpperCase()
    }


    handleOkay() {
        this.name=null
    }
}