import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { css } from '@styled-system/css';
import { ThemeProvider } from '~/contexts/ThemeContext';
import { AppHeader } from '~/components/AppHeader';
import { DateNav } from '~/components/DateNav';
import { Box } from '~/components/Box';
import { Heading } from '~/components/Heading';
import { Text } from '~/components/Text';
import { Icon } from '~/components/Icon';
import { createDate, format_, getToday } from '~/utils/dateHelpers';
import { getDailyReading, type ReadingData } from '~/utils/api_local';
import { Divider, VStack } from '@styled-system/jsx';
import { formatReference } from '~/utils/formatReference';

// Add this constant
const basename = import.meta.env.DEV ? '' : '/bible-reading-plan';

function ReadingItem({
  label,
  reference,
}: {
  label: string;
  reference: string;
}) {
  return (
    <VStack mb={'20'} gap={'0'} alignItems={'flex-start'}>
      <Text
        family={'mono'}
        textTransform={'uppercase'}
        fontWeight={'bold'}
        letterSpacing={'wider'}
        color={{ base: 'mint.40', _dark: 'mint.50' }}
        fontSize={'12'}
      >
        {label}
      </Text>
      <Text
        fontSize={'24'}
        lineHeight={'tight'}
        fontWeight={'medium'}
        color={{ base: 'gray.94', _dark: 'gray.5' }}
        data-reference={formatReference(reference)}
      >
        {reference}
      </Text>
    </VStack>
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
    console.log('Current hash:', window.location.hash);
    console.log('Current pathname:', window.location.pathname);

    // Get the hash without the # character
    const hash = window.location.hash.replace('#', '');

    // If we have a path after the hash (like /#/2023-01-01), don't redirect
    if (hash && hash.length > 1) {
      return;
    }

    // If we're at the root or just /#, redirect to today's date
    const today = format_(getToday(), 'path');
    navigate(`${basename}/${today}`, { replace: true });
  }, [navigate]);

  // Fetch data effect
  useEffect(() => {
    console.log('Location changed. Current hash:', window.location.hash);
    console.log(
      'Location changed. Current pathname:',
      window.location.pathname,
    );

    try {
      // Get date from hash-based URL, removing the leading slash if present
      const hash = window.location.hash;
      const path = hash.replace('#/', '').replace(/^\/+/, '');
      const urlDate = path || '';

      if (!urlDate) {
        // Add this fallback for when no date is in the URL
        const today = format_(getToday(), 'path');
        navigate(`/${today}`, { replace: true });
        return;
      }

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
      // You could also add a fallback here for invalid dates
      const today = format_(getToday(), 'path');
      navigate(`/${today}`, { replace: true });
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
          <Box>hello</Box>
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
            '@container wrapper (width < 500px)': {
              flexDirection: 'column',
            },
          })}
        >
          <Box
            className={css({
              display: 'flex',
              flexDirection: 'column',
              w: 'full',
              maxW: 'sm',
              p: '24',
              '@container wrapper (width < 500px)': {
                maxW: 'full',
              },
            })}
          >
            <Heading as="h3" fontSize={'16'}>
              Morning Prayer
            </Heading>
            <Divider
              my={'16'}
              borderColor={{ base: 'gray.30', _dark: 'gray.70' }}
            />
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
              maxW: 'sm',
              p: '24',
            })}
          >
            <Heading as="h3" fontSize={'16'}>
              Evening Prayer
            </Heading>
            <Divider
              my={'16'}
              borderColor={{ base: 'gray.30', _dark: 'gray.70' }}
            />
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
