interface ProfilePassedProps {
    user: any
}


interface PUserDetailsProps {
    requestChangeUserDetails(data: any): any,
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
    showPopup: boolean
}




interface PSocialDetailsProps {
    requestChangeUserDetails(data: any): any
}

interface PSocialDetailsPassedProps {
    user: any,
    handleSubmit: any,
    login_status_var: any,
    initialValues: any
}