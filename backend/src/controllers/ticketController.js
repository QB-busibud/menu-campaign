const store = require('../data/dbStore');

exports.getTickets = (req, res) => {
  try {
    const { worksheetId = 'ws-04' } = req.query;
    const tickets = store.getTickets(worksheetId);
    res.json({ success: true, count: tickets.length, data: tickets });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};

exports.getTicketById = (req, res) => {
  try {
    const tickets = store.getTickets('ws-04');
    const ticket = tickets.find(t => t.id === req.params.id);
    if (!ticket) return res.status(404).json({ success: false, message: 'Ticket not found' });
    res.json({ success: true, data: ticket });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};
