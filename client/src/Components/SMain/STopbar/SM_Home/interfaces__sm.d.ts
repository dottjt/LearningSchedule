// SM_HOME index

interface SM_HomePropsPassed extends React.Props<any> {
    schedules,
    updates,
    tags,
    user,
    match
}


// Schedules Title

interface SMTitleProps extends React.Props<any> {
    schedule: any, // this is passed down
    updates: any,
    tags: any,
    user: any
}




interface SMTagProps {
    tags: any
}



// Schedules Update


interface SMUpdateProps extends React.Props<any> {
    updates: any
}



// SM_HomeLinkRender

interface SM_HomeLinkRenderProps {
    schedules: any,
    updates: any,
    tags: any,
    match: any,
    user: any
}
 
// SM_UpdateLinkRender

interface SM_UpdateLinkRenderProps {
    schedules: any,
    updates: any
}

// SM_TagLinkRender

interface SM_TagLinkRenderProps {
    schedules: any,
    tags: any
}




interface SMTitleScrollRedirectPassedProps {
    user: any,
    schedule: any
}










