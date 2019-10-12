import React from 'react'

import { VolunteersGroup } from "./components/VolunteersGroup"
import { GroupPageHeader } from "./components/GroupPageHeader/GroupPageHeader"

const GroupsPage = () => {
    return (
        <div className="wrapper">
        <GroupPageHeader/>
        <VolunteersGroup />
        </div>
)
}

export { GroupsPage }
