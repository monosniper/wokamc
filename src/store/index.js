import {makeAutoObservable} from "mobx";
import {$api} from "../api";

class Store {
    tags = []
    products = []
    last_buys = []
    activeTag = null
    basket = []
    query = ""

    constructor() {
        makeAutoObservable(this)

        this.fetchTags()
        this.fetchProducts()
        this.fetchLastBuys()
    }

    getTotalBasket() {
        return this.basket.map(item => {
            return this.products.find(product => product.id === item.id).price * item.count
        }).reduce((a, b) => a + b, 0)
    }

    addToBasket(id) {
        this.basket.push({id, count: 1})
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