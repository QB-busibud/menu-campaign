const fs = require('fs');
const path = require('path');

const STORE_PATH = path.join(__dirname, 'store.json');

const defaultData = {
  worksheets: [
    {
      id: 'ws-06',
      name: 'Untitled Worksheet 06',
      category: 'Yesterday',
      isDefault: false,
      totalRows: 14,
      columnsCount: 10,
      createdAt: '2025-03-17T17:11:00.000Z',
      updatedAt: '2025-03-17T17:11:00.000Z',
      columns: [
        { key: 'select', label: '', width: 50, type: 'checkbox' },
        { key: 'index', label: '#', width: 50, type: 'index' },
        { key: 'firstName', label: 'First name', width: 140, type: 'text' },
        { key: 'createdAt', label: 'Created at', width: 220, type: 'date' },
        { key: 'updatedAt', label: 'Updated at', width: 220, type: 'date' },
        { key: 'lastName', label: 'Last name', width: 140, type: 'text' },
        { key: 'location', label: 'Location', width: 180, type: 'text' },
        { key: 'connectionsCount', label: 'Connections Count', width: 160, type: 'number' },
        { key: 'linkedinUrl', label: 'LinkedIn URL', width: 240, type: 'link' },
        { key: 'headline', label: 'Headline', width: 260, type: 'text' },
        { key: 'followerCount', label: 'Follower Count', width: 150, type: 'number' },
        { key: 'about', label: 'About', width: 300, type: 'text' }
      ]
    },
    {
      id: 'ws-04',
      name: 'Untitled Worksheet 04',
      category: 'Yesterday',
      isDefault: false,
      totalRows: 14,
      columnsCount: 10,
      createdAt: '2025-03-17T17:11:00.000Z',
      updatedAt: '2025-03-17T17:11:00.000Z',
      columns: [
        { key: 'select', label: '', width: 50, type: 'checkbox' },
        { key: 'index', label: '#', width: 50, type: 'index' },
        { key: 'firstName', label: 'First name', width: 140, type: 'text' },
        { key: 'createdAt', label: 'Created at', width: 220, type: 'date' },
        { key: 'updatedAt', label: 'Updated at', width: 220, type: 'date' },
        { key: 'lastName', label: 'Last name', width: 140, type: 'text' },
        { key: 'location', label: 'Location', width: 180, type: 'text' },
        { key: 'connectionsCount', label: 'Connections Count', width: 160, type: 'number' },
        { key: 'linkedinUrl', label: 'LinkedIn URL', width: 240, type: 'link' },
        { key: 'headline', label: 'Headline', width: 260, type: 'text' }
      ]
    },
    { id: 'ws-default', name: 'Default Worksheet', category: 'Today', isDefault: true, totalRows: 5, columnsCount: 8, createdAt: '2025-03-17T17:11:00.000Z', updatedAt: '2025-03-17T17:11:00.000Z' },
    { id: 'ws-05', name: 'Untitled Worksheet 05', category: 'Yesterday', isDefault: false, totalRows: 8, columnsCount: 8, createdAt: '2025-03-17T17:11:00.000Z', updatedAt: '2025-03-17T17:11:00.000Z' },
    { id: 'ws-03', name: 'Untitled Worksheet 03', category: 'Yesterday', isDefault: false, totalRows: 12, columnsCount: 8, createdAt: '2025-03-17T17:11:00.000Z', updatedAt: '2025-03-17T17:11:00.000Z' },
    { id: 'ws-15', name: 'Untitled Worksheet 15', category: 'This Month', isDefault: false, totalRows: 20, columnsCount: 8, createdAt: '2025-03-17T17:11:00.000Z', updatedAt: '2025-03-17T17:11:00.000Z' },
    { id: 'ws-245', name: 'Untitled Worksheet 245', category: 'Older', isDefault: false, totalRows: 10, columnsCount: 8, createdAt: '2025-03-17T17:11:00.000Z', updatedAt: '2025-03-17T17:11:00.000Z' }
  ],
  leads: {
    'ws-06': [
      { id: 'lead-1', worksheetId: 'ws-06', index: 1, firstName: 'John', lastName: 'John', createdAt: 'March 17, 2025 at 5:11 PM', updatedAt: 'March 17, 2025 at 5:11 PM', location: 'San Francisco, CA', connectionsCount: 500, linkedinUrl: 'https://www.linkedin.com/in/john-tech', headline: 'ex-Google Gemini, Meta, Staff Engineer', followerCount: 1420, about: 'Building next-gen distributed systems and AI workflows.' },
      { id: 'lead-2', worksheetId: 'ws-06', index: 2, firstName: 'Doe', lastName: 'Doe', createdAt: 'March 17, 2025 at 5:11 PM', updatedAt: 'March 17, 2025 at 5:11 PM', location: 'New York, NY', connectionsCount: 420, linkedinUrl: 'https://www.linkedin.com/in/doe-sales', headline: 'VP of Growth & Operations', followerCount: 980, about: 'Driving enterprise acquisition and pipeline optimization.' },
      { id: 'lead-3', worksheetId: 'ws-06', index: 3, firstName: 'Doe 1', lastName: 'Doe 1', createdAt: 'March 17, 2025 at 5:11 PM', updatedAt: 'March 17, 2025 at 5:11 PM', location: 'Austin, TX', connectionsCount: 650, linkedinUrl: 'https://www.linkedin.com/in/doe1-cloud', headline: 'Cloud Architect & Tech Lead', followerCount: 2100, about: 'Kubernetes, multi-cloud strategy, infrastructure as code.' },
      { id: 'lead-4', worksheetId: 'ws-06', index: 4, firstName: 'John 1', lastName: 'John 1', createdAt: 'March 17, 2025 at 5:11 PM', updatedAt: 'March 17, 2025 at 5:11 PM', location: 'Seattle, WA', connectionsCount: 380, linkedinUrl: 'https://www.linkedin.com/in/john1-lead', headline: 'Product Manager @ SaaS Platform', followerCount: 1150, about: 'Leading product initiatives and B2B growth funnels.' },
      { id: 'lead-5', worksheetId: 'ws-06', index: 5, firstName: 'Alexis', lastName: 'Alexis', createdAt: 'March 17, 2025 at 5:11 PM', updatedAt: 'March 17, 2025 at 5:11 PM', location: 'San Jose, CA', connectionsCount: 520, linkedinUrl: 'https://www.linkedin.com/in/alexis-founder', headline: 'Founder & CEO | AI Acceleration', followerCount: 3400, about: 'Bootstrapping scalable B2B enterprise intelligence engines.' },
      { id: 'lead-6', worksheetId: 'ws-06', index: 6, firstName: 'John 1', lastName: 'John 1', createdAt: 'March 17, 2025 at 5:11 PM', updatedAt: 'March 17, 2025 at 5:11 PM', location: 'Boston, MA', connectionsCount: 410, linkedinUrl: 'https://www.linkedin.com/in/john1-sales', headline: 'Director of Business Development', followerCount: 890, about: 'Strategic alliances, account expansion and partner ecosystems.' },
      { id: 'lead-7', worksheetId: 'ws-06', index: 7, firstName: 'name 3', lastName: 'name 3', createdAt: 'March 17, 2025 at 5:11 PM', updatedAt: 'March 17, 2025 at 5:11 PM', location: 'Chicago, IL', connectionsCount: 310, linkedinUrl: 'https://www.linkedin.com/in/name3', headline: 'Senior Account Executive', followerCount: 650, about: 'Consultative B2B software sales & revenue acceleration.' },
      { id: 'lead-8', worksheetId: 'ws-06', index: 8, firstName: 'name 4', lastName: 'name 4', createdAt: 'March 17, 2025 at 5:11 PM', updatedAt: 'March 17, 2025 at 5:11 PM', location: 'Denver, CO', connectionsCount: 290, linkedinUrl: 'https://www.linkedin.com/in/name4', headline: 'Customer Success Specialist', followerCount: 450, about: 'Customer onboarding, churn reduction, enterprise retention.' },
      { id: 'lead-9', worksheetId: 'ws-06', index: 9, firstName: 'Micro', lastName: 'Micro', createdAt: 'March 17, 2025 at 5:11 PM', updatedAt: 'March 17, 2025 at 5:11 PM', location: 'San Francisco, CA', connectionsCount: 800, linkedinUrl: 'https://www.linkedin.com/in/micro', headline: 'Principal Data Engineer', followerCount: 2800, about: 'Real-time analytics pipelines and distributed warehousing.' },
      { id: 'lead-10', worksheetId: 'ws-06', index: 10, firstName: 'Name 5', lastName: 'Name 5', createdAt: 'March 17, 2025 at 5:11 PM', updatedAt: 'March 17, 2025 at 5:11 PM', location: 'Atlanta, GA', connectionsCount: 450, linkedinUrl: 'https://www.linkedin.com/in/name5', headline: 'Marketing Director', followerCount: 1300, about: 'Omnichannel B2B demand generation and brand positioning.' },
      { id: 'lead-11', worksheetId: 'ws-06', index: 11, firstName: 'John', lastName: 'John', createdAt: 'March 17, 2025 at 5:11 PM', updatedAt: 'March 17, 2025 at 5:11 PM', location: 'Miami, FL', connectionsCount: 330, linkedinUrl: 'https://www.linkedin.com/in/john-fin', headline: 'Financial Controller', followerCount: 710, about: 'SaaS metrics, unit economics, and operational scaling.' },
      { id: 'lead-12', worksheetId: 'ws-06', index: 12, firstName: 'Doe', lastName: 'Doe', createdAt: 'March 17, 2025 at 5:11 PM', updatedAt: 'March 17, 2025 at 5:11 PM', location: 'Toronto, Canada', connectionsCount: 520, linkedinUrl: 'https://www.linkedin.com/in/doe-canada', headline: 'Solutions Engineer', followerCount: 990, about: 'Bridging engineering and customer value delivery.' },
      { id: 'lead-13', worksheetId: 'ws-06', index: 13, firstName: 'Doe 1', lastName: 'Doe 1', createdAt: 'March 17, 2025 at 5:11 PM', updatedAt: 'March 17, 2025 at 5:11 PM', location: 'Vancouver, Canada', connectionsCount: 480, linkedinUrl: 'https://www.linkedin.com/in/doe1-van', headline: 'DevOps Lead', followerCount: 1120, about: 'CI/CD, observability, zero-downtime deployments.' },
      { id: 'lead-14', worksheetId: 'ws-06', index: 14, firstName: 'John', lastName: 'John', createdAt: 'March 17, 2025 at 5:11 PM', updatedAt: 'March 17, 2025 at 5:11 PM', location: 'London, UK', connectionsCount: 620, linkedinUrl: 'https://www.linkedin.com/in/john-uk', headline: 'International Expansion Lead', followerCount: 1800, about: 'EMEA market entry and strategic growth operations.' }
    ],
    'ws-04': [
      { id: 'lead-04-1', worksheetId: 'ws-04', index: 1, firstName: 'John', lastName: 'John', createdAt: 'March 17, 2025 at 5:11 PM', updatedAt: 'March 17, 2025 at 5:11 PM', location: 'San Francisco, CA', connectionsCount: 500, linkedinUrl: 'https://www.linkedin.com/in/john-tech', headline: 'ex-Google Gemini, Meta, Staff Engineer' },
      { id: 'lead-04-2', worksheetId: 'ws-04', index: 2, firstName: 'Doe', lastName: 'Doe', createdAt: 'March 17, 2025 at 5:11 PM', updatedAt: 'March 17, 2025 at 5:11 PM', location: 'New York, NY', connectionsCount: 420, linkedinUrl: 'https://www.linkedin.com/in/doe-sales', headline: 'VP of Growth & Operations' },
      { id: 'lead-04-3', worksheetId: 'ws-04', index: 3, firstName: 'John 1', lastName: 'Doe 1', createdAt: 'March 17, 2025 at 5:11 PM', updatedAt: 'March 17, 2025 at 5:11 PM', location: 'Austin, TX', connectionsCount: 650, linkedinUrl: 'https://www.linkedin.com/in/john1-lead', headline: 'Cloud Architect & Tech Lead' },
      { id: 'lead-04-4', worksheetId: 'ws-04', index: 4, firstName: 'John Doe', lastName: 'John 1', createdAt: 'March 17, 2025 at 5:11 PM', updatedAt: 'March 17, 2025 at 5:11 PM', location: 'Seattle, WA', connectionsCount: 380, linkedinUrl: 'https://www.linkedin.com/in/johndoe', headline: 'Product Manager @ SaaS Platform' },
      { id: 'lead-04-5', worksheetId: 'ws-04', index: 5, firstName: 'Alexis', lastName: 'Alexis', createdAt: 'March 17, 2025 at 5:11 PM', updatedAt: 'March 17, 2025 at 5:11 PM', location: 'San Jose, CA', connectionsCount: 520, linkedinUrl: 'https://www.linkedin.com/in/alexis-founder', headline: 'Founder & CEO | AI Acceleration' },
      { id: 'lead-04-6', worksheetId: 'ws-04', index: 6, firstName: 'John 1', lastName: 'John 1', createdAt: 'March 17, 2025 at 5:11 PM', updatedAt: 'March 17, 2025 at 5:11 PM', location: 'Boston, MA', connectionsCount: 410, linkedinUrl: 'https://www.linkedin.com/in/john1-sales', headline: 'Director of Business Development' },
      { id: 'lead-04-7', worksheetId: 'ws-04', index: 7, firstName: 'name 3', lastName: 'name 3', createdAt: 'March 17, 2025 at 5:11 PM', updatedAt: 'March 17, 2025 at 5:11 PM', location: 'Chicago, IL', connectionsCount: 310, linkedinUrl: 'https://www.linkedin.com/in/name3', headline: 'Senior Account Executive' },
      { id: 'lead-04-8', worksheetId: 'ws-04', index: 8, firstName: 'name 4', lastName: 'name 4', createdAt: 'March 17, 2025 at 5:11 PM', updatedAt: 'March 17, 2025 at 5:11 PM', location: 'Denver, CO', connectionsCount: 290, linkedinUrl: 'https://www.linkedin.com/in/name4', headline: 'Customer Success Specialist' },
      { id: 'lead-04-9', worksheetId: 'ws-04', index: 9, firstName: 'Micro', lastName: 'Micro', createdAt: 'March 17, 2025 at 5:11 PM', updatedAt: 'March 17, 2025 at 5:11 PM', location: 'San Francisco, CA', connectionsCount: 800, linkedinUrl: 'https://www.linkedin.com/in/micro', headline: 'Principal Data Engineer' },
      { id: 'lead-04-10', worksheetId: 'ws-04', index: 10, firstName: 'Name 5', lastName: 'Name 5', createdAt: 'March 17, 2025 at 5:11 PM', updatedAt: 'March 17, 2025 at 5:11 PM', location: 'Atlanta, GA', connectionsCount: 450, linkedinUrl: 'https://www.linkedin.com/in/name5', headline: 'Marketing Director' },
      { id: 'lead-04-11', worksheetId: 'ws-04', index: 11, firstName: 'John', lastName: 'John', createdAt: 'March 17, 2025 at 5:11 PM', updatedAt: 'March 17, 2025 at 5:11 PM', location: 'Miami, FL', connectionsCount: 330, linkedinUrl: 'https://www.linkedin.com/in/john-fin', headline: 'Financial Controller' },
      { id: 'lead-04-12', worksheetId: 'ws-04', index: 12, firstName: 'Doe', lastName: 'Doe', createdAt: 'March 17, 2025 at 5:11 PM', updatedAt: 'March 17, 2025 at 5:11 PM', location: 'Toronto, Canada', connectionsCount: 520, linkedinUrl: 'https://www.linkedin.com/in/doe-canada', headline: 'Solutions Engineer' },
      { id: 'lead-04-13', worksheetId: 'ws-04', index: 13, firstName: 'Doe 1', lastName: 'Doe 1', createdAt: 'March 17, 2025 at 5:11 PM', updatedAt: 'March 17, 2025 at 5:11 PM', location: 'Vancouver, Canada', connectionsCount: 480, linkedinUrl: 'https://www.linkedin.com/in/doe1-van', headline: 'DevOps Lead' }
    ]
  },
  analytics: {
    'all_time': {
      title: 'ALL CAMPAIGNS ANALYTICS (1200)',
      subtitle: 'Combined performance across all campaigns',
      totalCount: 1200,
      replyPercentage: 16.9,
      repliesCount: 298,
      sentTotal: 1842,
      openPercentage: 68.0,
      opened: 500,
      unsubscribed: 250,
      bounced: 200,
      sent: 412,
      replied: 250,
      websiteVisited: 200
    },
    'last_30_days': {
      title: 'ALL CAMPAIGNS ANALYTICS (600)',
      subtitle: 'Combined performance across all campaigns',
      totalCount: 600,
      replyPercentage: 16.9,
      repliesCount: 298,
      sentTotal: 1842,
      openPercentage: 68.0,
      opened: 500,
      sent: 200,
      replied: 250,
      bounced: 250,
      websiteVisited: 200,
      unsubscribed: 250
    },
    'last_7_days': {
      title: 'ALL CAMPAIGNS ANALYTICS (250)',
      subtitle: 'Combined performance across all campaigns',
      totalCount: 250,
      replyPercentage: 18.2,
      repliesCount: 95,
      sentTotal: 520,
      openPercentage: 72.5,
      opened: 180,
      sent: 80,
      replied: 95,
      bounced: 45,
      websiteVisited: 70,
      unsubscribed: 30
    }
  },
  openedCampaigns: [
    {
      id: 'camp-1',
      worksheetId: 'ws-04',
      worksheetName: 'Untitled Worksheet 04',
      sentCount: 124,
      userName: 'John',
      email: 'John@gmail.com',
      openedCount: 88,
      lastActive: '10 mins ago'
    },
    {
      id: 'camp-2',
      worksheetId: 'ws-15',
      worksheetName: 'Untitled Worksheet 15',
      sentCount: 124,
      userName: 'Doe',
      email: 'Doe@gmail.com',
      openedCount: 94,
      lastActive: '25 mins ago'
    },
    {
      id: 'camp-3',
      worksheetId: 'ws-04',
      worksheetName: 'Untitled Worksheet 04',
      sentCount: 124,
      userName: 'John 1',
      email: 'John@gmail.com',
      openedCount: 76,
      lastActive: '1 hour ago'
    },
    {
      id: 'camp-4',
      worksheetId: 'sale-01',
      worksheetName: 'Sale campaign 01',
      sentCount: 124,
      userName: 'Doe',
      email: 'Doe@gmail.com',
      openedCount: 102,
      lastActive: '2 hours ago'
    },
    {
      id: 'camp-5',
      worksheetId: 'ws-04',
      worksheetName: 'Untitled Worksheet 04',
      sentCount: 124,
      userName: 'John',
      email: 'John@gmail.com',
      openedCount: 65,
      lastActive: '3 hours ago'
    },
    {
      id: 'camp-6',
      worksheetId: 'sale-01',
      worksheetName: 'Sale campaign 01',
      sentCount: 124,
      userName: 'Doe',
      email: 'Doe@gmail.com',
      openedCount: 54,
      lastActive: 'Yesterday'
    },
    {
      id: 'camp-7',
      worksheetId: 'ws-15',
      worksheetName: 'Untitled Worksheet 15',
      sentCount: 124,
      userName: 'John 1',
      email: 'John@gmail.com',
      openedCount: 82,
      lastActive: '2 days ago'
    }
  ],
  userTickets: {
    'ws-04': [
      {
        id: 'tick-1',
        userName: 'John',
        email: 'John@gmail.com',
        ticketNumber: 'TICK-8021',
        status: 'Open',
        subject: 'Product enquiry regarding Enterprise API quota and enrichment limits',
        messages: [
          { sender: 'John', time: '10:14 AM', text: 'Hi team, I opened your recent outreach email regarding the LinkedIn enrichment tool. Could you clarify how credit consumption scales for bulk exports?' },
          { sender: 'Support Agent', time: '10:22 AM', text: 'Hello John! Thank you for reaching out. Each verified lead enrichment consumes 1 credit from your available pool. Bulk exports include tiered volume discounts!' }
        ]
      },
      {
        id: 'tick-2',
        userName: 'John1',
        email: 'Johndoe@gmail.com',
        ticketNumber: 'TICK-8022',
        status: 'In Progress',
        subject: 'Follow-up on integration with CRM webhook endpoint',
        messages: [
          { sender: 'John1', time: 'Yesterday 4:30 PM', text: 'We received the campaign email and tested the webhook flow. Everything looks great!' }
        ]
      },
      {
        id: 'tick-3',
        userName: 'user name',
        email: 'Username@gmail.com',
        ticketNumber: 'TICK-8023',
        status: 'Resolved',
        subject: 'General inquiry on automated prospecting cadence',
        messages: [
          { sender: 'user name', time: '2 days ago', text: 'Looking forward to scheduling the product walkthrough demo.' }
        ]
      },
      {
        id: 'tick-4',
        userName: 'Doe',
        email: 'Doe@gmail.com',
        ticketNumber: 'TICK-8024',
        status: 'Open',
        subject: 'Copy Transferred Ticket - Hello this is other mail',
        messages: [
          { sender: 'Doe', time: 'March 17, 2025', text: 'Hello, this is other mail. Confirming receipt of transfer ticket.' }
        ]
      }
    ]
  },
  credits: {
    available: 78,
    total: 100,
    used: 22
  }
};

