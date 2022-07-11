var express = require('express');
var router = express.Router();
var fs = require('fs');

let recipes = [];

fs.readFile('./data/recipe.json', "utf8", function(err, data) {
    if (err) {
        console.log(err);
        return;
    }
    recipes = JSON.parse(data);
    console.log("data loaded")
});

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('Tässä on resepti');
});

router.get('/:food',  (req, res, next) => {
    res.json(recipes);
    res.send('User Info ' + req.params.food)
})

module.exports = router;
