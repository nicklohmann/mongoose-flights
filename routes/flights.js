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
// GET localhost:3000/flights/:flightId/edit
router.get('/:flightId/edit' , flightsCtrl.edit)
// DELETE localhost:3000/todos/:todoId
router.delete('/:flightId' , flightsCtrl.delete)
// PUT localhost:3000/flights/:flightsId
router.put('/:flightId' , flightsCtrl.update)

//router.put('/:flightId/edit' , todosCtrl.update)




export { 
  router 
}
