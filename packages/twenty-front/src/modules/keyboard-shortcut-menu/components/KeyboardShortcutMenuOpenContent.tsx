import { Key } from 'ts-key-enum';

import { KEYBOARD_SHORTCUTS_GENERAL } from '@/keyboard-shortcut-menu/constants/KeyboardShortcutsGeneral';
import { KEYBOARD_SHORTCUTS_TABLE } from '@/keyboard-shortcut-menu/constants/KeyboardShortcutsTable';
import { AppHotkeyScope } from '@/ui/utilities/hotkey/types/AppHotkeyScope';

import { useKeyboardShortcutMenu } from '../hooks/useKeyboardShortcutMenu';

import { useGlobalHotkeys } from '@/ui/utilities/hotkey/hooks/useGlobalHotkeys';
import { KeyboardMenuDialog } from './KeyboardShortcutMenuDialog';
import { KeyboardMenuGroup } from './KeyboardShortcutMenuGroup';
import { KeyboardMenuItem } from './KeyboardShortcutMenuItem';

export const KeyboardShortcutMenuOpenContent = () => {
  const { toggleKeyboardShortcutMenu, closeKeyboardShortcutMenu } =
    useKeyboardShortcutMenu();

  useGlobalHotkeys(
    [Key.Escape],
    () => {
      closeKeyboardShortcutMenu();
    },
    false,
    AppHotkeyScope.KeyboardShortcutMenuOpen,
    [closeKeyboardShortcutMenu],
  );

  return (
    <>
      <KeyboardMenuDialog onClose={toggleKeyboardShortcutMenu}>
        <KeyboardMenuGroup heading="Table">
          {KEYBOARD_SHORTCUTS_TABLE.map((TableShortcut, index) => (
            <KeyboardMenuItem shortcut={TableShortcut} key={index} />
          ))}
        </KeyboardMenuGroup>
        <KeyboardMenuGroup heading="General">
          {KEYBOARD_SHORTCUTS_GENERAL.map((GeneralShortcut) => (
            <KeyboardMenuItem shortcut={GeneralShortcut} />
          ))}
        </KeyboardMenuGroup>
      </KeyboardMenuDialog>
    </>
  );
};
