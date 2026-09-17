const store = require('../data/dbStore');

exports.getAnalytics = (req, res) => {
  try {
    const { timeframe = 'all_time' } = req.query;
    const data = store.getAnalytics(timeframe);
    res.json({ success: true, timeframe, data });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};

exports.getMetricCampaigns = (req, res) => {
  try {
    const { metric = 'opened' } = req.params;
    const { search = '' } = req.query;
    const data = store.getMetricCampaigns(metric, search);
    res.json({ success: true, metric, count: data.length, data });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};

exports.getCredits = (req, res) => {
  try {
    const credits = store.getCredits();
    res.json({ success: true, data: credits });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};

exports.enrichLead = (req, res) => {
  try {
    const result = store.deductCredit(1);
    if (!result.success) {
      return res.status(400).json(result);
    }
    res.json({ success: true, message: 'Enrichment complete, 1 credit used', credits: result.credits });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};
