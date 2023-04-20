import { Router } from 'express'
import * as flightsCtrl from "../controllers/flights.js"

const router = Router()

// GET localhost:3000/flights
router.get('/' , flightsCtrl.index)
// GET localhost:3000/flights/new
router.get('/new' , flightsCtrl.new)
// GET localhost:3000/flights/:movieId
router.get('/:flightId/' , flightsCtrl.show)
// POST localhost:3000/flights
router.post('/' , flightsCtrl.create)
//Post /flights/:flightId/reviews
router.post("/:flightId/tickets" , flightsCtrl.createTicket)
//Post /flights/:flightId/reviews
router.post("/:flightId/meals" , flightsCtrl.addToMeal)
// GET localhost:3000/flights/:flightId/edit
router.get('/:flightId/edit' , flightsCtrl.edit)
// DELETE localhost:3000/todos/:todoId
router.delete('/:flightId' , flightsCtrl.delete)
// DELETE localhost:3000/movies/:movieId/reviews/:reviewId
router.delete('/:flightId/tickets/:ticketId', flightsCtrl.deleteTicket)
// PUT localhost:3000/flights/:flightsId
router.put('/:flightId' , flightsCtrl.update)





export { 
  router 
}
