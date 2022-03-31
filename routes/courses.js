import express from 'express';
import { getCourseById, getAllCourses, createCourse,  updateCourse, deleteCourse  } from './controllers/courses.js';

const router = express.Router();
//let users = []
router.get('/', getAllCourses);
router.post('/', createCourse);
router.get('/:id', getCourseById);
router.delete('/:id', deleteCourse);
router.patch('/:id', updateCourse);

export default router;