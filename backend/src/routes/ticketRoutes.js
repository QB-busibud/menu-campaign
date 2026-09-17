const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/ticketController');

router.get('/', ctrl.getTickets);
router.get('/:id', ctrl.getTicketById);

module.exports = router;
