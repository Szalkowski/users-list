import React from 'react'
import PropTypes from 'prop-types'
import './page-title.scss'

export function PageTitle({title}) {
    return (
        <h1 className='title'>
            {title}
        </h1>
    )
}

PageTitle.propTypes = {
    title: PropTypes.string.isRequired
};
