import { makeAutoObservable } from 'mobx'

class UserModel {
    email = 'Not authorised!'

    password = ''

    population = 0

    constructor() {
        makeAutoObservable(this)
    }

    signIn({ email, password }) {
        this.email = email
        this.password = password
    }
}

export default new UserModel()
