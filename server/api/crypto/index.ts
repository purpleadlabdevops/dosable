import Crypto from 'crypto'

const config = useRuntimeConfig()

export default {
  encrypt: text => {
    const iv = Crypto.randomBytes(16)
    const cipher = Crypto.createCipheriv(config.crypto.algorithm, config.crypto.secretKey, iv)
    const encrypted = Buffer.concat([cipher.update(text), cipher.final()])
    return {
      iv: iv.toString('hex'),
      content: encrypted.toString('hex')
    }
  },
  decrypt: hash => {
    const decipher = Crypto.createDecipheriv(config.crypto.algorithm, config.crypto.secretKey, Buffer.from(hash.iv, 'hex'))
    const decrpyted = Buffer.concat([decipher.update(Buffer.from(hash.content, 'hex')), decipher.final()])
    return decrpyted.toString()
  }
}