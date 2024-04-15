import React, { useContext, useState, useEffect } from 'react'
import ChangeModeComponent from '../ChangeModeComponent'
import Tictaktoe from '../Tictactoe'
import Accordion from '../Accordian'
import TreeView from '../TreeView'
import { FeatureFlagsContext } from './context'
const FeatureFlag = () => {
    console.log(useContext(FeatureFlagsContext))
    const { loading, enabledFlags } = useContext(FeatureFlagsContext)
    const componentsToRender = [
        {
            key: 'showChangeModeComponent',
            component: <ChangeModeComponent />
        },
        {
            key: 'showTictaktoe',
            component: <Tictaktoe />
        },

        {
            key: 'showAccordion',
            component: <Accordion />
        },

        {
            key: 'showTreeView',
            component: <TreeView />
        }

    ]

    return (
        <div>
            <h1>Feature Flags</h1>
            {
                componentsToRender.map(el =>
                (enabledFlags[el.key] &&
                    (<div key={el.key} >{el.component}</div>)))
            }
        </div>
    )
}

export default FeatureFlag