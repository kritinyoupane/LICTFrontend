export const clearUserInfo = () => {
    localStorage.removeItem("userInfo");
    window.location.reload()
    console.log('Info Cleared')
}