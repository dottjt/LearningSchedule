interface ST_NavbarProps {    
    requestAddSchedule(data: any, username: any): any,
    requestLogin(cred: any): any,
    requestLogout(): any
}


interface ST_NavbarPassedProps {
    user: any
}


interface ST_NavbarState {
    url_slug: any,
    showProfileDrop: boolean
}