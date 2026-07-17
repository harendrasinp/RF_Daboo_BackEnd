import uploadOnCloudinary, { cloudinary } from "../../utils/cloudinary.js";
import galleryModel from "./models/Gallery.model.js";
import DropDownitemModel from "./models/dropdownItem.model.js";
class galleryRepository {
    async addtListItem(DropDownlistData) {
        const response = await DropDownitemModel.create(
            {
                DropDownItem: DropDownlistData.itemName.toUpperCase()

            }
        )
        return response
    }
    async uploadCloudinary(uploadData) {
        const response = await uploadOnCloudinary(uploadData.path)
        const dbResponse = await galleryModel.create(
            {
                EventName: uploadData.category,
                Year: uploadData.year,
                Image: response.secure_url,
                cloudinary_id: response.public_id
            }
        )
        return dbResponse;
    }
    async getDropDownList() {
        const response = await DropDownitemModel.find()
        return response
    }
    async EditdropdowItem(oldName, newName) {

        await DropDownitemModel.findOneAndUpdate(
            { DropDownItem: oldName.toUpperCase()},
            { $set: { DropDownItem: newName.toUpperCase() } }
        );

        await galleryModel.updateMany(
            { EventName: oldName.toUpperCase() },
            { $set: { EventName: newName.toUpperCase() } }
        );

        return await DropDownitemModel.find();
    }
    async DeleteEvent(eventName) {
        const EventResponse = await DropDownitemModel.deleteOne({ DropDownItem: eventName })
        if (EventResponse.deletedCount === 0) {
            throw new Error("Event Not Deleted")
        }
        const EventDataResponse = await galleryModel.deleteMany({ EventName: eventName })
        return { success: true, message: "Event Deleted with all Images" }
    }
    async getImageData() {
        const response = await galleryModel.distinct("EventName")
        return response
    }
    async getFunctionYear(EventName) {
        const response = await galleryModel.distinct("Year", { EventName: EventName })
        return response
    }
    async getYearImage(EventName, selecterYear) {
        const response = await galleryModel.find({ EventName: EventName, Year: selecterYear })
        return response
    }
    async getEditImages(EditCategory, EditYear) {
        const response = await galleryModel.find({ EventName: EditCategory, Year: EditYear })
        return response
    }
    async deleteImage(imageId) {
        const imagedata = await galleryModel.findById(imageId)
        const result = await cloudinary.uploader.destroy(imagedata.cloudinary_id);
        const response = await galleryModel.findByIdAndDelete(imagedata._id)
        return response
    }
}
export default new galleryRepository()