import { defineStore } from "pinia";

export const useStore = defineStore('useStore', {
    state: () => {
        return {
            count: 1
        }
    },
    actions: {
        init() {
            const initCount = localStorage.getItem('count')
            if (initCount) {
                this.count = parseInt(initCount)
            }
        },
        increment(val = 1) {
            this.count += val
            localStorage.setItem('count', this.count.toString())
        }
    },
    // persist: true
    // persist: {
    //     storage:sessionStorage,
    //     paths:['count']
    // }
})