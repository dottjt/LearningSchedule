

/*
          STopbar Component
                                        */


interface STopbarPassedProps {    
    user: any, 
    summaries: any,
    schedules: any,
    tags: any,
    updates: any,
    auth: any,
    match: any
}


interface STopbarProps {
    requestAddSchedule(data: any, username: any): any,
    requestLogin(cred: any): any,
    requestLogout(): any
}









interface ST_MainProps {    
    requestAddSchedule(data: any),
    requestLogin(cred: any),
    requestLogout()

    // requestInitialSchedulesState(),
    // requestInitialUpdatesState(),

}


interface ST_MainPassedProps {
    user: any, 
    summaries: any,
    schedules: any,
    tags: any,
    updates: any,
    auth: any,
}


interface STopbarState {
    url_slug: string
}


