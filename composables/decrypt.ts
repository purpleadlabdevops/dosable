/**
 * @type function
 * @name decrypt
 * @description Function for decrypting an object.
 */

interface IDecrypt {
  iv: string
  content: string
}

export const decrypt = (hash: IDecrypt) => {
  const Crypto = require('crypto')
  const config = useRuntimeConfig()
  const decipher = Crypto.createDecipheriv(config.crypto.algorithm, config.crypto.secretKey, Buffer.from(hash.iv, 'hex'))
  const decrpyted = Buffer.concat([decipher.update(Buffer.from(hash.content, 'hex')), decipher.final()])
  return decrpyted.toString()
}