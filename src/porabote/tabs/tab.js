import React from 'react'

const Tab = (props) => {

    const selectedState = (props.tabKey !== props.tabs.state.selectedIndex) ? '' : 'selected'

    return(
        <span
            className={`tabs__panel__item ${selectedState}`}
            onClick={() => { props.tabs.setSelectedIndex(props.tabKey) }}
        >
            {props.children}
        </span>
    )
}

export default Tab