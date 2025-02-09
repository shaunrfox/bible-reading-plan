export const userLocale = navigator.language;

export function getToday(): Date {
  return createDate(new Date());
}

export const isToday = (
  date1: Date | string,
  date2: Date | string,
): boolean => {
  return areDatesEqual(date1, date2);
};

export function parseURL() {
  const path = window.location.pathname;
  const date = path.split('/').pop();
  return date;
}

export const getPreviousDate = (date: Date | string) => {
  const dateObj = createDate(date);
  dateObj.setDate(dateObj.getDate() - 1);
  return format_(dateObj, 'path');
};

export const getNextDate = (date: Date | string) => {
  const dateObj = createDate(date);
  dateObj.setDate(dateObj.getDate() + 1);
  return format_(dateObj, 'path');
};

export function getFormatOptions(
  formatType: string,
): Intl.DateTimeFormatOptions {
  switch (formatType) {
    case 'short':
      return {
        weekday: 'short',
        year: 'numeric',
        month: 'short',
        day: '2-digit',
      };
    case 'long':
      return {
        weekday: 'long',
        year: 'numeric',
        month: 'short',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
      };
    case 'path':
      return {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
      };
    default:
      return {
        weekday: 'short',
        year: 'numeric',
        month: '2-digit',
      };
  }
}

export function format_(date: Date | string, pattern: string): string {
  const dateObj = createDate(date);
  const formatter = new Intl.DateTimeFormat('en-US', getFormatOptions(pattern));

  if (pattern === 'path') {
    // For path format, we want yyyy-MM-dd
    const parts = formatter.formatToParts(dateObj);
    return `${parts.find((p) => p.type === 'year')?.value}-${parts.find((p) => p.type === 'month')?.value}-${parts.find((p) => p.type === 'day')?.value}`;
  }

  return formatter.format(dateObj);
}

// export function formatWithLocale(
//   date: Date | string,
//   formatType: string
// ): string {
//   const dateObj = typeof date === "string" ? new Date(date) : date;
//   return new Intl.DateTimeFormat("en-US", getFormatOptions(formatType)).format(
//     dateObj
//   );
// }

// Client-side display functions
// export const localizedDate = (isoString: string, type: "short" | "long") => {
//   const date = new Date(isoString);
//   return date.toLocaleDateString(undefined, DEFAULT_DATE_OPTIONS[type]);
// };

export const formatDateForDisplay = (isoString: string) => {
  const date = new Date(isoString);
  const options: Intl.DateTimeFormatOptions = {
    weekday: 'long',
    year: 'numeric',
    month: 'short',
    day: '2-digit',
  };

  return new Intl.DateTimeFormat(undefined, options).format(date);
};

export const formatDateTimeFull = (isoString: string) => {
  const date = new Date(isoString);
  const options: Intl.DateTimeFormatOptions = {
    weekday: 'long',
    year: 'numeric',
    month: 'short',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  };

  return new Intl.DateTimeFormat(undefined, options).format(date);
};

export function createDate(input?: string | Date | null): Date {
  if (!input) {
    const now = new Date();
    const utcDate = new Date(
      Date.UTC(now.getFullYear(), now.getMonth(), now.getDate(), 12, 0, 0),
    );
    // console.log("createDate (no input):", { input, result: utcDate });
    return utcDate;
  }

  if (input instanceof Date) {
    const utcDate = new Date(
      Date.UTC(
        input.getFullYear(),
        input.getMonth(),
        input.getDate(),
        12,
        0,
        0,
      ),
    );
    // console.log("createDate (Date input):", { input, result: utcDate });
    return utcDate;
  }

  // For string input, parse the components directly to avoid timezone issues
  const [year, month, day] = input.split('-').map((num) => parseInt(num, 10));
  const utcDate = new Date(Date.UTC(year, month - 1, day, 12, 0, 0));
  // console.log("createDate (string input):", {
  //   input,
  //   year,
  //   month,
  //   day,
  //   result: utcDate,
  // });
  return utcDate;
}

export function areDatesEqual(
  date1: Date | string,
  date2: Date | string,
): boolean {
  const d1 = createDate(date1);
  const d2 = createDate(date2);
  return d1.getTime() === d2.getTime();
}
