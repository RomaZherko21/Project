import { useState } from 'react'
import { LinearProgress } from '@mui/material'

import { Table } from './ui'
import { StatsModel } from './model'
import { observer } from 'mobx-react-lite'

function Stats() {
    return (
        <>
            <h1>Stats</h1>
            {StatsModel.loading ? (
                <LinearProgress color="secondary" />
            ) : (
                <Table stats={StatsModel.stats} />
            )}
        </>
    )
}

export default observer(Stats)
