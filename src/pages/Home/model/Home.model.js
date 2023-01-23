import axios from 'axios'
import { makeAutoObservable } from 'mobx'

const URL = 'https://www.boredapi.com/api/activity'

class HomeModel {
    action = {}

    loading = false

    constructor() {
        makeAutoObservable(this)
    }

    getAction() {
        console.log(this)
        this.action = { name: 'sdf' }
        this.loading = true

        axios.get(URL).then((res) => {
            this.action = res.data
            this.loading = false
        })
    }
}

export default new HomeModel()
