import React from 'react'

const TabList = (props) => {

    const { children } = props;

    return(
        <div className="tabs__panel">
            {
                React.Children.map(children, (child, key) => {
                    return React.cloneElement(child, { tabs: props.tabs, tabKey: key });
                })
            }
        </div>
    )
}


export default TabList