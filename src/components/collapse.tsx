// 1) panels: string[] = ["This is panel header 1", "This is panel header 2", "This is panel header 3"]
// 2) texts: string[] = ["txt1", "txt2", "txt3"]
// 3) openedPanel: string = "This is panel header 1"

// <Collapse
// panels={["This is panel header 1", "This is panel header 2", "This is panel header 3"]}
// texts={["txt1", "txt2", "txt3"]}
// openedPanel={"This is panel header 1"}
// />
import React, { useState } from 'react';

type Props = {
    panels: string[];
    texts: string[];
};

export function Collapse(props: Props) {
    const [activePanel, setActivePanel] = useState('This is panel header 1');

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {props.panels.map((panel, index) => (
                <div
                    key={panel}
                    style={{ border: '1px solid #000', padding: '10px' }}
                >
                    <div
                        onClick={() =>
                            setActivePanel(panel === activePanel ? '' : panel)
                        }
                    >
                        {panel}
                    </div>
                    {activePanel === panel && (
                        <div style={{ marginTop: '5px' }}>
                            {props.texts[index]}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}

export function CollapseTest() {
    return (
        <Collapse
            panels={[
                'This is panel header 1',
                'This is panel header 2',
                'This is panel header 3',
            ]}
            texts={['txt1', 'txt2', 'txt3']}
        />
    );
}
