import { Box } from '~/components/Box';
import { Heading } from '~/components/Heading';
import { Text } from '~/components/Text';
import { format_, getToday } from '~/utils/dateHelpers';
import {
  pageDateStyles,
  pageHeaderStyles,
  pageTitleStyles,
} from './appHeaderStyles';
import { ThemeSwitcher } from '../ThemeSwitcher';
interface AppHeaderProps {
  season?: string;
}

export function AppHeader({ season }: AppHeaderProps) {
  return (
    <header className={pageHeaderStyles}>
      <a href={`/`}>
        <Heading as={'h1'} className={pageTitleStyles}>
          Daily Readings
        </Heading>
      </a>

      <ThemeSwitcher />
      <Box className={pageDateStyles}>
        <Text color={'current'} family={'sans'}>
          {format_(getToday(), 'short')}
        </Text>
        <Text color={'current'} size={'12'} family={'mono'}>
          {season}
        </Text>
      </Box>
    </header>
  );
}
