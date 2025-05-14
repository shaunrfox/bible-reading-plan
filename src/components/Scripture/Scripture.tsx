// Back arrow linking back to the main page
// Heading with Scripture reference
// Scripture text

import { Box } from '~/components/Box';
import { Heading } from '~/components/Heading';
import { IconButton } from '~/components/IconButton';
import { Icon } from '~/components/Icon';
import * as modal from './scriptureStyles';
import parse from 'html-react-parser';
import { cx } from '@styled-system/css';

export type ScriptureProps = {
  reference: string;
  text: string; // Accept stringified HTML
  onClose: () => void;
};

export function Scripture({ reference, text, onClose }: ScriptureProps) {
  return (
    <Box className={modal.wrapper}>
      <Box className={modal.scrim} onClick={onClose} />
      <Box className={modal.container}>
        <Box className={modal.header}>
          <Heading
            as={'h2'}
            fontSize={'20'}
            lineHeight={'tight'}
            fontWeight={'medium'}
            color={{ base: 'gray.94', _dark: 'gray.5' }}
            data-reference={reference}
          >
            {reference}
          </Heading>
          <IconButton variant="ghost" aria-label="Close" onClick={onClose}>
            <Icon name="x" />
          </IconButton>
        </Box>
        <Box className={cx(modal.body, 'scripture-wrapper')}>{parse(text)}</Box>
        <Box className={modal.footer}></Box>
      </Box>
    </Box>
  );
}
