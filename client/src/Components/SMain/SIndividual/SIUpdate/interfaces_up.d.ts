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
    
    updateTypeValue: any,
    requestAddUpdate: any
    handleSubmit: any
}

interface SIUpdatePassedProps {
    update_tags: any
}

interface SIUpdateState {
    fd: any
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
    field_disable_id: any,
    fieldDis: any
}

interface SIUpdateRenderState {
    topbar_active: boolean
}


/*
      SIUpdateSingle Component 
                                    */

interface SIUpdateSingleProps {
    updateTypeValue: any,
    requestAddUpdate: any
    handleSubmit: any
}

interface SIUpdateSinglePassedProps {
    form: any,
    initialValues: any,
    schedule_id: any,
    schedule_url: any, 
    user: any
}

/*
      SIUpdateTagRender Component 
                                    */


interface SIUpdateTagRenderProps {
    fields: any,
    requestRemoveTag(data: any): any,
    requestAddTag(data: any): any
}

interface SIUpdateTagRenderPassedProps {
    schedule_id: any,
    updates_id: any,
    username: any,
    fields: any,
    field_disable: any,
    fieldDis: any

}

