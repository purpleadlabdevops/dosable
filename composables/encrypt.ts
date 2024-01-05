export const encrypt = (text: object) => {
  const Crypto = require('crypto')
  const config = useRuntimeConfig()

  const iv = Crypto.randomBytes(16)
  const cipher = Crypto.createCipheriv(config.crypto.algorithm, config.crypto.secretKey, iv)
  const encrypted = Buffer.concat([cipher.update(text), cipher.final()])
  return {
    iv: iv.toString('hex'),
    content: encrypted.toString('hex')
  }
}