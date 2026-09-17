const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/worksheetController');

router.get('/', ctrl.getWorksheets);
router.post('/', ctrl.createWorksheet);
router.get('/:id', ctrl.getWorksheet);
router.get('/:id/leads', ctrl.getLeads);
router.post('/:id/leads', ctrl.addLead);
router.patch('/:id/leads/:leadId', ctrl.updateLead);
router.post('/:id/columns', ctrl.addColumn);

module.exports = router;
