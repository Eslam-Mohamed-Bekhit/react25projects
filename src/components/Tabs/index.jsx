import React, { useState } from 'react'

const Tabs = () => {
    const [currentTab, setCurrentTab] = useState(0);
    const data = [
        { label: "tab 1", content: "tab 1 on the board 1 1" },
        { label: "tab 2", content: "tab 2 on the board 2 2" },
        { label: "tab 3", content: "tab 3 on the board 3 3" }
    ]
    return (
        <div>
            <div>
                {data.map((el, index) => (
                    <div>
                        <span key={el.label}
                            onClick={() => setCurrentTab(index)}>{el.label}</span>
                    </div>
                ))}
            </div>
            <div>
                {data[currentTab].content}
            </div>
        </div>
    )
}

export default Tabs