import store from '../store'

const isAuth = () => (store().state.user.id != null && store().state.user.email != null)

export default isAuth
