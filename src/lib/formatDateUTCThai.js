// @ts-ignore
const formatDateUTCThai = (dateTimeStringStart, dateTimeStringEnd) => {
    console.log(dateTimeStringStart);
    const startDate = new Date(dateTimeStringStart);
    const endDate = new Date(dateTimeStringEnd);
    const options = {
        day: "2-digit",
        month: "long",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
    };

    const optionDate = {
        day: "2-digit",
        month: "long",
        year: "numeric",
    };

    // @ts-ignore
    const startFormattedDate = startDate.toLocaleString("th-TH", optionDate);
    // @ts-ignore
    const endFormattedDate = endDate.toLocaleString("th-TH", options);
    const startTime = startDate.toLocaleTimeString("th-TH", { hour: "2-digit", minute: "2-digit" });
    const endTime = endDate.toLocaleTimeString("th-TH", { hour: "2-digit", minute: "2-digit" });
    const isSameDay = startDate.toDateString() === endDate.toDateString();

    if (isSameDay) {
        return `${startFormattedDate} \n เวลา ${startTime} - ${endTime}`;
    } else {
        return `${startFormattedDate} \n เวลา ${startTime} - ${endFormattedDate} เวลา ${endTime}`;
    }
};

export default formatDateUTCThai;
