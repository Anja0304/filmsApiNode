var express = require('express');
var router = express.Router();
var model = require('../models/index');

/* GET home page. */
router.post('/film', function(req, res, next) {
console.log("***Bodyyyy*****", req.body);

model.Films.create({
	title: req.body.title,
	description: req.body.description,
	image: req.body.image,
	url: req.body.url
})
.then(film => res.status(201).json({
	error: false,
	data: film,
	message:'Un nouveau film a été ajouté'
}))
.catch(error => res.status(401).json({
	error: true,
	data : [],
	error : error

}));

});

router.get('/films', function(req, res, next) {
console.log("************************", model);

model.Films.findAll({})
	.then(films => res.json ({
		error : false,
		data: films
	}))
	.catch(error => res.json({
		error:true,
		data : [],
		error : error
	}));
});


router.put('/film/:id', function(req, res, next) {
console.log("***Bodyyyy******************", req.body);

model.Films.update({
	title: req.body.title,
	description: req.body.description,
	image: req.body.image,
	url: req.body.url
},
{
where: {
        id: req.params.id
      }


  }).then(film => res.status(201).json({
	error: false,
	data: film,
	message:'Le film a été modifié'
}))
.catch(error => res.status(401).json({
	error: true,
	data : [],
	error : error

}));


});

router.delete('/film/:id', function(req, res, next) {
console.log("***Bodyyyy******************", req.body);

model.Films.destroy({


      where: {
        id: req.params.id
      }

}).then(film => res.status(201).json({
	error: false,
	data: film,
	message:'Le film a été supprimé'
}))
.catch(error => res.status(401).json({
	error: true,
	data : [],
	error : error

}));

});

module.exports = router;