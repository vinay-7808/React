export const UserCard = (props) => {
    return (
        <>
            <h2>{props.data.name.first} {props.data.name.last}</h2>
            <h3>{props.data.location.city}, {props.data.location.state}, {props.data.location.country}</h3>
            <h3>{props.data.phone}</h3>
        </>
    )
}