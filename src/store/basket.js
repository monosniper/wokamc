import {makeAutoObservable} from "mobx";
import store from "./main";
import {$api} from "../api";

const prices = {
    1: 'price_1',
    3: 'price_3',
    forever: 'price',
}

class BasketStore {
    items = []
    promo = false

    constructor() {
        makeAutoObservable(this, {}, { autoBind: true })
    }

    get total() {
        let total = this.items.map(({id, expiry, count, amount}) => {
            if(id === 'money') return amount
            else {
                const product = store.products.find(product => product.id === id)
                const price = expiry ? product[prices[expiry]] : product.price
                return price * count
            }
        }).reduce((a, b) => a + b, 0)

        if(this.promo) {
            total -= ((total / 100) * this.promo.amount).toFixed(0)
        }

        return total
    }

    getItemPrice(item, product) {
        const price = item.expiry ? product[prices[item.expiry]] : product.price
        return price * item.count
    }

    addCount(id) {
        this.items = this.items.map((item) => {
            if (item.id === id) item.count++
            return item
        })
    }

    add(id, expiry, count=1, amount) {
        this.items.find((item) => item.id === id) && this.remove(id)
        this.items.push({id, count, expiry, amount})
    }

    remove(id) {
        this.items = this.items.filter(item => item.id !== id)
    }

    setPromo(data) {
        this.promo = data
    }

    checkPromo(promo) {
        try {
            $api.post('check-promo', {promo}).then(({ data }) => {
                if(data.success) {
                    this.setPromo(data.data)
                } else {
                    this.setPromo(null)
                }
            }).catch((e) => {
                console.log('Cant connect server')
            })
        } catch (e) {
            console.log('Cant connect server')
        }
    }
}

const Store = new BasketStore()

export default Store