import { useState } from 'react';

import Page from '../tailwind-mobile/components/Page';
import Navbar from '../tailwind-mobile/components/Navbar';
import Toolbar from '../tailwind-mobile/components/Toolbar';
import Subnavbar from '../tailwind-mobile/components/Subnavbar';
import Segmented from '../tailwind-mobile/components/Segmented';
import SegmentedButton from '../tailwind-mobile/components/SegmentedButton';
import Link from '../tailwind-mobile/components/Link';

import { ThemeContext } from '../tailwind-mobile/shared/theme-context';

import ChipsDemo from './ChipsDemo';
import ButtonsDemo from './ButtonsDemo';
import SegmentedDemo from './SegmentedDemo';
import BlockDemo from './BlockDemo';
import ListDemo from './ListDemo';
import CardsDemo from './CardsDemo';
import CheckboxDemo from './CheckboxDemo';
import RadioDemo from './RadioDemo';
import ProgressbarDemo from './ProgressbarDemo';
import PreloaderDemo from './PreloaderDemo';
import ToggleDemo from './ToggleDemo';

function App() {
  const [theme, setTheme] = useState('material');
  return (
    <ThemeContext.Provider value={theme}>
      <div className={`app ${theme}`}>
        <Page className={`relative`}>
          <Navbar
            className="top-0 no-hairlines"
            position="sticky"
            left={<Link navbar>Left</Link>}
            title="Tailwind Mobile"
            right={<Link navbar>Right</Link>}
          />
          <Subnavbar
            className="sticky ios:top-11 material:top-14"
            position="sticky"
          >
            <Segmented strong rounded>
              <SegmentedButton
                strong
                small
                rounded
                active={theme === 'ios'}
                onClick={() => setTheme('ios')}
              >
                iOS Theme
              </SegmentedButton>
              <SegmentedButton
                strong
                small
                rounded
                active={theme === 'material'}
                onClick={() => setTheme('material')}
              >
                Material Design
              </SegmentedButton>
            </Segmented>
          </Subnavbar>

          <ToggleDemo />
          <PreloaderDemo />
          <ProgressbarDemo />
          <RadioDemo />
          <CheckboxDemo />
          <CardsDemo />
          <ChipsDemo />
          <ButtonsDemo />
          <SegmentedDemo />
          <BlockDemo />
          <ListDemo />

          <Toolbar className="bottom-0" position="sticky">
            <Link toolbar>Link 1</Link>
            <Link toolbar>Link 2</Link>
            <Link toolbar>Link 3</Link>
          </Toolbar>
        </Page>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