class DBStore {
  constructor() {
    this.init();
  }

  init() {
    if (!fs.existsSync(STORE_PATH)) {
      this.data = JSON.parse(JSON.stringify(defaultData));
      this.save();
    } else {
      try {
        this.data = JSON.parse(fs.readFileSync(STORE_PATH, 'utf-8'));
      } catch (e) {
        this.data = JSON.parse(JSON.stringify(defaultData));
        this.save();
      }
    }
  }

  save() {
    fs.writeFileSync(STORE_PATH, JSON.stringify(this.data, null, 2), 'utf-8');
  }

  getWorksheets() {
    return this.data.worksheets;
  }

  getWorksheetById(id) {
    return this.data.worksheets.find(w => w.id === id);
  }

  createWorksheet(ws) {
    this.data.worksheets.unshift(ws);
    if (!this.data.leads[ws.id]) {
      this.data.leads[ws.id] = [];
    }
    this.save();
    return ws;
  }

  getLeads(worksheetId) {
    return this.data.leads[worksheetId] || [];
  }

  addLead(worksheetId, lead) {
    if (!this.data.leads[worksheetId]) {
      this.data.leads[worksheetId] = [];
    }
    this.data.leads[worksheetId].push(lead);
    const ws = this.getWorksheetById(worksheetId);
    if (ws) ws.totalRows = this.data.leads[worksheetId].length;
    this.save();
    return lead;
  }

