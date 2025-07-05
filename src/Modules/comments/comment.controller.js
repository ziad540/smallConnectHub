import {Router} from 'express';
import {createCommentService} from "./services/createComment.service.js";
import {updateCommentService} from "./services/updateComment.service.js";
import {findOrCreateService} from "./services/findOrCreate.service.js";
import {retrieveCommentsBySpecificWordService} from "./services/retrieveCommentsBySpecificWord.service.js";
import {specificCommentService} from "./services/specificComment.service.js";
import {retrieve3MostRecentCommentsService} from "./services/retrieve-3-mostRecentComments.service.js";

const router = Router();

router.post('/', createCommentService);
router.patch('/:id', updateCommentService);
router.post('/find-or-create', findOrCreateService);
router.get('/search', retrieveCommentsBySpecificWordService);
router.get('/details/:id', specificCommentService);
router.get('/newest/:postId', retrieve3MostRecentCommentsService);
export default router;