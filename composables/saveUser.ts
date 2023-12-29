import { useGlobalStore } from '~/stores/global'

const getPassword = () => {
  let password = ''
  const length = 8,
        charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
  for (let i = 0, n = charset.length; i < length; ++i) {
    password += charset.charAt(Math.floor(Math.random() * n));
  }
  return password
}

export const saveUser = async () => {
  const globalStore = useGlobalStore()

  const user = await useFetch('/api/user', {
    method: 'post',
    body: JSON.stringify({
      user_orders: JSON.stringify([useState('orderId').value]),
      user_email: globalStore.shipping.email,
      user_phone: globalStore.billing.phone,
      user_password: getPassword(),
      user_name: globalStore.billing.firstName+' '+globalStore.billing.lastName,
      user_role: 1,
    }),
    onResponseError({ request, response, options }) {
      console.log('------------------------- saveOrder onResponseError')
      console.dir(response)
    }
  })
  console.log('--------------- saveUser')
  console.dir(user)
  console.dir(user.status.value)
  console.dir(user.data.value)
  // console.dir('saveUser - '+user.value.insertId)
}

/*
user_role
0 - admin
1 - client
*/

