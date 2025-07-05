import {Router} from 'express';
import {newPostService} from "./services/newPost.service.js";
import {deletePostService} from "./services/deletePost.service.js";
import {retrievePostsService} from "./services/retrievePosts.service.js";
import {retrieveAndCountCommentsService} from "./services/retrieveAndCountComments.service.js";

const router = Router();
router.post('/', newPostService);
router.get('/details', retrievePostsService);
router.get('/comment-count',retrieveAndCountCommentsService)
router.delete('/:id', deletePostService);


export default router;