
import bcrypt from "bcrypt"

export async function hashPassword (password){
   return await bcrypt.hash(password,10)
}

export async function compareHashPassword (password,hashPassword){
    return await bcrypt.compare(password,hashPassword)
}
