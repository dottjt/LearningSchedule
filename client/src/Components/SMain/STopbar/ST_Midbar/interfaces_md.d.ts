


interface ST_MidbarProps {
    requestAddAvatar(data: any): any

}

interface ST_MidbarPassedProps {
    user: any, 
    summaries: any
}

interface ST_MidbarState {
    topbar_active: any
}

/*
          STSummary Component 
                                        */


interface STSummaryProps {
    summaries: any
}


/*
         STSummaryActive Component 
                                        */


interface ISMSummaryRenderProps {
    initialValues: any,
    form: any
}


/*
      STSummaryActiveRender Component 
                                        */



interface STSummaryActiveRenderProps {
    fields: any,
    requestChangeSummary(data: any): any
}



/*
        STDisplayActive Component 
                                    */


interface STDisplayActiveProps {
    initialValues: any,
    form: any,
    handleSubmit(data): any
    requestChangeDisplay(data): any
}


/*
        STWebsiteActive Component 
                                    */

interface STWebsiteActiveProps {
    initialValues: any,
    form: any,
    handleSubmit(data): any,
    requestChangeWebsite(data): any
}

