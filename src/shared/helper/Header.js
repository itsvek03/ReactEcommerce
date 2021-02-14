export const Header = () => {
    let user = JSON.parse(localStorage.getItem("currentuser"));
    console.log("TOKEN", user)

    if (user && user.data.token) {
        return { Authorization: `Bearer ${user.data.token}` }
    }
    else {
        return {}
    }
}