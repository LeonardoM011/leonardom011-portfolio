import React from 'react'
import { useDarkModeContext } from '~/components/darkModeProvider'

import "@theme-toggles/react/css/Classic.css"
import { Classic } from "@theme-toggles/react"

function ThemeToggle({ className, fill, ...props }: React.ComponentProps<"svg">) {
    const {mode, changeMode} = useDarkModeContext()
    return (
        <div className={`border-2 border-gray-500 rounded-md flex items-center justify-center pl-3 pr-3 ${className}`}>
            <Classic
                duration={750}
                toggled={mode === 'dark'}
                onToggle={
                    (value) => {
                        changeMode(value ? 'dark' : 'light')
                    }
                }
            />
        </div>
    )
}

export {ThemeToggle}