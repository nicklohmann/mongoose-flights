import { Flight } from "../models/flight.js"; 
import { Meal } from "../models/meal.js";

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
  let { flightId } = req.params
  Flight.findById(req.params.flightId)
  .populate('meal')
  .then(flight => {
    Meal.find({_id: {$nin: flight.meal}})
    .then(meals => {
      res.render('flights/show', { 
        title: 'Flight Detail', 
        flight,
        meals
      })
    })
    .catch(err => {
      console.log(err)
      res.sen("MEAL INFO NOT FOUND")
      res.redirect("/flights")    
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect("/flights")
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
function createTicket(req, res) {
  Flight.findById(req.params.flightId)
  .then(flight => {
    flight.tickets.push(req.body)
    flight.save()
    .then(()=> {
      res.redirect(`/flights/${flight._id}`)
    })
    .catch(err => {
      console.log(err)
      res.redirect('/')
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/')
  })
}
function deleteTicket(req, res) {
  Flight.findById(req.params.ticketId)
  .then(ticket => {
    ticket.reviews.remove(req.params.ticketId)
    // movie.reviews.id(req.params.reviewId).deleteOne()
    ticket.save()
    .then(() => {
      res.redirect(`/flights/${flight._id}`)
    })
    .catch(err => {
      console.log(err)
      res.redirect('/flights')
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/flights')
  })
}

function addToMeal(req, res) {
  let { flightId } = req.params;
  let { mealId } = req.body;

  Flight.findById(flightId)
    .then((flight) => {
      flight.meal.push(req.body.mealId);
      flight
        .save()
        .then(() => {
          res.redirect(`/flights/${flight._id}`);
        })
        .catch((err) => {
          console.log(err);
          
          res.redirect("/flights");
        });
    })
    .catch((err) => {
      console.log(err);
      res.redirect("/flights");
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
  createTicket,
  deleteTicket,
  addToMeal,
}