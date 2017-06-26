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
    requestAddUpdate: any,
    requestChangeLengthUpdate: any,
    handleSubmit: any
}

interface SIUpdatePassedProps {
    update_tags: any,
    initialValues: any
}

interface SIUpdateState {
    
    fd: any,
    showEmoji: any,
    update_single_title_length: number,
    update_single_text_length: number,
    update_single_link_length: number,
    update_single_summary_length: number,
    update_single_milestone_length: number
}


/*
      SIUpdateRender Component 
                                */

interface SIUpdateRenderProps {
    requestRemoveUpdate(index: any),
    requestAddUpdate(data: any),
    requestChangeUpdate(index: any),
    requestChangeLengthUpdate(data: any),
    fields: any,
    topbar_active: any
}

interface SIUpdateRenderPassedProps {
    schedule_id: any,
    updates_id: any,
    username: any,
    currentUpdate: any,
    schedule_url: any,
    login_status_var: any,

    

    si__update__display__none: any,
    si__update__border__none: any,
    fieldDis: any,

    initialValues: any
}

interface SIUpdateRenderState {
    // topbar_active: boolean,
        update_single_title_length: any
        // update_single_text_length: any,

        // update_single_link_title_length: any,
        // update_single_link_text_length: any,
        // update_single_link_summary_length: any,

        // update_single_milestone_title_length: any,
        // update_single_milestone_text_length: any
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

