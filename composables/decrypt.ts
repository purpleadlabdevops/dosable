export const decrypt = hash => {
  const Crypto = require('crypto')
  const config = useRuntimeConfig()
  const decipher = Crypto.createDecipheriv(config.crypto.algorithm, config.crypto.secretKey, Buffer.from(hash.iv, 'hex'))
  const decrpyted = Buffer.concat([decipher.update(Buffer.from(hash.content, 'hex')), decipher.final()])
  return decrpyted.toString()
}