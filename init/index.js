const mongoose=require("mongoose")
const initData=require("./data.js");
const Listing=require("../models/listing.js");


const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";
//exports from listing.js
main()
.then(()=>{
  console.log("connect to DB")
}) .catch((err)=>{
  console.log(err)
})
async function main() {
  await mongoose.connect(MONGO_URL)
  
}
const initDB= async()=>{
  //coplete delete fronm mongoose
  await Listing.deleteMany({})
  initData.data=initData.data.map((obj) => ({ ...obj, owner:"6899c411b8ee62587bc62176"}))
  //insert many data in mongoose
  await Listing.insertMany(initData.data) //where data comes from data.js
  console.log("data was initialized")
}
initDB()