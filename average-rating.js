// rating algorithm from noob insider.  given an array of objects with keys comment and rating, calculate the average rating in such a way that null ratings don't affect teh average. need to calculate two number: sum of the ratings and total ratings


 class Comment {
    constructor(comment, rating) {
        this.comment = comment;
        this.rating = rating;
    }
 }

comments = []

let comment1 = new Comment("1", 1)
comments.push(comment1)

let comment3 = new Comment("3", 3)
comments.push(comment3)

let comment2 = new Comment("2")
comments.push(comment2)

let comment4 = new Comment("4", 4)
comments.push(comment4)

let comment5 = new Comment("5", 4)
comments.push(comment5)
let comment6 = new Comment("6")
comments.push(comment6)
let comment7 = new Comment("7")
comments.push(comment6)



console.log(comments)

let sum = 0
let totalRatings = 0
let averageRating = sum/totalRatings

const counts = comments.map((comment, i) => {
        if(comment.rating){
            sum+=comment.rating
            totalRatings+=1
        }    
    })


console.log(averageRating)