  updateLead(worksheetId, leadId, updates) {
    const list = this.data.leads[worksheetId] || [];
    const idx = list.findIndex(l => l.id === leadId);
    if (idx !== -1) {
      list[idx] = { ...list[idx], ...updates, updatedAt: 'March 17, 2025 at 5:11 PM' };
      this.save();
      return list[idx];
    }
    return null;
  }

  addColumn(worksheetId, column) {
    const ws = this.getWorksheetById(worksheetId);
    if (ws) {
      if (!ws.columns) ws.columns = [];
      ws.columns.push(column);
      ws.columnsCount = ws.columns.length;
      this.save();
      return ws.columns;
    }
    return null;
  }

  getAnalytics(timeframe = 'all_time') {
    return this.data.analytics[timeframe] || this.data.analytics['all_time'];
  }

  getMetricCampaigns(metric, search = '') {
    let list = this.data.openedCampaigns;
    if (search && search.trim()) {
      const q = search.trim().toLowerCase();
      list = list.filter(item =>
        item.worksheetName.toLowerCase().includes(q) ||
        item.userName.toLowerCase().includes(q) ||
        item.email.toLowerCase().includes(q)
      );
    }
    return list;
  }

  getTickets(worksheetId = 'ws-04') {
    return this.data.userTickets[worksheetId] || this.data.userTickets['ws-04'] || [];
  }

  getCredits() {
    return this.data.credits;
  }

  deductCredit(amount = 1) {
    if (this.data.credits.available >= amount) {
      this.data.credits.available -= amount;
      this.data.credits.used += amount;
      this.save();
      return { success: true, credits: this.data.credits };
    }
    return { success: false, message: 'Insufficient credits', credits: this.data.credits };
  }
}

const storeInstance = new DBStore();
module.exports = storeInstance;
