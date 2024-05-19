const express = require('express');
const router = express.Router();
const ticketController = require('../controllers/ticketController');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/', authMiddleware, ticketController.createTicket);
router.get('/', authMiddleware, ticketController.getTickets);
router.get('/:id', authMiddleware, ticketController.getTicket);

module.exports = router;
