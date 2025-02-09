import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Box } from '~/components/Box';
import { Heading } from '~/components/Heading';
import { IconButton } from '~/components/IconButton';
import { Icon } from '../Icon';
import { css } from '@styled-system/css';
import {
  format_,
  createDate,
  areDatesEqual,
  getToday,
  getPreviousDate,
  getNextDate,
} from '~/utils/dateHelpers';
import { dateNavStyles } from './dateNavStyles';

// type DateNavProps = {
//   date: string; // ISO date string
// };

export function DateNav() {
  const [currentDate, setCurrentDate] = useState<Date | null>(null);
  const location = useLocation();
  const today = getToday();

  useEffect(() => {
    // Get date from hash-based URL
    const hash = window.location.hash;
    const path = hash.replace('#/', '');
    const urlDate = path || '';

    console.log('DateNav effect:', { urlDate });

    if (urlDate) {
      const date = createDate(urlDate);
      console.log('DateNav created date:', { urlDate, date });
      setCurrentDate(date);
    } else {
      console.error('Date from URL is null');
    }
  }, [location]);

  let displayDate;
  let previousDate;
  let nextDate;

  if (currentDate) {
    displayDate = format_(currentDate, 'short');
    previousDate = format_(getPreviousDate(currentDate), 'path');
    nextDate = format_(getNextDate(currentDate), 'path');
    // console.log("DateNav render:", {
    //   currentDate,
    //   displayDate,
    //   previousDate,
    //   nextDate,
    // });
  }

  return (
    <nav className={dateNavStyles}>
      <Link to={`/${previousDate}`}>
        <IconButton variant="hollow">
          <Icon name="arrow-left" />
        </IconButton>
      </Link>
      <Heading
        as={'h2'}
        level={4}
        font="mono"
        sx={{
          textTransform: 'uppercase',
          letterSpacing: '1px',
        }}
      >
        {displayDate}
      </Heading>
      <Link to={`/${nextDate}`}>
        <IconButton variant="hollow">
          <Icon name="arrow-right" />
        </IconButton>
      </Link>
      {currentDate && !areDatesEqual(currentDate, today) && (
        <Link
          to={`/${format_(getToday(), 'path')}`}
          className={css({
            position: 'absolute',
            bottom: '-32',
            display: 'flex',
            alignItems: 'center',
            gap: '3',
          })}
        >
          {/* <Icon name="reset" /> */}
          Today
        </Link>
      )}
    </nav>
  );
}
