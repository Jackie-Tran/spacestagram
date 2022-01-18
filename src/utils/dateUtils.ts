import dayjs from 'dayjs';

const formatDate = (date: string | Date) => dayjs(date).format('MMMM D YYYY');

const parseDate = (date: string | Date) => dayjs(date).format('YYYY-MM-DD');

export default { formatDate, parseDate };
