import { makeAutoObservable } from 'mobx'

class UserModel {
    email = ''

    password = ''

    population = 0

    constructor() {
        makeAutoObservable(this)
    }

    signIn({ email, password }) {
        this.email = email
        this.password = password
    }

    logOut() {
        this.email = ''
        this.password = ''
    }

    isLoggedIn() {
        return Boolean(this.email)
    }

    changeInfo({ email, password }) {
        if (this.email !== email) {
            this.email = email
        }
        if (this.password !== password) {
            this.password = password
        }
    }
}

export default new UserModel()
