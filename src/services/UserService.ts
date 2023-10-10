import bcrypt from "bcrypt"
import { User } from "../models/User"

export const createUser = async (email: string, password: string) => {
    const hasUser = await User.findOne({ where:  { email: email}})
    if(!hasUser){
        const hash = bcrypt.hashSync(password, 10)
        const newUser = await User.create({
            email,
            password: hash,
        })
        return newUser
    }
    return new Error('E-mail ja existe')
}

export const findByEmail = async (email: string) => {
    return await User.findOne({where: {email: email}})
}

export const matchPassword = (passwordText: string, encrypted: string) => {
    return bcrypt.compareSync(passwordText, encrypted)
}

export const all = async () => {
    return await User.findAll()
}