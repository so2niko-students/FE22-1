export default function ChangeHistoryOrderBtn({ascHistory, onClick}) {
    return (<button onClick={()=>onClick(!ascHistory)}>{ascHistory?'asc':'desc'}</button>);
}