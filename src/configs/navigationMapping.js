/**
 * Navigation Mapping Configuration
 * Use this file to define where the 'Back' button should take the user
 * from any given path.
 * 
 * Format: 'current-path': 'target-path'
 * Use -1 for browser back (window.history.back)
 */

export const BACK_NAVIGATION_MAP = {
  // Comics
  '/comics': '/menu',
  '/comics/select': '/comics',
  '/comics/select-chapter': '/comics/select',
  '/comics/chapter': '/comics/select-chapter',
  '/comics/read': -1,

  // Beats
  "/menu": "/",
  "/beats": "/menu",
  '/beatplay': '/beats',

  // Games
  '/games': '/menu',

  // Merch / Shop
  '/shop-list': '/menu',
  '/merch': '/menu',
  '/buyshirt': '/merch',

  // Menu
  '/menu': '/',
  
  // Default fallback if path not found
  'default': '/menu'
};
