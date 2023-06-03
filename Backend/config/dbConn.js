// const Pool = require('pg').Pool
// const pool = new Pool({
//   user: 'me',
//   host: 'localhost',
//   database: 'api',
//   password: 'password',
//   port: 5432,
// })

const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'RGM Rentals',
  password: '12345',
  port: 5432,
})

const getlandlord = (request, response) => {
    pool.query('SELECT * FROM landlord ORDER BY id ASC', (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
}

const getlandlordById = (request, response) => {
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
  
    pool.query('INSERT INTO landlord (username, email, password) VALUES ($1, $2) RETURNING *', [username, email, password], (error, results) => {
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
      'UPDATE landlord SET name = $1, email = $2 WHERE id = $3',
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