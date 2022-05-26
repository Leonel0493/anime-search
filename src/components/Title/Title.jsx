import React from 'react'
import classnames from 'classnames'

const Title = ({titleText, textColor}) => {
    return(
        <h1 className={classnames('font-mono', 'text-2xl', 'font-semibold', textColor)}>
            {titleText}
        </h1>
    )
}

export default Title;