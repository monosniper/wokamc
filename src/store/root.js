import MainStore from './main'
import ModalStore from './modal'
import BasketStore from './basket'

class RootStore {
    main = MainStore;
    modal = ModalStore;
    basket = BasketStore;
}

export default RootStore