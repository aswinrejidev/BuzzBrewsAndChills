import { userCollection } from "../../model/user-entities/userData.mjs";


export async function findAdmin (data){
    return await userCollection.findOne({email:data,status:"ADMIN"})
}


export async function findAllUser () {
    return await userCollection.find({status:"USER"})
}
