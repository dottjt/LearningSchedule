interface ProfilePassedProps {
    user: any
}


interface PUserDetailsProps {
    requestChangeUserUsernameDetails(username: any): any,
    requestChangeUserEmailDetails(email: any, username: any): any,
    requestChangePassword(data: any): any,
    requestRemoveUser(): any
}

interface PUserDetailsPassedProps {
    user: any,
    handleSubmit: any,
    login_status_var: any,
    initialValues: any
}


interface PUserDetailsState {
    showPopupPassword: boolean,
    showPopupRemove: boolean
}




interface PSocialDetailsProps {
    requestChangeSocial(data: any): any
}

interface PSocialDetailsPassedProps {
    user: any,
    handleSubmit: any,
    login_status_var: any,
    initialValues: any
}