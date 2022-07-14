var express = require('express');
var router = express.Router();
var fs = require('fs');

// let recipes = [];

// fs.readFile('./data/recipe.json', "utf8", function(err, data) {
//     if (err) {
//         console.log(err);
//         return;
//     }
//     recipes = JSON.parse(data);
//     console.log("data loaded")
// });

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('Tässä on resepti');
});

router.get('/:food',  (req, res, next) => {
    //create JSON object
    foodId = req.params.food;
    let recipeJSON ={
        "recipe": [
          {
            "name": foodId,
            "instructions": "make pizza",
            "ingredients": "salami, ananas"
          }
        ]
    }
    const recipeObj = JSON.stringify(recipeJSON);
    res.send(recipeObj);
    

    //res.json(recipes);
    //foodId = req.params.food;
   // foodId.JSON = JSON.stringify(recipes);
    //res.send();
})

module.exports = router;
