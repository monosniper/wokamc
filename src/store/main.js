import {makeAutoObservable} from "mobx";
import modal from "./modal";
import basket from "./basket";
import {
    getLastBuys,
    pay,
    getOnline,
    getProducts,
    getPunishments,
    getTags
} from "../api";

class Store {
    tags = []
    products = []
    last_buys = []
    activeTag = undefined
    activeMode = 'GRIEF-M'
    query = ""
    // online = {'ANARCHY-M': [], 'GRIEF-M': []}
    online = []

    constructor() {
        makeAutoObservable(this, {}, { autoBind: true })
    }

    getTotalBasket() {
        const prices = {
            1: 'price_1',
            3: 'price_3',
            forever: 'price',
        }

        let total = basket.items.map(({id, expiry, count, amount}) => {
            if(id === 'money') return amount
            else {
                const product = this.products.find(product => product.id === id)
                const price = expiry ? product[prices[expiry]] : product.price
                return price * count
            }
        }).reduce((a, b) => a + b, 0)

        if(basket.promo) {
            total -= ((total / 100) * basket.promo.amount).toFixed(0)
        }

        return total
    }

    setActiveTag(id) {
        this.activeTag = id
    }

    setActiveMode(id) {
        this.activeMode = id
    }

    setOnline(data) {
        this.online = data
    }

    async pay(data) {
        try {
            const _data = {
                ...data, amount: this.getTotalBasket(), products: basket.items
            }

            if(basket.promo) _data.promo = basket.promo.name

            const { url } = await pay(_data)
            window.location.href = url
        } catch (e) {
            console.log('Cant connect server')
        }
    }

    setQuery(data) {
        this.query = data
    }

    get totalOnline() {
        // const s1 = this.online['ANARCHY-M']
        // const s2 = this.online['GRIEF-M']
        //
        // return (s1.length && s2.length) ? s1[s1.length-1]+s2[s2.length-1] : 0

        return this.online.length ? this.online[this.online.length-1].online : 0
    }

    setTags(tags) {
        this.tags = tags
    }

    setProducts(products) {
        this.products = products
    }

    setLastBuys(buys) {
        this.last_buys = buys
    }

    async fetchTags() {
        try {
            const data = await getTags()
            this.setTags(data)
        } catch (e) {
            console.log('Cant connect server')
        }
    }

    async fetchOnline() {
        try {
            const data = await getOnline()
            this.setOnline(data)
        } catch (e) {
            console.log('Cant connect server')
        }
    }

    async fetchProducts() {
        try {
            const data = await getProducts()
            this.setProducts(data.map(product => {
                product.hide = false
                return product
            }))
            const modals = []

            data.forEach(({id}) => {
                modals[id] = false
            })

            modal.setState('productInfo', modals)
            modal.setState('productChoice', modals)
        } catch (e) {
            console.log('Cant connect server')
        }
    }

    async fetchLastBuys() {
        try {
            const data = await getLastBuys()
            this.setLastBuys(data)
        } catch (e) {
            console.log('Cant connect server')
        }
    }

    async fetchPunishments() {
        try {
            return await getPunishments().catch((e) => {
                console.log('Cant connect server')
            })
        } catch (e) {
            console.log('Cant connect server')
        }
    }

    get filteredProducts() {
        const products = this.products.filter(({TagId, title, mode, Tag}) =>
            (this.activeTag !== undefined ? (TagId === this.activeTag) : true) &&
            this.activeMode === mode &&
            !Tag.isHidden &&
            title.toLowerCase().search(this.query.toLowerCase()) !== -1
        )

        return this.activeTag ? products.filter(p => p.TagId === this.activeTag) : products
    }
}

export default new Store()