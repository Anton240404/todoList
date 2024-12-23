
type Props = {
    name: string;
}

export function nameTable(name:Props) {
    return(
        <ol>
            <li>
                {Props.name}
            </li>
        </ol>
);
}