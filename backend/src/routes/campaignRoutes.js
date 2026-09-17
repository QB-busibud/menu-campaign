const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/campaignController');

router.get('/analytics', ctrl.getAnalytics);
router.get('/metrics/:metric', ctrl.getMetricCampaigns);
router.get('/credits', ctrl.getCredits);
router.post('/credits/enrich', ctrl.enrichLead);

module.exports = router;
