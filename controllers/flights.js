import { Flight } from "../models/flight.js"; 

function index(req, res) {
  Flight.find({})
  .then(flights=> {
    res.render('flights' , {
      flights,
      title: 'All flights',
    })
  })
  .catch(error => {
    console.log(error)
    res.redirect('/')
  })
}
function newFlight(req, res) {
  res.render("flights/new" , {
    title: "Add Flight" , 
  })
}

function create(req, res) {
Flight.create(req.body)
  .then(flight => {
    console.log(req.body)
    console.log(req.params.flightId);
    res.redirect('/flights/')
    
  })
  .catch(err => {
    console.log(err);
    res.redirect('/flights/new')
  })
}

function deleteFlight(req, res) {
  console.log(req.params.flightId);
  Flight.findByIdAndDelete(req.params.flightId)
  .then(flight => {
    res.redirect('/flights')
  })
  .catch(error => {
    console.log(error)
    res.redirect('/flights')
  })
}

function show(req, res) {
  console.log(req.body);
  console.log(req.params.flightId);
  Flight.findById(req.params.flightId)
  .then(flight => {
    console.log(flight);
    res.render('flights/show', {
      title: "flight details" ,
      flight: flight
    })
  })
  .catch(error => {
    console.log(error)
    res.redirect('/flights')
  })
}

function edit(req, res) {
  Flight.findById(req.params.flightId)
  .then(flight => {
    res.render('flights/edit' , {
      title: "Edit flight",
      flight
    })
  })
  .catch(error => {
    console.log(error)
    res.redirect('/flights')
  })
}

function update(req, res) {
  req.body.done = !!req.body.done
  for (let key in req.body) {
    if (req.body[key] === '') delete req.body[key]
  }
  Flight.findByIdAndUpdate(req.params.flightId,req.body,{new:true})
  .then(flight => {
    res.redirect(`/flights/${flight._id}`)
  })
  .catch(error => {
    console.log(error)
    res.redirect('/flights')
  })
}


export {
  index,
  newFlight as new,
  create,
  deleteFlight as delete,
  show,
  edit,
  update,
}