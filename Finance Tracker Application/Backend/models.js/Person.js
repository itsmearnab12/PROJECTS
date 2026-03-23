import mongoose from "mongoose";

const personSchema = new mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true}
}, {
    timestamps: true
});

export const Person = mongoose.model("Person", personSchema);