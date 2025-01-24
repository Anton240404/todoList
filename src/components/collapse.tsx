import React from 'react';

type Props = {};

export function Collapse(props: Props) {
    return <>collapse</>;
}

// 1) panels: string[] = ["This is panel header 1", "This is panel header 2", "This is panel header 3"]
// 2) texts: string[] = ["txt1", "txt2", "txt3"]
// 3) openedPanel: string = "This is panel header 1"

// <Collapse
// panels={["This is panel header 1", "This is panel header 2", "This is panel header 3"]}
// texts={["txt1", "txt2", "txt3"]}
// openedPanel={"This is panel header 1"}
// />
