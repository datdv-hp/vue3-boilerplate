import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
import weekOfYear from 'dayjs/plugin/weekOfYear';
import localizedFormat from 'dayjs/plugin/localizedFormat';
import localeData from 'dayjs/plugin/localeData';
import objectSupport from 'dayjs/plugin/objectSupport';
import isSameOrAfter from 'dayjs/plugin/isSameOrAfter';
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore';

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.extend(weekOfYear);
dayjs.extend(localizedFormat);
dayjs.extend(localeData);
dayjs.extend(objectSupport);
dayjs.extend(isSameOrAfter);
dayjs.extend(isSameOrBefore);

export default dayjs;
