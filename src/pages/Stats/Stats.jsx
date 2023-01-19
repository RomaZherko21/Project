import { useEffect, useState } from 'react'
import { LinearProgress } from '@mui/material'

import { Table } from './ui'
import axios from 'axios'

const STATS_URL =
    'https://datausa.io/api/data?drilldowns=Nation&measures=Population'

function Stats() {
    const [stats, setStats] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        axios.get(STATS_URL).then((res) => {
            setStats(res.data.data)
            setLoading(false)
        })
    }, [])

    return (
        <>
            <h1>Stats</h1>
            {loading ? (
                <LinearProgress color="secondary" />
            ) : (
                <Table stats={stats} />
            )}
        </>
    )
}

export default Stats
