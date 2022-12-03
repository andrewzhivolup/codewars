const formatDuration = (seconds) => {
    if (!seconds) return 'now'
    const res = {};
    let minutes = Math.trunc(seconds / 60);
    seconds = seconds - minutes * 60;
    let hours = Math.trunc(minutes / 60);
    minutes = minutes - hours * 60;
    let days = Math.trunc(hours / 24);
    hours = hours - days * 24;
    let years = Math.trunc(days / 365);
    days = days - years * 365;

    (years > 1) ? res.years = years : res.year = years;
    (days > 1) ? res.days = days : res.day = days;
    (hours > 1) ? res.hours = hours : res.hour = hours;
    (minutes > 1) ? res.minutes = minutes : res.minute = minutes;
    (seconds > 1) ? res.seconds = seconds : res.second = seconds;

    for (let value of Object.entries(res)) {
        if (value[1] === 0) delete res[value[0]];
    }
    console.log(res);

    if (Object.keys(res).length === 1) return `${Object.values(res)[0]} ${Object.keys(res)[0]}`;
    if (Object.keys(res).length === 2) return `${Object.values(res)[0]} ${Object.keys(res)[0]} and ${Object.values(res)[1]} ${Object.keys(res)[1]}`;
    if (Object.keys(res).length === 3) return `${Object.values(res)[0]} ${Object.keys(res)[0]}, ${Object.values(res)[1]} ${Object.keys(res)[1]} and ${Object.values(res)[2]} ${Object.keys(res)[2]}`;
    if (Object.keys(res).length === 4) return `${Object.values(res)[0]} ${Object.keys(res)[0]}, ${Object.values(res)[1]} ${Object.keys(res)[1]}, ${Object.values(res)[2]} ${Object.keys(res)[2]} and ${Object.values(res)[3]} ${Object.keys(res)[3]}`;
    return `${Object.values(res)[0]} ${Object.keys(res)[0]}, ${Object.values(res)[1]} ${Object.keys(res)[1]}, ${Object.values(res)[2]} ${Object.keys(res)[2]}, ${Object.values(res)[3]} ${Object.keys(res)[3]} and ${Object.values(res)[4]} ${Object.keys(res)[4]}`;
}

console.log(formatDuration(4487082))