/*
        SIndividual Component 
                                */


interface SIndividualPassedProps {
    schedules: any,
    summaries: any,
    updates: any,
    tags: any,
    user: any,
    match: any
}

interface SIndividualProps {
    requestChangeEditActive(data: any)
}


/*
        SITitle Component 
                                */

interface SITitleProps {
    form: any,
    initialValues: any,
    handleSubmit: any,

    requestRemoveSchedule: any,

    display_name: string,
    
    avatar_url: string,
    user: any,

    fieldDisabled: any
}

interface SITitlePassedProps {
    requestChangeSchedule(data: any): any,
    login_status_var: any,
    schedule_url: any,
    schedule_id: any
}


interface SITitleState {
    fd: any
}


/*
      SITopbar Component 
                                */

interface SITopbarPassedProps {
    user: any
}




interface SIRedirectState {
    redirect: boolean
}

interface SIRedirectPassedProps {
    user,
    schedule_id,
    requestRemoveSchedule(data: any): any
}



// SITag 

interface SITagProps {
    handleSubmit: any,
    form: any,
    initialValues: any,
    fields: any,
    schedule_id: any,
    username: any,
}

interface SITagPassedProps {
    form: any,
    schedule_id: any,
    username: any,
    schedule_url: any,
    login_status_var: any,
}


interface ISchedulesTagState {
    tags: any,
    suggestions: any
}


// SITagRender

interface SITagRenderProps {
    requestRemoveTag(index: any),
    requestAddTag(data: any),

}

interface SITagRenderPassedProps {
    schedule_id: any,
    username: any,
    fields: any,
    form: any,
    login_status_var: any,
    fieldDisabled: any
}


interface SITagRenderState {
    fd: any
}


// scroll 

interface SIScrollRedirectPassedProps {
    user: any
}