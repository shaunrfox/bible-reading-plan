// Server-side functions (always work in UTC)
export const formatDateToISOString = (date?: Date | string): string => {
  const d = date ? new Date(date) : new Date();
  return (
    d.getFullYear() +
    "-" +
    String(d.getMonth() + 1).padStart(2, "0") +
    "-" +
    String(d.getDate()).padStart(2, "0")
  );
};

export const getTodayUTC = (): string => {
  return formatDateToISOString(new Date());
};

type LocalizedDateOptions = {
  short: Intl.DateTimeFormatOptions;
  long: Intl.DateTimeFormatOptions;
};

export const DEFAULT_DATE_OPTIONS: LocalizedDateOptions = {
  short: {
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "2-digit",
  },
  long: {
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  },
};

// Client-side display functions
export const localizedDate = (isoString: string, type: "short" | "long") => {
  const date = new Date(isoString);
  return date.toLocaleDateString(undefined, DEFAULT_DATE_OPTIONS[type]);
};

export const formatDateForDisplay = (isoString: string) => {
  const date = new Date(isoString);
  const options: Intl.DateTimeFormatOptions = {
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "2-digit",
  };

  return new Intl.DateTimeFormat(undefined, options).format(date);
};

export const formatDateTimeFull = (isoString: string) => {
  const date = new Date(isoString);
  const options: Intl.DateTimeFormatOptions = {
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  };

  return new Intl.DateTimeFormat(undefined, options).format(date);
};
