import moment from "moment";
import ru from "moment/dist/locale/ru";

export default function withPrettyDate(Component) {
    return function (props) {
        moment.locale("ru", ru);
        const from = moment(props.date).fromNow();
        return <Component {...props} date={from}/>;
    };
}