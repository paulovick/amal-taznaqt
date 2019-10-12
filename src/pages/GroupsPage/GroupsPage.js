import React from 'react'

import { VolunteersGroup } from "./components/VolunteersGroup"
import { GroupPageHeader } from "./components/GroupPageHeader/GroupPageHeader"

const GroupsPage = (props) => {
    return (
        <div className="wrapper">
        <GroupPageHeader/>
        <VolunteersGroup history={props.history} />
        </div>
)
}

export { GroupsPage }
