import React from 'react'
import { useDarkModeContext } from '~/components/darkModeProvider'

const ThemeToggle: React.FC = () => {
    const { mode, changeMode } = useDarkModeContext()

    return (
        <select
            value={mode}
            onChange={(e) => changeMode(e.target.value as 'light' | 'dark' | 'system')}
            className="p-2 rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-white"
        >
            <option value="light">Light</option>
            <option value="dark">Dark</option>
            <option value="system">System</option>
        </select>
    )
}

export { ThemeToggle }
