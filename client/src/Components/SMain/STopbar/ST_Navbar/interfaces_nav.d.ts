interface ST_NavbarProps {    
    requestAddSchedule(data: any): any,
    requestLogin(cred: any): any,
    requestLogout(): any
}


interface ST_NavbarPassedProps {
    user: any,
    indicator: any
}


interface ST_NavbarState {
    url_slug: string,
    showProfileDrop: boolean,
    showPopup: boolean
}