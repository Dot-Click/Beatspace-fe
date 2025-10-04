// This script helps debug and refresh user data in the frontend
// Run this in your browser console on the frontend application

console.log("=== FRONTEND USER DATA REFRESH ===");

// Clear localStorage to force fresh data fetch
console.log("1. Clearing localStorage user data...");
localStorage.removeItem("user");

// Force a page reload to trigger fresh API calls
console.log("2. Reloading page to fetch fresh user data...");
setTimeout(() => {
  window.location.reload();
}, 1000);

console.log("Page will reload in 1 second to fetch updated subscription data...");
