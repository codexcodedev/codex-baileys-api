/**
 * Developed by Pankaj Bhatt (Codex Code)
 * WhatsApp: https://wa.me/917984060798 (For Custom Projects)
 * YouTube: https://www.youtube.com/@codexclone (Subscribe for more!)
 */

export const ok = (res, data, status = 200) => res.status(status).json({
  success: true,
  data,
  error: '',
  code: ''
})

export const fail = (res, status, code, error, details) => res.status(status).json({
  success: false,
  data: {},
  error,
  code,
  ...(details ? { details } : {})
})

