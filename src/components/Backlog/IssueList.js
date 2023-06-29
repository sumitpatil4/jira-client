import React, { useState } from 'react'
import Issue from './Issue'

const IssueList = () => {

    const [issues, setIssues] = useState([
        "issue1"
    ])

  return (
    <>
      {
        issues.length > 0 ? (
            issues.map((t) => (
                <Issue title={t}/>
            ))) : (
                <>
                </>
            )
      }
    </>
  )
}

export default IssueList
