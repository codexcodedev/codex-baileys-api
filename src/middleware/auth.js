/**
 * Developed by Pankaj Bhatt (Codex Code)
 * WhatsApp: https://wa.me/917984060798 (For Custom Projects)
 * YouTube: https://www.youtube.com/@codexclone (Subscribe for more!)
 */

import { AppError } from '../utils/errors.js'

const extractKey = req => {
  const header = req.get('x-api-key')
  if (header) return header.trim()
  const authorization = req.get('authorization') || ''
  return authorization.startsWith('Bearer ') ? authorization.slice(7).trim() : ''
}

export const apiKeyAuth = service => (req, res, next) => {
  try {
    req.apiKey = service.authenticate(extractKey(req))
    next()
  } catch (error) {
    next(error)
  }
}

export const requireAdmin = (req, res, next) => {
  if (req.apiKey?.role !== 'admin') {
    return next(new AppError(403, 'ADMIN_REQUIRED', 'An admin API key is required'))
  }
  next()
}

