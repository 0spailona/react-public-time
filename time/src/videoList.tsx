import Video from "./video.tsx";

type Props = {
    list: Array<{ url: string, date: string }>
}

export default function VideoList({list}: Props) {
    return list.map((item, i) => <Video key={i} url={item.url} date={item.date}/>);
}
