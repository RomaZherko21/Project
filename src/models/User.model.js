import { makeAutoObservable } from 'mobx'

class UserModel {
    email = ''

    password = ''

    name = ''

    gender = ''

    age = 0

    population = 0

    constructor() {
        makeAutoObservable(this)
    }

    signIn({ email, password }) {
        this.email = email
        this.password = password
    }

    signUp({ email, password, name, gender, age }) {
        this.email = email
        this.password = password
        this.name = name
        this.gender = gender
        this.age = age
    }

    logOut() {
        this.email = ''
        this.password = ''
    }

    isLoggedIn() {
        return Boolean(this.email)
    }

    changeInfo({ email, password, name }) {
        if (this.name !== name) {
            this.name = name
        }
        if (this.email !== email) {
            this.email = email
        }
        if (this.password !== password) {
            this.password = password
        }
    }
}

export default new UserModel()
