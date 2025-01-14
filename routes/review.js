const express =require('express');
const router = express.Router({mergeParams:true});
const wrapAsync=require("../utils/wrapAsync.js");
const ExpressError=require("../utils/ExpressError.js");
const Review= require("../models/review.js");
const {reviewSchema}=require("../schema.js");
const review = require("../models/review.js");
const Listing= require("../models/listing.js");
const {validateReview,isLoggedIn,isReviewAuthor,saveRedirectUrl}=require("../middleware.js");
const reviewController=require("../controllers/review.js");

//post review route
    router.post("/",isLoggedIn,saveRedirectUrl,validateReview, wrapAsync(reviewController.createReview));
  
//delete review Route
    router.delete("/:reviewId",isLoggedIn,isReviewAuthor, wrapAsync(reviewController.deleteReview));
module.exports=router;