// transform raw data received from api calls


export const userInfoTransform = (data) => {
    const {user, Token} = data
    return({
        id: user.id,
        email: user.email,
        approvalStatus: user.email,
        isSuperUser: user.is_superuser,
        userName: user.username,
        token: Token,
        position: user.is_superuser ? "Admin": "User"
      })
}