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
      title: "flight detail" ,
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
      todo
    })
  })
  .catch(error => {
    console.log(error)
    res.redirect('/flights')
  })
}

// function update(req, res) {
//   req.body.done = !!req.body.done
//   Flight.findByIdAndUpdate(req.params.todoId,req.body,{new:true})
//   .then(todo => {
//     res.redirect(`/todos/${todo._id}`)
//   })
//   .catch(error => {
//     console.log(error)
//     res.redirect('/todos')
//   })
// }


export {
  index,
  newFlight as new,
  create,
  deleteFlight as delete,
  show,
  edit,
  //update,
}