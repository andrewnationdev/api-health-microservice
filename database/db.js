const database = {
  endpoints: [
    {
      id: 1,
      name: 'Authentication Service',
      url: 'https://api.myapp.com/v1/auth/health',
      group: 'Core Infrastructure',
      status: 'operational', // operational | degraded | down
      statusCode: 200,
      latency: '45ms',
      uptime: '99.98%',
      lastChecked: '15s ago',
      interval: '1m',
      history: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1] // 1 = operational, 2 = degraded, 0 = down
    },
    {
      id: 2,
      name: 'Payment Gateway Webhook',
      url: 'https://pay.myapp.com/webhooks/status',
      group: 'Financial Services',
      status: 'operational',
      statusCode: 200,
      latency: '182ms',
      uptime: '99.91%',
      lastChecked: '42s ago',
      interval: '30s',
      history: [1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    },
    {
      id: 3,
      name: 'User Data Storage API',
      url: 'https://db-proxy.internal/v2/cluster/ping',
      group: 'Database Layer',
      status: 'degraded',
      statusCode: 200,
      latency: '840ms',
      uptime: '98.45%',
      lastChecked: '5s ago',
      interval: '1m',
      history: [1, 1, 1, 1, 1, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 1, 1, 1, 1]
    },
    {
      id: 4,
      name: 'AI Recommendation Worker',
      url: 'https://ai-ml.myapp.com/recommend/status',
      group: 'ML Services',
      status: 'down',
      statusCode: 503,
      latency: '0ms',
      uptime: '94.12%',
      lastChecked: '2m ago',
      interval: '5m',
      history: [1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0]
    },
    {
      id: 5,
      name: 'CDN Asset Proxy',
      url: 'https://static-cdn.myapp.com/healthz',
      group: 'Frontend Delivery',
      status: 'operational',
      statusCode: 200,
      latency: '18ms',
      uptime: '100.0%',
      lastChecked: '10s ago',
      interval: '1m',
      history: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    }
  ],

  "incidents": [
    {
      id: 101,
      title: 'High Latency on User Data Storage',
      service: 'User Data Storage API',
      status: 'investigating',
      time: '12 minutes ago',
      impact: 'Minor'
    },
    {
      id: 102,
      title: '503 Service Unavailable Error',
      service: 'AI Recommendation Worker',
      status: 'identified',
      time: '45 minutes ago',
      impact: 'Major'
    },
    {
      id: 103,
      title: 'Scheduled Maintenance Completed',
      service: 'Database Layer',
      status: 'resolved',
      time: '5 hours ago',
      impact: 'None'
    }
  ]
}