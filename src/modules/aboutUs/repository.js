import aboutUsModel from "./model.js";
class AboutUsRepositori {
    // -------------------Adding New Data-------------------------------
    async newAboutData(data) {
        const bdResponse = await aboutUsModel.create(data)
        return bdResponse
    }
    // ------------------Geting Data------------------------------------
    async getAboutData() {
        return await aboutUsModel.find();
    }
    // -----------------------Edit AboutUsData---------------------------
    async EditAboutData(id,data) {
        const response = await aboutUsModel.findOneAndReplace(
            { _id: id },
            data,
            { new: true }
        );
        if(!response){
            throw new Error("Not Updated")
        }
        return response

    }
    // -----------------------Delete Aboutus Data------------------------
    async deleteItem(Id) {
        const dbResponse = await aboutUsModel.findById(Id);

        if (!dbResponse) {
            throw new Error("Data not found");
        }

        await dbResponse.deleteOne();

        return dbResponse;
    }
}
export default new AboutUsRepositori()