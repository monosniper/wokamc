import {makeAutoObservable} from "mobx";
import {$api} from "../api";

class Store {
    tags = []
    products = []
    last_buys = []
    activeTag = undefined
    activeMode = 'ANARCHY-M'
    basket = []
    query = ""
    isModalOpen = false
    promo = false
    modals = {
        basket: false,
        productInfo: [],
        productChoice: [],
    }

    constructor() {
        makeAutoObservable(this)

        this.fetchTags()
        this.fetchProducts()
        this.fetchLastBuys()
    }

    getTotalBasket() {
        const prices = {
            1: 'price_1',
            3: 'price_3',
            forever: 'price',
        }

        let total = this.basket.map(({id, expiry, count}) => {
            const product = this.products.find(product => product.id === id)
            const price = expiry ? product[prices[expiry]] : product.price
            return price * count
        }).reduce((a, b) => a + b, 0)

        if(this.promo) {
            total -= (total / 100) * this.promo.amount
        }

        return total
    }

    showModal(name, id= null) {
        this.isModalOpen = true
        if(id !== null) {
            this.modals[name][id] = true
        } else {
            this.modals[name] = true
        }
        document.body.style.overflow = 'hidden';
    }

    hideModal(name, id= null) {
        this.isModalOpen = false
        if(id !== null) {
            this.modals[name][id] = false
        } else {
            this.modals[name] = false
        }
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

    setActiveMode(id) {
        this.activeMode = id
    }

    setPromo(data) {
        this.promo = data
    }

    filteredProduct() {
        return this.products.filter(({TagId, title, mode}) =>
            (this.activeTag !== undefined ? (TagId === this.activeTag) : true) &&
            this.activeMode === mode &&
            title.toLowerCase().search(this.query.toLowerCase()) !== -1
        )
    }

    checkPromo(promo) {
        $api.post('check-promo', {promo}).then(({ data }) => {
            if(data.success) {
                this.setPromo(data.data)
            }
        })
    }

    pay(data) {
        $api.post('pay', {
            ...data, amount: this.getTotalBasket(), products: this.basket
        }).then(({ data }) => {
            window.location.href = data.url
        })
    }

    setQuery(data) {
        this.query = data
    }

    showProduct(id) {
        this.products.map(product => {
            if(product.id === id) product.hide = false
            return product
        })
    }

    hideProduct(id) {
        this.products.map(product => {
            if(product.id === id) product.hide = true
            return product
        })
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
            this.setProducts(rs.data.map(product => {
                product.hide = false
                return product
            }))
            const modals = []

            rs.data.forEach(({id}) => {
                modals[id] = false
            })

            this.modals.productInfo = modals
            this.modals.productChoice = modals
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