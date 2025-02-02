// 1) steps: string[]
/*const steps: string[] = ['Finished', 'In Progress', 'Waiting'];*/
// 2) activeStep: string = 'In Progress';

import React from 'react';

type Props = {
    steps: string[];
    activeStep: string;
};

export function Steps(props: Props) {
    return (
        <div style={{ display: 'flex', gap: '10px' }}>
            {props.steps.map((step) => (
                <div
                    key={step}
                    style={{
                        border: '1px solid #000',
                        padding: '5px 10px',
                        background: step === props.activeStep ? 'blue' : '',
                    }}
                >
                    {step}
                </div>
            ))}
        </div>
    );
}

export function StepsTest() {
    return (
        <Steps
            steps={['Finished', 'In Progress', 'Waiting']}
            activeStep="In Progress"
        />
    );
}
