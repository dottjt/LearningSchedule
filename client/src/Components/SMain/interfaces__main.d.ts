interface SMainProps extends React.Props<any> {
    schedules: any,
    summaries: any,
    updates: any,
    tags: any,
    user: any,
    auth: any,
}

// okay this isn't right, given that it's the other way around...
interface SMainPropsPassed extends React.Props<any> {
    match: any
}
