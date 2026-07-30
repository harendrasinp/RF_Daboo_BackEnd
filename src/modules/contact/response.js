import ContactUsModel from "./models/ContactUs.model.js";
import ContactModel from "./models/Contact.model.js"

class ContactResponse {
    async getContactUs() {
        const response = await ContactUsModel.findOne()
        return response
    }
    async getPhones() {
        const response = await ContactModel.find()
        return response
    }
    async ContactData(Data) {
        const response = await ContactUsModel.findOneAndReplace(
            {}, // Collection ka pehla document

            {
                Address: Data.Address,
                OfficePhone: Data.OfficePhone,
                Email: Data.Email,
            },
            {
                new: true,      // Updated document return kare
                upsert: true,   // Document na mile to create kar de
                runValidators: true
            }
        );

        return response;
    }
    async getAllPhoneNoList() {
        const response = await ContactModel.find()
        return response;
    }
    async contactRepo(data) {
        const response = await ContactModel.create({
            OfficeName: data.OfficeName.toUpperCase(),
            ContactNumber: data.Contact
        })
        return response
    }
    async DeletePhoneFromList(Id) {
        const dbResponse = await ContactModel.findById(Id);

        if (!dbResponse) {
            throw new Error("Data not found");
        }

        await dbResponse.deleteOne();

        return dbResponse;
    }
    async UpdatePhoneList(id, OfficeName, Contact) {
        const dbResponse = await ContactModel.findByIdAndUpdate(
            id,
            {
                OfficeName:OfficeName.toUpperCase(),
                ContactNumber: Contact
            },
            {
                new: true
            }
        )
        return dbResponse;
    }
}

export default new ContactResponse();