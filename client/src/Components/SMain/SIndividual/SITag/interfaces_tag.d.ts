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
    login_status_var: any
}


// SITagRender

interface SITagRenderProps {
    requestRemoveTag(index: any),
    requestAddTag(data: any),
    requestChangeTag(data: any)

}

interface SITagRenderPassedProps {
    schedule_id: any,
    schedule_url: any,
    username: any,
    fields: any,
    form: any,
    login_status_var: any,
    si__tag__display__none: any,
    si__tag__border__none: any,
    fieldDis: any

}


interface SITagRenderState {
    fd: any
}