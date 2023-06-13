import Users from "../modals/userModel.js";
import encrypt from "encryptjs";

export const register = async (req, res) => {
    try {
        const { name, email, password, pin, number, address, panCard } = req.body;

        var secretkey = 'ios';
        var plainPin = pin;
        var plaintext = password;
        var cipherText = encrypt.encrypt(plaintext, secretkey, 256);
        var cipherPin = encrypt.encrypt(plainPin, secretkey, 256);
        const user = new Users({ name, email, password: cipherText, pin: cipherPin, number, address, panCard })
        await user.save();
        return res.send("Resgistration Succesfull!")

    } catch (error) {
        return res.send(error)
    }
}

export const changeNumber = async (req, res) => {
    try {
        const { number ,id,pin} = req.body;
        if(!number) return res.send("number is required.")
        const changeNum = await Users.findByIdAndUpdate({ _id: id, pin }, { number });
        await changeNum.save();
        return res.send("number changed.")



    } catch (error) {

        return res.send(error, "error here")
    }
}

export const changeEmail = async (req, res) => {
    try {
        const { email ,id,pin} = req.body;
        if(!email) return res.send("email is required.")
        const changeEmail = await Users.findByIdAndUpdate({ _id: id, pin }, { email });
        await changeEmail.save();
        return res.send("email changed.")



    } catch (error) {

        return res.send(error, "error here")
    }
}

export const changeAddress = async (req, res) => {
    try {
        const { address ,id,pin} = req.body;
        if(!address) return res.send("Address is required.")
        const changeAddress = await Users.findByIdAndUpdate({ _id: id, pin }, { address });
        await changeAddress.save();
        return res.send("Address changed.")



    } catch (error) {

        return res.send(error, "error here")
    }
}

export const changePanCardNum = async (req, res) => {
    try {
        const { panCard ,id,pin} = req.body;
        if(!panCard) return res.send("Pan card number is required.")
        const changePanCardNum = await Users.findByIdAndUpdate({ _id: id, pin }, { panCard });
        await changePanCardNum.save();
        return res.send("Pan card number changed.")



    } catch (error) {

        return res.send(error, "error here")
    }
}