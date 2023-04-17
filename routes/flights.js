import { Router } from 'express'
import * as flightsCtrl from "../controllers/flights.js"

const router = Router()

// GET localhost:3000/flights
router.get('/' , flightsCtrl.index)
router.post('/' , flightsCtrl.create)

router.get('/new' , flightsCtrl.new)

router.get('/:flightId' , flightsCtrl.show)
router.get('/:flightId/edit' , flightsCtrl.edit)

// GET localhost:3000/todos/:todoId
router.delete('/:flightId' , flightsCtrl.delete)
//router.put('/:flightId/edit' , todosCtrl.update)




export { 
  router 
}
