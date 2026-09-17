const store = require('../data/dbStore');

exports.getWorksheets = (req, res) => {
  try {
    const worksheets = store.getWorksheets();
   
    const categorized = {
      today: worksheets.filter(w => w.category === 'Today'),
      yesterday: worksheets.filter(w => w.category === 'Yesterday'),
      thisWeek: worksheets.filter(w => w.category === 'This Week'),
      thisMonth: worksheets.filter(w => w.category === 'This Month'),
      older: worksheets.filter(w => w.category === 'Older')
    };
    res.json({ success: true, count: worksheets.length, data: worksheets, categorized });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};

exports.getWorksheet = (req, res) => {
  try {
    const ws = store.getWorksheetById(req.params.id);
    if (!ws) return res.status(404).json({ success: false, message: 'Worksheet not found' });
    res.json({ success: true, data: ws });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};

exports.createWorksheet = (req, res) => {
  try {
    const { name, category = 'Today' } = req.body;
    const newWs = {
      id: `ws-${Date.now()}`,
      name: name || `Untitled Worksheet ${Math.floor(Math.random() * 100)}`,
      category,
      isDefault: false,
      totalRows: 0,
      columnsCount: 10,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };
    store.createWorksheet(newWs);
    res.status(201).json({ success: true, data: newWs });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};

exports.getLeads = (req, res) => {
  try {
    const { id } = req.params;
    const { search, page = 1, limit = 50 } = req.query;
    let leads = store.getLeads(id);

    if (search) {
      const q = search.toLowerCase();
      leads = leads.filter(l =>
        (l.firstName && l.firstName.toLowerCase().includes(q)) ||
        (l.lastName && l.lastName.toLowerCase().includes(q)) ||
        (l.location && l.location.toLowerCase().includes(q)) ||
        (l.headline && l.headline.toLowerCase().includes(q))
      );
    }

    res.json({ success: true, total: leads.length, data: leads });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};

exports.addLead = (req, res) => {
  try {
    const { id } = req.params;
    const currentLeads = store.getLeads(id);
    const newLead = {
      id: `lead-${Date.now()}`,
      worksheetId: id,
      index: currentLeads.length + 1,
      firstName: req.body.firstName || 'New',
      lastName: req.body.lastName || 'Lead',
      createdAt: 'March 17, 2025 at 5:11 PM',
      updatedAt: 'March 17, 2025 at 5:11 PM',
      location: req.body.location || 'San Francisco, CA',
      connectionsCount: req.body.connectionsCount || 500,
      linkedinUrl: req.body.linkedinUrl || 'https://www.linkedin.com/in/lead',
      headline: req.body.headline || 'Software Engineer',
      followerCount: req.body.followerCount || 1000,
      about: req.body.about || 'Prospect lead'
    };
    store.addLead(id, newLead);
    res.status(201).json({ success: true, data: newLead });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};

exports.updateLead = (req, res) => {
  try {
    const { id, leadId } = req.params;
    const updated = store.updateLead(id, leadId, req.body);
    if (!updated) return res.status(404).json({ success: false, message: 'Lead not found' });
    res.json({ success: true, data: updated });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};

exports.addColumn = (req, res) => {
  try {
    const { id } = req.params;
    const { label, key, type = 'text', width = 160 } = req.body;
    const colKey = key || label.toLowerCase().replace(/\s+/g, '_');
    const cols = store.addColumn(id, { key: colKey, label, type, width });
    res.json({ success: true, data: cols });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};
