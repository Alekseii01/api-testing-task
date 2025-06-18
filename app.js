const express = require('express');
const app = express();

app.get('/users/:id', (req, res) => {
  const id = parseInt(req.params.id);

  if (id === 1) {
    return res.status(200).json({
      id: 1,
      name: "Marsik Anniya",
      email: "love.roblox@migris.com",
      username: "hate_roblox",
      phone: "+8-800-555-3535",
      address: {
        street: "221b Baker Street",
        city: "London",
        state: "London",
        zipcode: "NW1 6XE",
        country: "United Kingdom"
      },
      company: {
        name: "Roblox Corporation",
        industry: "Scam",
        position: "Scam Specialist",
      },
      dob: "1987-10-13",
      profile_picture_url: "https://example.com/images/Marsik.jpg",
      is_active: true,
      created_at: "2024-01-01T12:00:00Z",
      updated_at: "2024-10-01T12:00:00Z",
      preferences: {
        language: "en",
        timezone: "United_Kingdom/London",
        notifications_enabled: true
      }
    });
  }

  if ([204, 403, 404, 502].includes(id)) {
    return res.status(id).json({
      error: `Error ${id}`,
      details: `Simulated error with status ${id}`
    });
  }

  res.status(400).json({ error: "Bad Request" });
});

module.exports = app;