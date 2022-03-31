import { v4 as uuidv4 } from 'uuid';
import pg from 'pg'; // <-- npm install pg
// CONNECTION CONFIGURATION
const config = {
    user: "postgres",   // default process.env.PGUSER 
    password: "1234qqqQ",   // default process.env.PGPASSWORD
    host: "localhost",  // default process.env.PGHOST
    database: "postgres",   // default process.env.PGDATABASE
    port: "5432"        // default process.env.PGPORT
}
const pool = new pg.Pool(config);

let users = []

export const getAllCourses = (req, res) => {
    pool.query('SELECT  course_id, course_name, course_topic FROM  courses', (err, results) => {
        if (err) {
            throw err;
        }
        res.status(200).json(results.rows);
    })
}
export const createCourse = (req, res) => {
    const { course_name, course_topic } = req.body

    pool.query('INSERT INTO courses (course_name, course_topic) VALUES ($1, $2) RETURNING course_id', [course_name, course_topic], (error, results) => {
        if (error) {
            throw error
        }
        res.status(201).json(results.rows)
    })
}
export const getCourseById = (req, res) => {
    const id = parseInt(req.params.id)
    pool.query('SELECT * FROM courses WHERE course_id = $1', [id], (error, results) => {
        if (error) {
            throw error
        }
        res.status(200).json(results.rows)
    })
}
export const deleteCourse = (req, res) => {
    const course_id = parseInt(req.params.id)

    pool.query('DELETE FROM courses WHERE course_id = $1', [course_id], (error, results) => {
      if (error) {
        throw error
      }
      res.status(200).send(`User deleted with ID: ${course_id}`)
    })
}
export const updateCourse = (req, res) => {
    const course_id = parseInt(req.params.id)
    const { course_name, course_topic } = req.body

    pool.query(
        'UPDATE courses SET course_name = $1, course_topic = $2 WHERE course_id = $3',
        [course_name, course_topic, course_id],
        (error, results) => {
            if (error) {
                throw error
            }
            res.status(200).send(`User modified with ID: ${course_id}`)
        }
    )

}