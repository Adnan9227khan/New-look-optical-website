#!/bin/bash

# Script to create admin user for New Look Opticals
# Run this once to create your admin account

BACKEND_URL="${REACT_APP_BACKEND_URL:-http://localhost:8001}"

echo "==================================="
echo "New Look Opticals - Admin Setup"
echo "==================================="
echo ""

# Get admin credentials
read -p "Enter admin username: " USERNAME
read -sp "Enter admin password: " PASSWORD
echo ""

# Create admin user
echo "Creating admin user..."
RESPONSE=$(curl -s -X POST "${BACKEND_URL}/api/admin/create-admin?username=${USERNAME}&password=${PASSWORD}")

if echo "$RESPONSE" | grep -q "Admin created successfully"; then
    echo "✅ Admin user created successfully!"
    echo ""
    echo "You can now login at: ${REACT_APP_BACKEND_URL}/admin/login"
    echo "Username: ${USERNAME}"
    echo ""
    echo "IMPORTANT: For security, please comment out the /api/admin/create-admin route"
    echo "in /app/backend/routes.py after creating your admin user."
else
    echo "❌ Failed to create admin user"
    echo "Response: $RESPONSE"
fi
