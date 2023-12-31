import type { Meta, StoryObj } from '@storybook/react'

import { Modal } from './Modal'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'ui/Modal',
  component: Modal,
  tags: ['autodocs'],
  argTypes: {}
} satisfies Meta<typeof Modal>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    children: 'Primary'
  }
}

export const Clear: Story = {
  args: {
    children: 'Modalasdasda'
  }
}
