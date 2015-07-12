//GET /author

exports.show = function(req,res){
	res.render('authors',{ author: 'Jaume Abad' , picture: '/images/jaume.jpg'});
};

