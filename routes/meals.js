import { Router } from 'express'
import * as mealsCtrl from "../controllers/meals.js"

const router = Router()

// GET localhost:3000/
router.get('/new' , mealsCtrl.new)

router.post('/' , mealsCtrl.create)



export { router }
