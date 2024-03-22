import {makeAutoObservable} from "mobx";

class ModalStore {
    state = {
        basket: false,
        paymentChoose: false,
        productInfo: [],
        productChoice: [],
    }
    isOpen = false

    constructor() {
        makeAutoObservable(this, {}, { autoBind: true })
    }

    show(name, id= null) {
        this.isOpen = true
        if(id !== null) {
            this.state[name][id] = true
        } else {
            this.state[name] = true
        }
        document.body.style.overflow = 'hidden';
    }

    hide(name, id= null) {
        this.isOpen = false
        if(id !== null) {
            this.state[name][id] = false
        } else {
            this.state[name] = false
        }
        document.body.style.overflow = 'unset';
    }

    setState(name, data) {
        this.state[name] = data
    }
}

const Store = new ModalStore()

export default Store