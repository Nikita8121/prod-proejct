import type { Meta, StoryObj } from '@storybook/react'

import { NavBar } from './NavBar'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'widget/NavBar',
  component: NavBar,
  tags: ['autodocs'],
  argTypes: {}
} satisfies Meta<typeof NavBar>

export default meta
type Story = StoryObj<typeof meta>

export const Light: Story = {}

export const Dark: Story = {}
Dark.decorators = [ThemeDecorator(Theme.DARK)]
