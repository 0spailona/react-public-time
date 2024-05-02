type Props = {
    date: string
}

export default function DateTime({date}: Props) {
    return (
        <p className="date">{date}</p>
    )
}