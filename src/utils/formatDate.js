const formatDate = (dateStr) => {
    let date = new Date(dateStr);
    let formatted_date = date.getDate() + "." + (date.getMonth() + 1) + "." + date.getFullYear();
    return formatted_date;
}

export default formatDate;
