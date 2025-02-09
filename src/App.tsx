import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { css } from '@styled-system/css';
import { ThemeProvider } from '~/contexts/ThemeContext';
import { AppHeader } from '~/components/AppHeader';
import { DateNav } from '~/components/DateNav';
import { Box } from '~/components/Box';
import { Heading } from '~/components/Heading';
import { Icon } from '~/components/Icon';
import { createDate, format_, parseURL, getToday } from '~/utils/dateHelpers';
import { getDailyReading, type ReadingData } from '~/utils/api_local';

function ReadingItem({
  label,
  reference,
}: {
  label: string;
  reference: string;
}) {
  return (
    <Box
      className={css({
        display: 'flex',
        flexDirection: 'column',
        paddingBottom: '6',
      })}
    >
      <p
        className={css({
          textTransform: 'uppercase',
          fontWeight: 'bold',
          letterSpacing: 'wider',
          color: 'mint.40',
          fontSize: '12',
        })}
      >
        {label}
      </p>
      <p className={css({ fontSize: '16' })}>{reference}</p>
    </Box>
  );
}

function ErrorAlert({ error }: { error: string }) {
  return (
    <Box
      className={css({
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        w: 'full',
        maxW: 'md',
        p: '6',
        bg: 'red.5',
        color: 'red.50',
        rounded: '4',
        borderWidth: '2px',
        borderColor: 'red.10',
      })}
    >
      <header
        className={css({
          display: 'flex',
          alignItems: 'center',
          fontWeight: 'bold',
          textTransform: 'uppercase',
          fontSize: '12',
          letterSpacing: 'wider',
        })}
      >
        <Icon name="warning" /> Error loading data
      </header>
      <hr
        className={css({
          my: '4',
          bg: 'red.10',
          h: '2',
          w: 'full',
          border: 'none',
        })}
      />
      <span>{error}</span>
    </Box>
  );
}

function App() {
  const [currentDate, setCurrentDate] = useState<Date | null>(null);
  const [fetchedData, setFetchedData] = useState<ReadingData | null>(null);
  const [error, setError] = useState<string | null>(null);
  const location = useLocation();
  const navigate = useNavigate();

  // Handle initial redirect to today's date
  useEffect(() => {
    const hash = window.location.hash;
    // If we have a hash route (/#/something), don't redirect
    if (hash && hash.length > 2) {
      return;
    }

    // Get the path without the hash
    const path = hash.replace('#', '');
    const cleanPath = path.replace(/^\/+|\/+$/g, '');

    // Only redirect if we're at the root (no additional path segments)
    if (!cleanPath) {
      const today = format_(getToday(), 'path');
      navigate(`/${today}`, { replace: true });
    }
  }, [navigate]);

  // Fetch data effect
  useEffect(() => {
    try {
      // Get date from hash-based URL
      const hash = window.location.hash;
      const path = hash.replace('#/', '');
      const urlDate = path || '';

      if (urlDate) {
        const date = createDate(urlDate);
        setCurrentDate(date);

        const fetchData = async () => {
          try {
            const formattedDate = format_(date, 'path');
            const data = await getDailyReading(formattedDate);
            setFetchedData(data);
          } catch (err) {
            console.error('Error fetching data:', err);
            if (err instanceof Error) {
              setError(`Error loading daily readings: ${err.message}`);
            } else {
              setError('Error loading daily readings and scripture content');
            }
          }
        };

        fetchData();
      }
    } catch (err) {
      setError('Invalid date');
    }
  }, [location]);

  if (error) {
    return (
      <ThemeProvider>
        <Box
          className={css({
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            w: 'full',
          })}
        >
          <AppHeader />
          <DateNav />
          <Box className={css({ mt: '8' })}>
            <ErrorAlert error={error} />
          </Box>
        </Box>
      </ThemeProvider>
    );
  }

  if (!fetchedData) {
    return (
      <ThemeProvider>
        <AppHeader />
        <DateNav />
        <div>Loading...</div>
      </ThemeProvider>
    );
  }

  const morningServiceKey = Object.keys(fetchedData.services).find((key) =>
    key.startsWith('Morning Prayer'),
  );
  const eveningServiceKey = Object.keys(fetchedData.services).find((key) =>
    key.startsWith('Evening Prayer'),
  );

  const morning_scripture = morningServiceKey
    ? fetchedData.services[morningServiceKey].readings
    : [];
  const evening_scripture = eveningServiceKey
    ? fetchedData.services[eveningServiceKey].readings
    : [];

  return (
    <ThemeProvider>
      <Box
        className={css({
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          w: 'full',
          containerName: 'wrapper',
          containerType: 'size',
        })}
      >
        <AppHeader season={fetchedData.calendarDate.season.name} />
        <DateNav />

        <Box
          as="section"
          className={css({
            display: 'flex',
            justifyContent: 'center',
            gap: '8',
            w: 'full',
          })}
        >
          <Box
            className={css({
              display: 'flex',
              flexDirection: 'column',
              w: 'full',
              maxW: 'md',
              p: '8',
            })}
          >
            <Heading as="h3" level={3}>
              Morning Prayer
            </Heading>
            <hr className={css({ my: '4' })} />
            <ReadingItem
              label="The Psalms"
              reference={morning_scripture[1]?.full.citation}
            />
            <ReadingItem
              label="Reading 1"
              reference={morning_scripture[2]?.full.citation}
            />
            <ReadingItem
              label="Reading 2"
              reference={morning_scripture[3]?.full.citation}
            />
          </Box>

          <Box
            className={css({
              display: 'flex',
              flexDirection: 'column',
              w: 'full',
              maxW: 'md',
              p: '8',
            })}
          >
            <Heading as="h3" level={3}>
              Evening Prayer
            </Heading>
            <hr className={css({ my: '4' })} />
            <ReadingItem
              label="The Psalms"
              reference={evening_scripture[1]?.full.citation}
            />
            <ReadingItem
              label="Reading 1"
              reference={evening_scripture[2]?.full.citation}
            />
            <ReadingItem
              label="Reading 2"
              reference={evening_scripture[3]?.full.citation}
            />
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
