import {Router} from 'express';
import {signupService} from "./services/signup.service.js"
import {createOrupdate} from "./services/create_update.service.js"
import {retrieveUserService} from "./services/retrieveUser.service.js";
import {findEmail} from "./services/findEmail.service.js"

const router = Router();

router.post('/signup', signupService);
router.get('/by-email', findEmail);
router.put('/:id', createOrupdate);
router.get('/:id', retrieveUserService);


export default router;