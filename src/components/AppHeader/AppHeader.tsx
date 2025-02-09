import { Heading } from '~/components/Heading';
import { Text } from '~/components/Text';
import { format_, getToday, today } from '~/utils/dateHelpers';
import { VStack } from '@styled-system/jsx';
import { pageHeaderStyles, pageTitleStyles } from './appHeaderStyles';
import { ThemeSwitcher } from '../ThemeSwitcher';
interface AppHeaderProps {
  season?: string;
}

export function AppHeader({ season }: AppHeaderProps) {
  return (
    <header className={pageHeaderStyles}>
      <VStack gap={'2'}>
        <a href={`/`}>
          <Heading as={'h1'} className={pageTitleStyles}>
            Daily Readings
          </Heading>
        </a>
      </VStack>
      <VStack gap={'2'}>
        <Text>{format_(getToday(), 'short')}</Text>
        <Text level={'16'}>{season}</Text>
      </VStack>
      <ThemeSwitcher />
    </header>
  );
}
