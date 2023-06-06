// const { Pool } = require('pg');
const pool = require('../config/dbConn');


const getlandlord = (request, response) => {
    pool.query('SELECT * FROM landlord ORDER BY id ASC', (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
}

const getlandlordById = (request, response) => {


    // console.log(request.params.id)
    const id = parseInt(request.params.id)
  
    pool.query('SELECT * FROM landlord WHERE id = $1', [id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
}


const createlandlord = (request, response) => {
    const { username, email, password } = request.body
  
    pool.query('INSERT INTO landlord (username, email, password) VALUES ($1, $2, $3) RETURNING *', [username, email, password], (error, results) => {
      if (error) {
        throw error
      }
      response.status(201).send(`Landlord added with ID: ${results.rows[0].id}`)
    })
}

const updatelandlord = (request, response) => {
    const id = parseInt(request.params.id)
    const { username, email, password} = request.body
  
    pool.query(
      'UPDATE landlord SET username = $1, email = $2, password = $3 WHERE id = $4',
      [username, email, password,id],
      (error, results) => {
        if (error) {
          throw error
        }
        response.status(200).send(`Landlord modified with ID: ${id}`)
      }
    )
}

const deletelandlord = (request, response) => {
    const id = parseInt(request.params.id)
  
    pool.query('DELETE FROM landlord WHERE id = $1', [id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(`Landlord deleted with ID: ${id}`)
    })
}

module.exports = {
    getlandlord,
    getlandlordById,
    createlandlord,
    updatelandlord,
    deletelandlord,
}