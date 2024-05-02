import DateTime from "./dateTime.tsx";
import withPrettyDate from "./withPrettyDate.jsx"

const DateTimePretty = withPrettyDate(DateTime);

type Props = {
    url: string,
    date: string
}

export default function Video({url, date}: Props) {
    return (
        <div className="video">
            <iframe src={url} style={{border: "none"}} allow="autoplay; encrypted-media" allowFullScreen></iframe>
            <DateTimePretty date={date}/>
        </div>
    )
}