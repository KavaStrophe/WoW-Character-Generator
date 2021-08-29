interface CharacterTableHeaderComponentParameters {
    hasActions: boolean;
}

export const CharacterTableHeaderComponent = ({hasActions} : CharacterTableHeaderComponentParameters) => {
    return (
        <thead>
            <tr>
                <th>Name</th>
                <th>Race</th>
                <th>Gender</th>
                {hasActions ? (<th>Actions</th>) : (<></>)}
            </tr>
        </thead>
    )
}
