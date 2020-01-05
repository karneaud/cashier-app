import store from '../store'

const isAuth = async () => {
  let al = await store().restored
  return (store().getters['user/getUserEmail'] != null && store().getters['user/getSheetId'] != null)
}

export default isAuth
