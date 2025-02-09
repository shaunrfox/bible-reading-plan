export interface Psalm {
  id: string;
  number: number;
  latin_title: string;
  verses: PsalmVerse[];
}

export interface PsalmVerse {
  id: string;
  number: number;
  first_half: string;
  second_half: string;
  first_half_tle?: string;
  second_half_tle?: string;
}

export interface OfficeDay {
  id: string;
  holy_day_name?: string;
  mp_psalms: string;
  mp_reading_1: string;
  mp_reading_2: string;
  ep_psalms: string;
  ep_reading_1: string;
  ep_reading_2: string;
}

export interface DailyOffice {
  date: string;
  officeDay: OfficeDay | null;
  psalms: {
    morning: Psalm[];
    evening: Psalm[];
  };
}

export interface DailyOfficeData {
  date: string;
  officeDay: OfficeDay;
  psalms: {
    morning: Psalm[];
    evening: Psalm[];
  };
  services: {
    'Morning Prayer': {
      readings: Scripture[];
    };
    'Evening Prayer': {
      readings: Scripture[];
    };
  };
  calendarDate: {
    season: {
      name: string;
    };
  };
}

export interface Scripture {
  citation: string;
  text: string;
  testament: string;
}

export interface MonthlyReadings {
  date: string;
  readings: OfficeDay[];
  error?: string;
}
