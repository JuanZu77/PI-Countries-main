const validateActivity = (req, res, next) =>{
    const {name, difficulty, duration, season, countries} = req.body;

    if(!name) res.status(404).json({err: 'Missing name'});
    if(!difficulty) res.status(404).json({err: 'Missing difficulty'});
    if(!duration) res.status(404).json({err: 'Missing duration'});
    if(!season) res.status(404).json({err: 'Missing season'});
    if(!countries) res.status(404).json({err: 'Missing countries'});

    next();

};



module.exports = validateActivity;