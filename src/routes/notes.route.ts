import { Request, Router, Response } from "express";
const router = Router();

router.get('/', (req: Request, res: Response) => {
  res.json('all notes');
})

router.post('/', (req: Request, res: Response) => {
  res.json('posted a note');
});

export default router;