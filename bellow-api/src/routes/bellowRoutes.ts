import { Router } from 'express';
import { addBellow, editBellow, deleteBellow, getAllBellows, getOneBellow } from '../controllers/bellowController';

const router = Router();

router.get('/', getAllBellows);
router.get('/:id', getOneBellow);
router.post('/', addBellow);
router.put('/:id', editBellow);
router.delete('/:id', deleteBellow);

export default router;