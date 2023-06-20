// transform raw data received from api calls


export const userInfoTransform = (data) => {
    const {user, token} = data
    return({
        id: user.id,
        email: user.email,
        approvalStatus: user.email,
        isSuperUser: user.is_superuser,
        userName: user.username,
        token: token,
        position: user.is_superuser ? "Admin": "User"
      })
}

export const profileDataTransform = (data) =>{
  const {data: {queryUser}} = data;
  const user = queryUser[0]
  return({
    id: user.id,
    email: user.email,
    approvalStatus: user.approvalStatus,
    isSuperUser: user.is_superuser,
    userName: user.username,
    position: user.is_superuser ? "Admin": "User"
  })
}