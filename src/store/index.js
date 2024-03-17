import {makeAutoObservable} from "mobx";
import {$api} from "../api";

class Store {
    tags = []
    products = []
    last_buys = []
    activeTag = undefined
    // activeMode = 'ANARCHY-M'
    activeMode = 'GRIEF-M'
    basket = []
    query = ""
    isModalOpen = false
    promo = false
    // online = {'ANARCHY-M': [], 'GRIEF-M': []}
    online = []
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
        this.fetchOnline()
    }

    getTotalBasket() {
        const prices = {
            1: 'price_1',
            3: 'price_3',
            forever: 'price',
        }

        let total = this.basket.map(({id, expiry, count, amount}) => {
            if(id === 'money') return amount
            else {
                const product = this.products.find(product => product.id === id)
                const price = expiry ? product[prices[expiry]] : product.price
                return price * count
            }
        }).reduce((a, b) => a + b, 0)

        if(this.promo) {
            total -= ((total / 100) * this.promo.amount).toFixed(0)
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

    addToBasket(id, expiry, count=1, amount) {
        this.basket.find((item) => item.id === id) && this.removeFromBasket(id)
        this.basket.push({id, count, expiry, amount})
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

    setOnline(data) {
        this.online = data
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

    pay(data) {
        try {
            $api.post('pay', {
                ...data, amount: this.getTotalBasket(), products: this.basket
            }).then(({ data }) => {
                window.location.href = data.url
            }).catch((e) => {
                console.log('Cant connect server')
            })
        } catch (e) {
            console.log('Cant connect server')
        }
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

    getTotalOnline() {
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

    fetchTags() {
        try {
            $api.get('tags').then(rs => {
                this.setTags(rs.data)
            }).catch((e) => {
                console.log('Cant connect server')
            })
        } catch (e) {
            console.log('Cant connect server')
        }
    }

    fetchOnline() {
        try {
            $api.get('history?limit=14').then(rs => {
                // const online = this.online
                // console.log(rs.data)
                // rs.data.forEach(({data}) => {
                //     online['ANARCHY-M'] = data['ANARCHY-M']
                //     online['GRIEF-M'] = data['GRIEF-M']
                // })
                console.log(rs.data)
                this.setOnline(rs.data)
            }).catch((e) => {
                console.log('Cant connect server')
            })
        } catch (e) {
            console.log('Cant connect server')
        }
    }

    fetchProducts() {
        try {
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
            }).catch((e) => {
                console.log('Cant connect server')
            })
        } catch (e) {
            console.log('Cant connect server')
        }
    }

    fetchLastBuys() {
        try {
            $api.get('buys?limit=10&sort=["createdAt","DESC"]').then(rs => {
                this.setLastBuys(rs.data)
            }).catch((e) => {
                console.log('Cant connect server')
            })
        } catch (e) {
            console.log('Cant connect server')
        }
    }

    fetchPunishments() {
        try {
            return $api.get('punishments').catch((e) => {
                console.log('Cant connect server')
            })
        } catch (e) {
            console.log('Cant connect server')
        }
    }

    filteredProducts = () => {
        return this.activeTag ? this.products.filter(p => p.TagId === this.activeTag) : this.products
    }
}

export default Store