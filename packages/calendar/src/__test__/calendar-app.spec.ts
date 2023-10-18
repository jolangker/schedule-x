import {
  describe,
  expect,
  it,
} from '@schedule-x/shared/src/utils/stateless/testing/unit/unit-testing-library.impl'
import { createCalendar } from '../factory'
import { viewMonth } from '../views/month'

describe('CalendarApp', () => {
  describe('bootstrapping the app', () => {
    it('should render the CalendarWrapper component', () => {
      const calendarEl = document.createElement('div')
      document.body.appendChild(calendarEl)
      const calendarApp = createCalendar(calendarEl, {
        views: [viewMonth],
      })
      expect(document.querySelector('.sx__calendar-wrapper')).toBeNull()

      calendarApp.bootstrap()

      expect(document.querySelector('.sx__calendar-wrapper')).toBeInstanceOf(
        HTMLElement
      )
    })
  })
})
