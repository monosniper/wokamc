import {makeAutoObservable} from "mobx";
import {$api} from "../api";

class Store {
    tags = []
    products = [{
        "id": 1,
        "title": "SERF +7£",
        "price": 90,
        "price_1": 29,
        "price_3": 60,
        "bonus": 21,
        "bonus_1": 7,
        "bonus_3": 14,
        "discount": null,
        "description": "Это игровая привилегия на режиме \"ANARCHY-M\" она даёт вам уникальные \nвозможности как основной привилегии так и предыдущих.  Посмотреть полный \nсписок возможностей и уникальных плюшек можно на сервере, \nпрописав команду \"/donate\".\n\n» Данная привилегия покупается навсегда.\n» Никакие условия возврата средств за неё не предусматриваются.",
        "image": "/products/1.png",
        "TagId": 1,
        "rcon": "lp user {name} parent addtemp serf 30d",
        "rcon_1": "lp user {name} parent addtemp serf 90d",
        "rcon_3": null,
        "rcon_forever": "lp user {name} parent add serf",
        "createdAt": "2024-03-13T15:24:11.000Z"
    }]
    last_buys = []
    activeTag = null
    basket = []
    query = ""
    isModalOpen = false
    promo = false
    modals = {
        basket: false,
        productInfo: false,
        productChoice: false,
    }

    constructor() {
        makeAutoObservable(this)

        // this.fetchTags()
        // this.fetchProducts()
        // this.fetchLastBuys()
    }

    getTotalBasket() {
        const prices = {
            1: 'price_1',
            3: 'price_3',
            forever: 'price',
        }

        let total = this.basket.map(({id, expiry, count}) => {
            const product = this.products.find(product => product.id === id)
            const price = product[prices[expiry]]
            return price * count
        }).reduce((a, b) => a + b, 0)

        if(this.promo) {
            total -= (total / 100) * this.promo.amount
        }

        return total
    }

    showModal(name) {
        this.isModalOpen = true
        this.modals[name] = true
        document.body.style.overflow = 'hidden';
    }

    hideModal(name) {
        this.isModalOpen = false
        this.modals[name] = false
        document.body.style.overflow = 'unset';
    }

    addToBasket(id, expiry) {
        this.basket.find((item) => item.id === id) && this.removeFromBasket(id)
        this.basket.push({id, count: 1, expiry})
    }

    addCountToBasket(id) {
        this.basket = this.basket.map((item) => {
            if (item.id === id) item.count++
            return item
        })
    }

    removeFromBasket(id) {
        this.basket = this.basket.filter(item => item.id !== id)
    }

    setActiveTag(id) {
        this.activeTag = id
    }

    setPromo(data) {
        this.promo = data
    }

    checkPromo(promo) {
        $api.post('check-promo', {promo}).then(rs => {
            if(rs.success) {
                this.setPromo(rs.data)
            }
        })
    }

    setQuery(data) {
        this.query = data
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

    fetchTags() {
        $api.get('tags').then(rs => {
            this.setTags(rs.data)
            this.tags.length && this.setActiveTag(this.tags[0].id)
        })
    }

    fetchProducts() {
        $api.get('products').then(rs => {
            this.setProducts(rs.data)
        })
    }

    fetchLastBuys() {
        $api.get('buys?limit=10&sort=["createdAt","DESC"]').then(rs => {
            this.setLastBuys(rs.data)
        })
    }

    fetchPunishments() {
        return $api.get('punishments')
    }

    filteredProducts = () => {
        return this.activeTag ? this.products.filter(p => p.TagId === this.activeTag) : this.products
    }
}

export default Store