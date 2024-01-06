/**
 * @type function
 * @name loginUser
 * @description Login user to admin panel or as client.
 */
export const loginUser = async (email: string, password: string, callback: any): void => {
  const { data } = await useFetch('/api/login', {
    method: 'post',
    body: JSON.stringify({
      email: email,
      password: password
    })
  })

  callback(data)
}
