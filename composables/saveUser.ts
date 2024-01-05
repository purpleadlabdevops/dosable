/**
 * @type function
 * @name saveUser
 * @description Insert new user to DB if user exist, update user session ID.
 */
export const saveUser = async (name: string, birthday: string, gender: string, email: string, phone: number): void => {
  const { data } = await useFetch('/api/user', {
    method: 'post',
    body: JSON.stringify({
      name: name,
      birthday: birthday,
      gender: gender,
      email: email,
      phone: phone
    })
  })

  sessionStorage.setItem('sessionId', data.value.sessionId)

  console.log('---------------START saveUser')
  if(data.value.changedRows > 0){
    console.log('User sessionId was updated')
  } else if(data.value.insertId > 0){
    console.log('User was inserted to DB')
  } else {
    console.dir(data)
  }
  console.log('---------------END saveUser')
}
