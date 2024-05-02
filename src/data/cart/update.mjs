import {ObjectId} from "mongodb";
import {cartCollection} from "../../model/cart.mjs";


export async function addToCartDataSameProductUpdate(userId, product, quantity = 1) {

    try {
        await cartCollection.updateOne({
            userId: userId,
            "items.productId": product
        }, {
            $inc: {
                "items.$.quantity": quantity
            }
        })

        const uniqueProduct = await cartCollection.findOne({
            "items.productId": new ObjectId(product._id)
        })
        console.log(uniqueProduct, 'unique product is showing');

    } catch (error) {
        console.log(error, 'USER ADD TO CART SAMPLE PRODUCT UPDATE FUNCTION');
    }

}

export async function addToCartDataManageQuantity(userId, product, quantity) {

    try {
        console.log(quantity,'quanti in manage func ');
        await cartCollection.updateOne({
            userId: userId,
            "items.productId": product
        }, {
            $set: {
                "items.$.quantity": quantity
            }
        })
        const uniqueProduct = await cartCollection.findOne({
            "items.productId": new ObjectId(product._id)
        })
        console.log(uniqueProduct, 'unique product is showing');
        console.log(quantity, 'quantity in manage q func');

    } catch (error) {
        console.log(error, 'USER ADD TO CART MANAGE QUANTITY FUNCTION');
    }

}
