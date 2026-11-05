/**
 * Developed by Pankaj Bhatt (Codex Code)
 * WhatsApp: https://wa.me/917984060798 (For Custom Projects)
 * YouTube: https://www.youtube.com/@codexclone (Subscribe for more!)
 */

export class AppError extends Error {
  constructor(status, code, message, details) {
    super(message)
    this.name = 'AppError'
    this.status = status
    this.code = code
    this.details = details
  }
}

export const asyncHandler = fn => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch(next)
}

