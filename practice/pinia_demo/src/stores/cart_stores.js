import { defineStore } from 'pinia'

export const cartStore = defineStore("carts", {
    state: () => ({ //定義所有變數與資料
        products:[
            {id:1, name: 'berry', quantity: 1, price: 30, stock: false},
            {id:2, name: 'kiwi', quantity: 1, price: 25, stock: true},
            {id:3, name: 'melon', quantity: 1, price: 20, stock: true},
            {id:3, name: 'peach', quantity: 1, price: 35, stock: true},
        ],
        carts:[]
    }),
    getters: { //預設取得資料的函式集
        // showCart(state) {
        //     console.log(state);
        //     return state.carts
        // }
        showStock(state) {
            console.log(state);
            return state.products.filter((product) => !product.stock)
        },
        totalPrice(state){
            let total = 0;
            state.carts.forEach((item) => {
                total += item.price * item.quantity;
            });
            return total;
        }
    },
    actions: { //設定要做的功能函式，例如加入購物車addCart、移除購物車removeCart
        addCart(item){
            console.log(item);
            this.carts.push(item)
        },
        editQuantity(){

        },
        removeCart(i){
            this.carts.splice(i, 1)
        }
    }
})