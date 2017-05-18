/*
         SIUpdate Component 
                                */

interface SIUpdateProps {
    updates: any,
    update_tags: any
    schedule_id: any,
    schedule_url: any,
    username: any,
    user: any,
    form: any,
    topbar_active: any,
    fieldDisabled: any
    login_status_var: any,
    
    update_type_value: any,
    requestAddUpdate: any
    handleSubmit: any
}

interface SIUpdatePassedProps {
    update_tags: any,
}

interface SIUpdateState {
    fd: any,
    showEmoji: any
}


/*
      SIUpdateRender Component 
                                */

interface SIUpdateRenderProps {
    requestRemoveUpdate(index: any),
    requestAddUpdate(data: any),
    requestChangeUpdate(index: any),
    fields: any,
    topbar_active: any
}

interface SIUpdateRenderPassedProps {
    schedule_id: any,
    updates_id: any,
    username: any,
    currentUpdate: any,
    schedule_url: any,

    si__update__display__none: any,
    si__update__border__none: any,
    fieldDis: any,

}

interface SIUpdateRenderState {
    topbar_active: boolean
}


/*
      SIUpdateTagRender Component 
                                    */


interface SIUpdateTagRenderProps {
    fields: any,
    requestRemoveTag(data: any): any,
    requestAddTag(data: any): any
    requestChangeTag(data: any): any
}

interface SIUpdateTagRenderPassedProps {
    schedule_id: any,
    schedule_url: any,
    updates_id: any,
    username: any,
    fields: any,
    currentUpdate: any

    si__update__display__none: any,
    si__update__border__none: any,
    fieldDis: any

}

