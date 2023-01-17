const Stat = ({history}) => {
    const len = history.length;
    const stat = history.reduce((acc, n) => {
        if(!acc[n]){
            acc[n] = { count : 0 };
        }
        acc[n].count++;
        acc[n].perc = parseInt(acc[n].count / len * 100);

        return acc;
    }, {});

    return (
        <ul>
            {Object.entries(stat).map(([numb, { perc }]) => {
                return <li key={ numb }>{ numb } : { perc }%</li>;
            })}
        </ul>
    );
}

export default Stat;